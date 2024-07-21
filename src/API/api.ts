// Basic URL and headers
export const API_BASE_URL = 'https://onewordserv.byst.re/api/';
export const headers = {
  Accept: 'application.json',
  'Content-Type': 'application/json; charset=utf-8',
};

//API endpoint definitions
export const API_Endpoints = {
  // Authentication endpoints
  login: `${API_BASE_URL}auth/login`,
  signup: `${API_BASE_URL}auth/register`,
  user: `${API_BASE_URL}auth/user`,

  // Settings endpoints
  getUserSettings: `${API_BASE_URL}settings/user-settings`,
  updateUserSettings: `${API_BASE_URL}settings/user-settings`,

  // Words endpoints
  getAllWords: `${API_BASE_URL}words/all`,
  addWord: `${API_BASE_URL}words/add-one`,
  sendCsv: `${API_BASE_URL}words/add-csv`,
  getTodayWord: `${API_BASE_URL}words/today-word`,
  learnedWords: `${API_BASE_URL}words/learned-words`,

  updateWord: (id: string) => `${API_BASE_URL}words/update-one/${id}`,
  deleteWord: (id: string) => `${API_BASE_URL}words/delete-one/${id}`,

  // Subscription endpoints
  sendNotification: `${API_BASE_URL}subscription/sendNotification`,
  subscribe: `${API_BASE_URL}subscription/subscribe`,
  unsubscribeDevice: `${API_BASE_URL}subscription/unsubscribe-device`,
  unsubscribeAll: `${API_BASE_URL}subscription/unsubscribe-all`,
  vapidPublicKey: `${API_BASE_URL}subscription/vapidPublicKey`,
};

// Static and dynamic endpoint types
type StaticEndpoint = {
  [K in keyof typeof API_Endpoints]: (typeof API_Endpoints)[K] extends Function ? never : K;
}[keyof typeof API_Endpoints];

type DynamicEndpoint = {
  [K in keyof typeof API_Endpoints]: (typeof API_Endpoints)[K] extends Function ? K : never;
}[keyof typeof API_Endpoints];

// Interface for query parameters
interface QueryParams {
  limit?: number;
  days?: number;
}

// Request options interface
interface RequestOptions {
  endpoint: StaticEndpoint | DynamicEndpoint;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  customHeaders?: HeadersInit;
  params?: string;
  queryParams?: QueryParams;
}

const fetchWithToken = async ({
  endpoint,
  method = 'GET',
  body,
  customHeaders,
  params,
  queryParams = {},
}: RequestOptions) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found.');
  }

  const fullHeaders = {
    ...headers,
    Authorization: `Bearer ${token}`,
    ...customHeaders,
  };

  let url: string;
  if (typeof API_Endpoints[endpoint] === 'function') {
    if (!params) {
      throw new Error('Params required for dynamic endpoints');
    }
    url = (API_Endpoints[endpoint] as (id: string) => string)(params);
  } else {
    url = API_Endpoints[endpoint] as string;
  }

  if (queryParams && Object.keys(queryParams).length > 0) {
    const queryString = new URLSearchParams(queryParams as any).toString();
    url += `?${queryString}`;
  }
  const response = await fetch(url, {
    method,
    headers: fullHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const jsonResponse = await response.json();
  return await { response: jsonResponse, status: response.status };
};

export default fetchWithToken;

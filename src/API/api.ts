// export const API_BASE_URL = 'http://localhost:8080/api/';
export const API_BASE_URL = 'https://onewordserv.byst.re/api/';
//
export const headers = {
  Accept: 'application.json',
  'Content-Type': 'application/json; charset=utf-8',
};

export const API_Endpoints = {
  // auth
  login: `${API_BASE_URL}auth/login`,
  signup: `${API_BASE_URL}auth/register`,
  user: `${API_BASE_URL}auth/user`,

  // settings
  getUserSettings: `${API_BASE_URL}settings/user-settings`,
  updateUserSettings: `${API_BASE_URL}settings/user-settings`,

  // words
  getAllWords: `${API_BASE_URL}words/all`, //GET
  addWord: `${API_BASE_URL}words/add-one`, //POST
  sendCsv: `${API_BASE_URL}words/add-csv`, //POST
  getTodayWord: `${API_BASE_URL}words/today-word`, //GET

  updateWord: (id: string) => `${API_BASE_URL}words/update-one/${id}`, //PUT
  deleteWord: (id: string) => `${API_BASE_URL}words/delete-one/${id}`, // DELETE
};

type ApiEndpoint = keyof typeof API_Endpoints;
type StaticEndpoint = {
  [K in keyof typeof API_Endpoints]: (typeof API_Endpoints)[K] extends Function ? never : K;
}[keyof typeof API_Endpoints];

type DynamicEndpoint = {
  [K in keyof typeof API_Endpoints]: (typeof API_Endpoints)[K] extends Function ? K : never;
}[keyof typeof API_Endpoints];

interface RequestOptions {
  endpoint: StaticEndpoint | DynamicEndpoint;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  customHeaders?: HeadersInit;
  params?: string;
}

const fetchWithToken = async ({
  endpoint,
  method = 'GET',
  body,
  customHeaders,
  params,
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

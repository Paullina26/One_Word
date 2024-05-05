import { API_BASE_URL, headers } from 'API/api';

export const getOpenaiApiKey = async () => {
  const token = localStorage.getItem('token');

  const getApiKeyResp = await fetch(`${API_BASE_URL}chat/api-key`, {
    headers: { ...headers, Authorization: `Bearer ${token}` },
  });
  const apiKey = await getApiKeyResp.json();
  return apiKey;
};

import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  Method,
  CancelToken
} from 'axios';

type RequestOptions = {
  method?: Method;
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
  data?: object;
  headers?: object;
  cancelToken?: CancelToken,
  params?: any
}

const BASE_URL = 'https://gentle-fjord-28219.herokuapp.com'

const FAKE_TOKEN = 'fake_bearer_token_string';

export default function request<T>(
  url: string,
  options: RequestOptions = {
    method: 'GET',
    data: {},
    headers: {},
    params: {}
  }
): Promise<AxiosResponse<T>> {
  const config: AxiosRequestConfig = {
    url: `${BASE_URL}/${url}`,
    method: options.method ? options.method : 'GET',
    data: options.data,
    responseType: options.responseType,
    cancelToken: options.cancelToken,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${FAKE_TOKEN}`,
      ...options.headers,
    },
    params: options.params
  };
  return axios(config)
  .then((response: AxiosResponse<T>) => Promise.resolve(response))
  .catch((error: AxiosError) => Promise.reject(error.response && error.response.data))
}
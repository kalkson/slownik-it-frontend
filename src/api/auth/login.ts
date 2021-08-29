import HandledResponse from 'api/terms/types';
import Cookies from 'js-cookie';

const BASE_URL = process.env.API_URL;

export type Credentials = {
  email?: string;
  password?: string;
};

type Fetched = {
  token?: string;
  email?: string;
};

const login = async (credentials: Credentials): Promise<HandledResponse> => {
  const responseFromServer = await fetch(`${BASE_URL}login_auth`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response)
    .then(async (response) => {
      const fetchedData = (await response.json()) as Fetched;
      const { token } = fetchedData;

      if (token) {
        Cookies.set('token', token);
      }

      return response;
    });

  if (responseFromServer.ok)
    return {
      success: true,
      message: 'Zalogowano',
      email: credentials.email,
    };

  const dummyResponse: HandledResponse = { success: false, message: '' };
  switch (responseFromServer.status) {
    case 401:
      dummyResponse.message = 'Nieprawidłowy e-mail lub hasło';
      break;
    case 403:
      dummyResponse.message = 'Do autoryzacji wymagany jest token';
      break;
    default:
      dummyResponse.message = 'Coś poszło nie tak';
      break;
  }

  return dummyResponse;
};

export default login;

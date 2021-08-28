import HandledResponse from 'api/terms/types';
// import { Credentials } from 'components/LoginForm/LoginForm';

const BASE_URL = process.env.API_URL;

export type Credentials = {
  email?: string;
  password?: string;
};

type Fetched = {
  token?: string;
};

const login = async (credentials: Credentials): Promise<HandledResponse> => {
  console.log(credentials);

  const responseFromServer = await fetch(`${BASE_URL}login_auth`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response)
    .then(async (response) => {
      const fetchedData = (await response.json()) as Fetched;
      const { token } = fetchedData;

      if (token) {
        window.localStorage.setItem('token', token);
      }

      return response;
    })
    .catch((response) => response);

  if (responseFromServer.ok)
    return {
      success: true,
      message: 'Zalogowano',
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

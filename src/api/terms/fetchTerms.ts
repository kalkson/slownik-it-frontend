import Cookies from 'js-cookie';
import HandledResponse from './types';

const BASE_URL = process.env.API_URL;

const fetchTerms = async (
  type: string | string[] | undefined,
  token: string
): Promise<HandledResponse> => {
  // const tokens = tokens.get();
  console.log(token);

  const responseFromServer = await fetch(`${BASE_URL}terms/${type}/fetch`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ token }),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response)
    .catch((response) => response);

  if (responseFromServer.ok) {
    const dataFromServer = await responseFromServer.json();
    Cookies.set('token', dataFromServer.token);

    return {
      success: true,
      message: 'Pobrano',
      data: dataFromServer.data,
    };
  }

  const dummyResponse: HandledResponse = { success: false, message: '' };
  switch (responseFromServer.status) {
    case 501:
      dummyResponse.message = 'Błąd serwera';
      break;
    default:
      dummyResponse.message = 'Coś poszło nie tak';
      break;
  }

  return dummyResponse;
};

export default fetchTerms;

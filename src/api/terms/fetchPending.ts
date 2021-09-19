import Cookies from 'js-cookie';
import HandledResponse from './types';

const BASE_URL = process.env.API_URL;

const fetchPendingTerms = async (
  cookies = Cookies.get()
): Promise<HandledResponse> => {
  const responseFromServer = await fetch(`${BASE_URL}terms/pending/fetch`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ token: cookies.token }),
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

export default fetchPendingTerms;

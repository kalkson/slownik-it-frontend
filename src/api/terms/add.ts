import HandledResponse from './types';

const BASE_URL = process.env.API_URL;

interface Term {
  term?: string;
  meaning?: string;
  description?: string;
  token?: string | null;
}

const addTerm = async (termToAdd: Term): Promise<HandledResponse> => {
  const responseFromServer = await fetch(`${BASE_URL}terms/add`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(termToAdd),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response)
    .catch((response) => response);

  if (responseFromServer.ok)
    return {
      success: true,
      message: 'Dodano do weryfikacji',
    };

  const dummyResponse: HandledResponse = { success: false, message: '' };
  switch (responseFromServer.status) {
    case 409:
      dummyResponse.message = 'Podany termin już istnieje';
      break;
    default:
      dummyResponse.message = 'Coś poszło nie tak';
      break;
  }

  return dummyResponse;

  // if (fetchedData?.token) {
  //   window.localStorage.setItem('token', fetchedData.token);
  //   handleSuccess('Zalogowano');
  //   router.push('/admin/dashboard');
  // } else {
  //   handleError(fetchedData.message);
  // }
};

export default addTerm;

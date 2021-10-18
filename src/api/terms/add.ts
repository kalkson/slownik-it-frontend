import HandledResponse, { Term, TermType } from '../../types';

const BASE_URL = process.env.API_URL;

const addTerm = async (
  termToAdd: Term,
  type: TermType
): Promise<HandledResponse> => {
  const responseFromServer = await fetch(`${BASE_URL}terms/${type}`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ ...termToAdd, type }),
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
      message: 'Przesłano!',
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
};

export default addTerm;

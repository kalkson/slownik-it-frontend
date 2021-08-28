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

  switch (responseFromServer.status) {
    case 409:
      return {
        success: false,
        message: 'Podany termin już istnieje',
      };
    default:
      return {
        success: false,
        message: 'Coś poszło nie tak',
      };
  }
};

export default addTerm;

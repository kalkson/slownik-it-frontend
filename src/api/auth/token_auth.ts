import { User } from 'context/UserContext';

export interface GetServerSidePropsReturnType {
  props: {
    user?: User;
  };
}

const authToken = async (
  parsedCookies:
    | {
        token?: string;
      }
    | undefined
): Promise<GetServerSidePropsReturnType | null> => {
  if (parsedCookies?.token) {
    const result: User = await fetch(`${process.env.API_URL}token_auth`, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: parsedCookies.token }),
    })
      .then((data) => data.json())
      .then((data) => data.user)
      .catch((response) => response);

    return {
      props: {
        user: {
          email: result.email,
          user_id: result.user_id,
        },
      },
    };
  }

  return { props: {} };
};

export default authToken;

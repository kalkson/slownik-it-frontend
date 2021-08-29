import { User } from 'context/UserContext';

const authToken = async (
  parsedCookies:
    | {
        token?: string;
      }
    | undefined
): Promise<User | null> => {
  if (parsedCookies?.token) {
    const result: Response = await fetch(`${process.env.API_URL}token_auth`, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: parsedCookies.token }),
    }).then((data) => data);

    console.log(result);

    if (result.status >= 200 && result.status < 300) {
      const { user } = await result.json();

      return {
        email: user.email,
        user_id: user.user_id,
      };
    }
  }

  return null;
};

export default authToken;

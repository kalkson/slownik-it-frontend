import { User } from 'context/UserContext';
import Cookies from 'js-cookie';

const authToken = async (cookies = Cookies.get()): Promise<User | null> => {
  try {
    if (cookies?.token) {
      const result: Response = await fetch(
        `${process.env.API_URL}token_auth_login`,
        {
          method: 'POST',
          credentials: 'same-origin',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: cookies.token }),
        }
      ).then((data) => data);

      if (result.ok) {
        const { user } = await result.json();

        return {
          email: user.email,
          user_id: user.user_id,
          error: 0,
        };
      }
    }
  } catch (error) {
    return {
      error: 1,
    };
  }

  return null;
};

export default authToken;

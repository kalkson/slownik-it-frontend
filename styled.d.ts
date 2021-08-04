// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [key: string]: string;
    };

    media: {
      [key: string]: string;
    };

    colors: {
      [key: string]: string;
    };
  }
}

import { RefObject } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type BounceType = RefObject<ReCAPTCHA> | RefObject<HTMLInputElement>;

const bounce = (e: BounceType): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DOMElement: any = e.current;
  const element = DOMElement?.captcha || DOMElement;

  element.classList.toggle('animate__animated');
  element.classList.toggle('animate__bounce');

  setTimeout(() => {
    element.classList.toggle('animate__animated');
    element.classList.toggle('animate__bounce');
  }, 1000);
};

export default bounce;

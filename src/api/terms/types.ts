interface HandledResponse {
  success: boolean;
  message: string;
  code?: number;
  email?: string;
}

export default HandledResponse;

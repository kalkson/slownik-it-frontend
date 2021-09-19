interface HandledResponse {
  success: boolean;
  message: string;
  code?: number;
  email?: string;
  data?: Term[];
}

export interface Term {
  term?: string;
  meaning?: string;
  description?: string;
  token?: string | null;
}

export default HandledResponse;

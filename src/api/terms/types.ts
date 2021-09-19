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
  _id?: string;
}
export interface TermRowType extends Term {
  _id: string;
}

export default HandledResponse;

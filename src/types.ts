// eslint-disable-next-line import/prefer-default-export
export enum TermType {
  pending = 'pending',
  accepted = 'accepted',
  rejected = 'rejected',
  updated = 'updated',
}

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

export enum ActionButtonVariant {
  green = 'green',
  blue = 'blue',
  red = 'red',
}

export enum ActionButtonsType {}

export default HandledResponse;

import { addTerm } from 'api/terms';
import Cookies from 'js-cookie';
import HandledResponse, { ActionButtonVariant, Term, TermType } from 'types';

interface GetTermActionsType {
  variant: ActionButtonVariant;
  content: string;
  onClick: (value: Term) => Promise<HandledResponse>;
}

const handleButtonClick = async (
  termData: Term,
  type: TermType
): Promise<HandledResponse> => {
  const cookies = Cookies.get();
  const token = cookies?.token;

  if (!token) return { success: false, message: 'Nieprawidłowy token' };

  const result = await addTerm({ ...termData, token }, type);
  return result;
};

const getActionButtonInstance = (
  content: string,
  variant: ActionButtonVariant,
  type: TermType
) => ({
  variant,
  content,
  onClick: (termData: Term) => handleButtonClick(termData, type),
});

const getTermActions = (type: TermType): GetTermActionsType[] => {
  switch (type) {
    case TermType.pending: {
      return [
        getActionButtonInstance(
          'Zaakceptuj',
          ActionButtonVariant.green,
          TermType.accepted
        ),
        getActionButtonInstance(
          'Odrzuć',
          ActionButtonVariant.red,
          TermType.rejected
        ),
      ];
    }

    case TermType.accepted: {
      return [
        getActionButtonInstance(
          'Odrzuć',
          ActionButtonVariant.red,
          TermType.rejected
        ),
      ];
    }

    case TermType.rejected: {
      return [
        getActionButtonInstance(
          'Zaakceptuj',
          ActionButtonVariant.green,
          TermType.accepted
        ),
      ];
    }

    case TermType.updated: {
      return [
        getActionButtonInstance(
          'Zaakceptuj',
          ActionButtonVariant.green,
          TermType.accepted
        ),
        getActionButtonInstance(
          'Odrzuć',
          ActionButtonVariant.red,
          TermType.rejected
        ),
      ];
    }

    default:
      return [];
  }
};

export default getTermActions;

import Link from 'next/link';
import { FC } from 'react';
import { TermType } from 'types';
import StyledPanelNavigation from './PanelNavigation.styled';

const PanelNavigation: FC<{ route?: string }> = ({ route }) => (
  <StyledPanelNavigation className="nav">
    <ul className="nav__list">
      <li className={route === TermType.pending ? 'active' : ''}>
        <Link href="/admin/dashboard/pending">Oczekujące</Link>
      </li>
      <li className={route === TermType.accepted ? 'active' : ''}>
        <Link href="/admin/dashboard/accepted">Zaakceptowane</Link>
      </li>
      <li className={route === TermType.updated ? 'active' : ''}>
        <Link href="/admin/dashboard/updated">Do zaktualizowania</Link>
      </li>
      <li className={route === TermType.rejected ? 'active' : ''}>
        <Link href="/admin/dashboard/rejected">Odrzucone</Link>
      </li>
    </ul>
  </StyledPanelNavigation>
);

export default PanelNavigation;

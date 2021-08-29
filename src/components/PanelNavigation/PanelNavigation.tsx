import Link from 'next/link';
import { FC } from 'react';
import StyledPanelNavigation from './PanelNavigation.styled';

const PanelNavigation: FC<{ route?: string }> = ({ route }) => (
  <StyledPanelNavigation className="nav">
    <ul className="nav__list">
      <li className={route === 'pending' ? 'active' : ''}>
        <Link href="/admin/dashboard/pending">Oczekujące</Link>
      </li>
      <li className={route === 'accepted' ? 'active' : ''}>
        <Link href="/admin/dashboard/accepted">Zaakceptowane</Link>
      </li>
      <li className={route === 'rejected' ? 'active' : ''}>
        <Link href="/admin/dashboard/rejected">Odrzucone</Link>
      </li>
    </ul>
  </StyledPanelNavigation>
);

export default PanelNavigation;

import Link from 'next/link';
import { FC } from 'react';
import StyledPanelNavigation from './PanelNavigation.styled';

const PanelNavigation: FC = () => (
  <StyledPanelNavigation className="nav">
    <ul className="nav__list">
      <li>
        <Link href="/admin/dashboard/pending">Oczekujące</Link>
      </li>
      <li>
        <Link href="/admin/dashboard/accepted">Zaakcpetowane</Link>
      </li>
      <li>
        <Link href="/admin/dashboard/rejected">Odrzucone</Link>
      </li>
    </ul>
  </StyledPanelNavigation>
);

export default PanelNavigation;

/* eslint-disable import/extensions */
import { FC } from 'react';
import { ListItem, CustomLink, Badge, NavTitle } from './NavBarStyles';

interface Props {
  title: string;
  to: string;
  isBadge?: boolean;
  countBadge?: number;
  onClick?: () => void;
}

export const ListNavItem: FC<Props> = ({
  title,
  to,
  children,
  isBadge,
  countBadge,
  onClick,
}) => {
  return (
    <ListItem onClick={onClick}>
      <CustomLink to={to}>
        {isBadge && <Badge>{countBadge}</Badge>}
        {children}
        <NavTitle>{title}</NavTitle>
      </CustomLink>
    </ListItem>
  );
};

/* eslint-disable import/extensions */
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBookmarkDashFill, BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { useToken } from '../../Hook/Toke';
import { ListNavItem } from './ListNavItem';
import {
  List,
  LogoTextYellow,
  LogoTextWhite,
  StyleObj,
  NavBox,
  NavContainer,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
  NavInnerSection,
  NavBoxLogo,
} from './NavBar.styles';

export const Navbar = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  const token = useToken();
  return (
    <NavContainer>
      <NavInnerSection>
        <NavBoxLogo>
          <LogoTextYellow to="/">Pro</LogoTextYellow>
          <LogoTextWhite to="/">Shop</LogoTextWhite>
        </NavBoxLogo>

        <NavBox style={{ background: '#FFF', borderRadius: 6 }}>
          <SearchInput
            value={value}
            type="text"
            placeholder="Search"
            onChange={e => {
              setValue(e.target.value);
            }}
          />
          <SearchButton
            onClick={() => {
              navigate(`/search${value ? `?keyword=${value}` : ''}`);
            }}
          >
            <StyledSearchIcon />
            Search
          </SearchButton>
        </NavBox>
        <NavBox>
          <List>
            <ListNavItem
              to={token ? '/profile' : '/login'}
              title={token ? 'Profile' : 'Login / Sign up'}
            >
              <FaUserAlt style={StyleObj} />
            </ListNavItem>

            <ListNavItem to="/wishlist" title="Wishlist">
              <BsFillBookmarkDashFill style={StyleObj} />
            </ListNavItem>

            {token && (
              <>
                <ListNavItem to="/cart" isBadge countBadge={2} title="Cart">
                  <BsFillCartFill style={StyleObj} />
                </ListNavItem>
                <ListNavItem
                  to="/"
                  title="logout"
                  onClick={() => console.log('out')}
                >
                  <BiLogOut style={StyleObj} />
                </ListNavItem>
              </>
            )}
          </List>
        </NavBox>
      </NavInnerSection>
    </NavContainer>
  );
};

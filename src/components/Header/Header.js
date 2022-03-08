import React from 'react';
import { HeaderWrap, HeadWrap, LOGO, Logout } from './styles';

const Header = () => {
  return (
    <HeaderWrap>
      <HeadWrap>
        <LOGO>BACKTASKING</LOGO>
        <Logout>로그아웃</Logout>
      </HeadWrap>
    </HeaderWrap>
  );
};

export default Header;
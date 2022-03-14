import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderWrap, HeadWrap, LOGO, Logout } from './styles';
import { history } from '../../redux/configStore';

import { actionCreators as userActions } from '../../redux/modules/user';

const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector(state => state.user.is_login);

  return (
    <HeaderWrap>
      <HeadWrap>
        <LOGO>BACKTASKING</LOGO>
        {is_login &&
          <Logout onClick={() => {
            dispatch(userActions.logout());
          }}>로그아웃</Logout>
        }
      </HeadWrap>
    </HeaderWrap>
  );
};

export default Header;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderWrap, HeadWrap, LOGO, Logout } from './styles';
import { history } from '../../redux/configStore';

import { actionCreators as userActions } from '../../redux/modules/user';
import logo from "../../assets/images/logo_1_se.png"
const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector(state => state.user.is_login);

  return (
    <HeaderWrap>
      <HeadWrap>
        <LOGO src={logo}
          onClick={() => {
            history.push('/');
          }}
        >
        </LOGO>
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
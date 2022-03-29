import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderBtnWrap, HeaderWrap, HeadWrap, InfoBtn, LOGO, Logout, ModalWrap, TestInfoModalBG } from './styles';
import { history } from '../../redux/configStore';

import { actionCreators as userActions } from '../../redux/modules/user';
import logo from "../../assets/images/logo_1_se.png"
import TestInfoModal from '../TestInfoModal/TestInfoModal';
const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector(state => state.user.is_login);

  const [modal_open, setModalOpen] = useState(false);

  return (
    <HeaderWrap>
      <HeadWrap>
        <LOGO src={logo}
          onClick={() => {
            history.push('/');
          }}
          >
        </LOGO>
        <HeaderBtnWrap>
          { modal_open &&
          <TestInfoModalBG
            onClick={()=>{
              setModalOpen(false);
            }}
          />
          }
          { modal_open &&
            <ModalWrap>
              <TestInfoModal modal_open={setModalOpen} />
            </ModalWrap>
          }
          <InfoBtn
            onClick={()=>{
              setModalOpen(!modal_open);
            }}
          >
            실험 방법
          </InfoBtn>
          {is_login &&
            <Logout onClick={() => {
              dispatch(userActions.logout());
            }}>로그아웃</Logout>
          }
        </HeaderBtnWrap>
      </HeadWrap>
    </HeaderWrap>
  );
};

export default Header;
import React from 'react';
import BackTestForm from '../../components/BackTestForm/BackTestForm';
import { BackTestWrap, InfoTitle, InfoWrap, InfoContLeft, InfoContRight, InfoCont, InfoCircle } from './style';

const BackTest = (props) => {
  return (
    <BackTestWrap>
      <InfoTitle>
      간편하게 실험을 <br />
      시작해볼까요?   
      </InfoTitle>
      <InfoWrap>
        <InfoContLeft>
          <InfoCont>
            <InfoCircle />
            실험하고 싶은 자산은 최대 5개까지만 가능해요
          </InfoCont>
          <InfoCont>
            <InfoCircle />
            실험금액은 100만원 ~ 100,000만원만 가능해요
          </InfoCont>
        </InfoContLeft>
        <InfoContRight>
          <InfoCont>
            <InfoCircle />
            자산 비율은 총 100%를 맞춰서 입력해주세요
          </InfoCont>
          {/* <InfoCont>
            <InfoCircle />
            
          </InfoCont> */}
        </InfoContRight>
      </InfoWrap>
      
      <BackTestForm/>
    </BackTestWrap>
  );
};

export default BackTest;
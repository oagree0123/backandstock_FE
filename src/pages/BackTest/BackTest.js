import React from 'react';
import BackTestForm from '../../components/BackTestForm/BackTestForm';
import { BackTestWrap, InfoTitle, InfoWrap, InfoContLeft, InfoContRight, InfoCont, InfoCircle } from './style';

const BackTest = (props) => {
  return (
    <BackTestWrap>
      <InfoTitle>
      실험실 안내사항
      </InfoTitle>
      <InfoWrap>
        <InfoContLeft>
          <InfoCont>
            <InfoCircle />
            종목은 최대 5개까지 선택 가능해요
          </InfoCont>
          <InfoCont>
            <InfoCircle />
            실험 기간은 3년이내로 가능해요
          </InfoCont>
        </InfoContLeft>
        <InfoContRight>
          <InfoCont>
            <InfoCircle />
            자산 5개를 합쳐서 100비율을 만들어 주세요
          </InfoCont>
          <InfoCont>
            <InfoCircle />
            종목은 최대 5개까지 선택 가능해요
          </InfoCont>
        </InfoContRight>
      </InfoWrap>
      
      <BackTestForm/>
    </BackTestWrap>
  );
};

export default BackTest;
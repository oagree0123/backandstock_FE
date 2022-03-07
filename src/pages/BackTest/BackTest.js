import React from 'react';
import BackTestForm from '../../components/BackTestForm/BackTestForm';
import { BackTestWrap, InfoTitle, InfoWrap, InfoContWrap, InfoCont, InfoCircle } from './style';

const BackTest = () => {
  return (
    <BackTestWrap>
      <InfoWrap>
        <InfoTitle>
        간편하게 실험을 <br />
        시작해볼까요?
        </InfoTitle>
        <InfoContWrap>
          <InfoCont>
            <InfoCircle />
            실험하고 싶은 자산은 죄대 5개까지만 가능해요
          </InfoCont>
          <InfoCont>
            <InfoCircle />
            실험 기간은 3년이내로 가능해요
          </InfoCont>
          <InfoCont>
            <InfoCircle />
            자산 5개를 합쳐서 100비율을 만들어 주세요
          </InfoCont>
          <InfoCont>
            <InfoCircle />
            실험하고 싶은 자산은 죄대 5개까지만 가능해요
          </InfoCont>
        </InfoContWrap>
      </InfoWrap>
      
      <BackTestForm/>
    </BackTestWrap>
  );
};

export default BackTest;
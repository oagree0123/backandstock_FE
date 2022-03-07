import React from 'react';
import { SideTapWrap, SideUserWrap, UserImg, Username, UserText, ProfileBtn, TabWrap, Tab, TabTitle, TabContent, TabDesc, TabIcon } from './style';

const SideTap = () => {
  return (
    <SideTapWrap >
      <SideUserWrap>
        <UserImg />
        <Username>홍길동님</Username>
        <UserText>
          오늘은 어떤 자산을 <br />
          실험해 볼까요?
        </UserText>
        <ProfileBtn>프로필 수정하기</ProfileBtn>
      </SideUserWrap>
      <TabWrap>
        <Tab>
          <TabIcon />
          <TabContent>
            <TabTitle>실험실</TabTitle>
            <TabDesc>당신의 수익을 확인해보세요</TabDesc>
          </TabContent>
        </Tab>
      </TabWrap>
    </SideTapWrap>
  );
};

export default SideTap;
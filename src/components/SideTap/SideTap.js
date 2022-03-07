import React, { useState } from 'react';
import { history } from '../../redux/configStore';
import { SideTapWrap, SideUserWrap, UserImg, Username, UserText, ProfileBtn, TabWrap, Tab, TabTitle, TabContent, TabDesc, TabIcon, TabClicked } from './style';

const SideTap = (props) => {
  const [lab_clicked, setLabClicked] = useState(true);
  const [portf_clicked, setPortfClicked] = useState(false);
  const [commu_clicked, setCommuClicked] = useState(false);

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
        { !lab_clicked ?
          <Tab onClick={() => {
            setLabClicked(true);
            setPortfClicked(false);
            setCommuClicked(false);
            history.push('/');
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>실험실</TabTitle>
              <TabDesc>당신의 수익을 확인해보세요</TabDesc>
            </TabContent>
          </Tab> :
          <TabClicked onClick={() => {
            setLabClicked(true);
            setPortfClicked(false);
            setCommuClicked(false);
            history.push('/');
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>실험실</TabTitle>
              <TabDesc>당신의 수익을 확인해보세요</TabDesc>
            </TabContent>
          </TabClicked>
        }
        { !portf_clicked ?
          <Tab onClick={() => {
            setLabClicked(false);
            setPortfClicked(true);
            setCommuClicked(false);
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>포트폴리오</TabTitle>
              <TabDesc>당신의 투자 상태를 체크해보세요</TabDesc>
            </TabContent>
          </Tab> :
          <TabClicked onClick={() => {
            setLabClicked(false);
            setPortfClicked(true);
            setCommuClicked(false);
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>포트폴리오</TabTitle>
              <TabDesc>당신의 투자 상태를 체크해보세요</TabDesc>
            </TabContent>
          </TabClicked>
        }
        { !commu_clicked ?
          <Tab onClick={() => {
            setLabClicked(false);
            setPortfClicked(false);
            setCommuClicked(true);
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>커뮤니티</TabTitle>
              <TabDesc>자산 정보를 확인해보세요</TabDesc>
            </TabContent>
          </Tab> :
          <TabClicked onClick={() => {
            setLabClicked(false);
            setPortfClicked(false);
            setCommuClicked(true);
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>커뮤니티</TabTitle>
              <TabDesc>자산 정보를 확인해보세요</TabDesc>
            </TabContent>
          </TabClicked>
        }
      </TabWrap>
    </SideTapWrap>
  );
};

export default SideTap;
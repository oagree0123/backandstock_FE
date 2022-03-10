import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { history } from '../../redux/configStore';
import { SideTapWrap, SideUserWrap, UserImg, Username, UserText, ProfileBtn, TabWrap, Tab, TabTitle, TabContent, TabDesc, TabIcon, TabClicked, TabClickedDesc, TabClickedTitle, UserBtnWrap, LoginBtn, SignupBtn } from './style';

const SideTap = (props) => {

  const is_login = useSelector(state => state.user.is_login);
  const user = useSelector(state => state.user.user_info);

  const [lab_clicked, setLabClicked] = useState(true);
  const [portf_clicked, setPortfClicked] = useState(false);
  const [commu_clicked, setCommuClicked] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname);
    if(window.location.pathname === "/community") {
      setLabClicked(false);
      setPortfClicked(false);
      setCommuClicked(true);
    }
    else if(window.location.pathname === "/portfolio/1") {
      setLabClicked(false);
      setPortfClicked(true);
      setCommuClicked(false);
    }
    else {
      setLabClicked(true);
      setPortfClicked(false);
      setCommuClicked(false);
    }
  }, [lab_clicked, portf_clicked, commu_clicked])

  return (
    <SideTapWrap >
      {is_login ?
        <SideUserWrap>
          <UserImg />
          <Username>{user.nickname}</Username>
          <UserText>
            오늘은 어떤 자산을 <br />
            실험해 볼까요?
          </UserText>
          <ProfileBtn>프로필 수정하기</ProfileBtn> 
        </SideUserWrap> :
        <SideUserWrap>
          <UserImg />
          <Username>방문자님</Username>
          <UserText>
            로그인을 해야 자산을 <br />
            실험할 수 있어요
          </UserText>
          <UserBtnWrap>
            <LoginBtn onClick={() => {
              history.push('/login');
            }}>로그인</LoginBtn>
            <SignupBtn onClick={() => {
              history.push('/signup');
            }}>회원가입</SignupBtn>
          </UserBtnWrap>
        </SideUserWrap>
      }
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
              <TabDesc>자신의 수익을 확인해보세요</TabDesc>
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
              <TabClickedTitle>실험실</TabClickedTitle>
              <TabClickedDesc>자신의 수익을 확인해보세요</TabClickedDesc>
            </TabContent>
          </TabClicked>
        }
        { !portf_clicked ?
          <Tab onClick={() => {
            setLabClicked(false);
            setPortfClicked(true);
            setCommuClicked(false);
            history.push('/portfolio/1');
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>포트폴리오</TabTitle>
              <TabDesc>자신의 자산을 비교해 보세요</TabDesc>
            </TabContent>
          </Tab> :
          <TabClicked onClick={() => {
            setLabClicked(false);
            setPortfClicked(true);
            setCommuClicked(false);
            history.push('/portfolio/1');
          }}>
            <TabIcon />
            <TabContent>
              <TabClickedTitle>포트폴리오</TabClickedTitle>
              <TabClickedDesc>자신의 자산을 비교해 보세요</TabClickedDesc>
            </TabContent>
          </TabClicked>
        }
        { !commu_clicked ?
          <Tab onClick={() => {
            setLabClicked(false);
            setPortfClicked(false);
            setCommuClicked(true);
            history.push('/community');
          }}>
            <TabIcon />
            <TabContent>
              <TabTitle>커뮤니티</TabTitle>
              <TabDesc>자산에 대한 정보를 얻어보세요</TabDesc>
            </TabContent>
          </Tab> :
          <TabClicked onClick={() => {
            setLabClicked(false);
            setPortfClicked(false);
            setCommuClicked(true);
            history.push('/community');
          }}>
            <TabIcon />
            <TabContent>
              <TabClickedTitle>커뮤니티</TabClickedTitle>
              <TabClickedDesc>자산에 대한 정보를 얻어보세요</TabClickedDesc>
            </TabContent>
          </TabClicked>
        }
      </TabWrap>
    </SideTapWrap>
  );
};

export default SideTap;
import styled from "styled-components";

export const SideTapWrap = styled.div`
  position: fixed;
  left: 0;
  margin: 0;
  width: 25.9vw;
  height: 100vh;

  padding-top: 7.08vh;
  padding-left: 4.88vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.15);
`;

export const SideUserWrap = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.div`
  margin-bottom: 23px;
  width: 10.4vw;
  height: 10.4vw;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;

export const Username = styled.p`
  margin-bottom: 15px;
  font-size: 1.8vw;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: 0.15px;
`;

export const UserText = styled.p`
  margin-bottom: 27px;
  font-size: var(--font-main);
  font-weight: 400;
  text-align: center;
`;

export const ProfileBtn = styled.button`
  width: 12.3vw;
  height: 4vh;
  font-size: var(--font-main);
  font-weight: 500;
  border: 1px solid var(--font-color);
  border-radius: 10px;
`;

export const TabWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tab = styled.div`
  margin-bottom: 15px;
  padding: 8px 17px;
  width: 100%;
  height: 5.8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`;

export const TabClicked = styled.div`
  margin-bottom: 15px;
  padding: 8px 17px;
  width: 100%;
  height: 5.8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--secondary-color);
  border-radius: 10px;
`;

export const TabIcon = styled.div`
  width: 2.44vh;
  height: 2.44vh;
  background-color: var(--primary-color);
  border-radius: 50%;
`;

export const TabContent = styled.div`
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TabTitle = styled.p`
  color: #367BF5;
  font-size: var(--font-medium);;
  font-weight: 600;
  letter-spacing: 0.15px;
`;

export const TabDesc = styled.p`
  color: var(--primary-color); 
  font-size: 0.9vw;
`;
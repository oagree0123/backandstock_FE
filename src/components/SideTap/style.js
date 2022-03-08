import styled from "styled-components";

export const SideTapWrap = styled.div`
  position: fixed;
  top: 5.555vw;
  left: 0;
  margin: 0;
  width: 25.9vw;
  height: 100vh;

  padding-top: 3.05vw;
  padding-left: 5.55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.15);
`;

export const SideUserWrap = styled.div`
  margin-bottom: 3.47vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.div`
  margin-bottom: 1.38vw;
  width: 10.4vw;
  height: 10.4vw;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;

export const Username = styled.p`
  margin-bottom: 1.11vw;
  font-size: 1.8vw;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: 0.15px;
`;

export const UserText = styled.p`
  margin-bottom: 1.38vw;
  font-size: var(--font-main);
  font-weight: 400;
  text-align: center;
`;

export const ProfileBtn = styled.button`
  width: 12.3vw;
  height: 4vh;
  color: var(--primary-color);
  font-size: var(--font-main);
  font-weight: 500;
  border: 1px solid var(--primary-color);
  border-radius: 1.388vw;
`;

export const TabWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tab = styled.div`
  margin-bottom: 1.11vw;
  padding: 1.46vh 1.56vh 1.75vh 1.56vh;
  width: 100%;
  height: 5.76vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--font-color);
  background-color: #fff;
  border-radius: 10px;
`;

export const TabClicked = styled.div`
  margin-bottom: 1.11vw;
  padding: 1.46vh 1.56vh 1.75vh 1.56vh;
  width: 100%;
  height: 5.76vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-radius: 10px;
`;

export const TabIcon = styled.div`
  margin-right: 0.83vw;
  width: 3.47vw;
  height: 3.47vw;
  border: 1px solid var(--primary-color);
  border-radius: 0.347vw;
  background-color: var(--secondary-color);
`;

export const TabContent = styled.div`
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--font-color);
`;

export const TabTitle = styled.p`
  margin-bottom: 0.555vw;
  font-size: var(--font-medium);
  font-weight: 600;
  letter-spacing: 0.15px;
`;

export const TabClickedTitle = styled.p`
  margin-bottom: 0.555vw;
  color: var(--primary-color); 
  font-size: var(--font-medium);
  font-weight: 600;
  letter-spacing: 0.15px;
`;

export const TabDesc = styled.p`
  color: var(--font-color); 
  font-size: 0.9vw;
`;

export const TabClickedDesc = styled.p`
  color: var(--primary-color); 
  font-size: 0.9vw;
`;
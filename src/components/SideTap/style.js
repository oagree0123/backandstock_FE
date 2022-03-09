import styled from "styled-components";

export const SideTapWrap = styled.div`
  position: fixed;
  top: 80px;
  margin: 0;
  width: 293px;
  height: 100vh;

  padding-top: 44px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`;

export const SideUserWrap = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.div`
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;

export const Username = styled.p`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: 0.15px;
`;

export const UserText = styled.p`
  margin-bottom: 20px;
  font-size: var(--font-main);
  font-weight: 400;
  text-align: center;
`;

export const ProfileBtn = styled.button`
  width: 160px;
  height: 40px;
  color: var(--primary-color);
  font-size: var(--font-small);
  font-weight: 400;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
`;

export const TabWrap = styled.div`
  width: 293px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Tab = styled.div`
  margin-bottom: 16px;
  padding: 17px 0px 17px 24px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--font-color);
  background-color: #fff;
`;

export const TabClicked = styled.div`
  margin-bottom: 16px;
  padding: 17px 0px 17px 24px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--primary-color);
  background-color: var(--secondary-color);
`;

export const TabIcon = styled.div`
  margin-right: 12px;
  width: 50px;
  height: 50px;
  border: 1px solid var(--primary-color);
  border-radius: 0.347vw;
  background-color: var(--secondary-color);
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--font-color);
`;

export const TabTitle = styled.p`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.15px;
`;

export const TabClickedTitle = styled.p`
  margin-bottom: 8px;
  color: var(--primary-color); 
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.15px;
`;

export const TabDesc = styled.p`
  color: var(--font-color); 
  font-size: var(--font-small);
`;

export const TabClickedDesc = styled.p`
  color: var(--primary-color); 
  font-size: var(--font-small);
`;
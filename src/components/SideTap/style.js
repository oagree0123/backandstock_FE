import styled from "styled-components";

export const SideTapWrap = styled.aside`
  position: fixed;
  margin-top: 80px;
  
  height: 100vh;
  padding-top: 44px;
  background-color: #fff;
  box-shadow: 7px 0px 30px rgba(0, 0, 0, 0.05);
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
  outline: none;
  border: none;
  border-radius: 50%;
  background-image: ${props => props.img_url ? `url(${props.img_url})`: ""};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #C4C4C4;
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

export const ProfileWrap = styled.section`
  position: relative;
`;

export const ProfileCloseBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50px;
  right: 4px;
  border: none;
  outline: none;
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

export const UserBtnWrap = styled.div`
  width: 232px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginBtn = styled.button`
  width: 110px;
  height: 40px;
  color: var(--primary-color);
  font-size: var(--font-small);
  font-weight: 400;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
`;

export const SignupBtn = styled.button`
  width: 110px;
  height: 40px;
  color: var(--primary-color);
  font-size: var(--font-small);
  font-weight: 400;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
`;

export const TabWrap = styled.nav`
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
  cursor: pointer;
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
  cursor: pointer;
`;

export const TabIcon = styled.div`
  margin-right: 12px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid var(--primary-color);
  border-radius: 0.347vw;
  background-color: var(--secondary-color); */
`;

export const LabIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--font-color);
`;

export const TabTitle = styled.p`
  font-size: var(--font-large);
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

export const TabClickedTitle = styled.p`
  color: var(--primary-color); 
  font-size: var(--font-large);
  font-weight: 600;
  line-height: 28px;
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
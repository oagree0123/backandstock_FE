import styled from "styled-components";

export const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: #eee;
`;

export const LoginCont = styled.div`
  width: 964px;
  height: 651px;
  display: flex;
  border-radius: 40px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.15);
`;

export const LoginLeft = styled.div`
  padding: 96px 0px 96px 68px;
  width: 468px;
  background-color: var(--primary-color);
`;

export const LeftTitle = styled.p`
  color: #Fff;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.17;
`;

export const LoginRight = styled.div`
  padding: 96px 75px 85px;
  width: 495px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LOGO = styled.div`
  margin-bottom: 50px;
  width: 260px;
  height: 40px;
  font-size: 36px;
  font-weight: 700;
  line-height: 0.77;
  text-align: center;
  cursor: pointer;
`;

export const LoginText = styled.p`

`;
 
export const InputWrap = styled.div`
  margin-bottom: 12px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const LoginInput = styled.input`
  padding-left: 20px;
  width: 100%;
  height: 47px;
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;
  text-align: left;
`;

export const ErrorText = styled.p`
  margin-top: 4px;
  font-size: var(--font-small);
  line-height: var(--line-small);
  color: red;
`;

export const LoginBtnWrap = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 47px;
  color: #fff;
  font-size: var(--font-medium);
  font-weight: 700;
  line-height: var(--line-medium);
  border: none;
  border-radius: 10px;
  background-color: var(--primary-color);
  cursor: pointer;
`;

export const KakaoLoginBtn = styled.button`
  margin-bottom: 32px;
  width: 260px;
  height: 47px;
  color: #000;
  border: 1px solid #FEE500;
  border-radius: 10px;
  background-color: #fff; 
  cursor: pointer;
`;

export const Line = styled.div`
  margin-bottom: 28px;
  width: 100%;
  height: 1px;
  background-color: var(--secondary-color);
`;
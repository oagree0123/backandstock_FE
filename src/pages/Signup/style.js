import styled from "styled-components";

export const SignupWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: #fff;
`;

export const SignupCont = styled.div`
  width: 964px;
  height: 653px;
  display: flex;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.15);
`;

export const SignupLeft = styled.div`
  padding: 96px 0px 96px 68px;
  width: 468px;
  background-color: var(--primary-color);
`;

export const SignupRight = styled.div`
  padding: 96px 75px 85px;
  width: 495px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SignupTitle = styled.h1`
  
`;

export const TextWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const SignupText = styled.p`

`;

export const LoginSpan = styled.p`
  cursor: pointer;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SignupInput = styled.input`
  margin-bottom: 20px;
  padding-left: 20px;
  width: 100%;
  height: 47px;
  border: 3px solid var(--gray-color);
  border-radius: 10px;
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;
  text-align: left;
`;

export const SignupBtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupBtn = styled.button`
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
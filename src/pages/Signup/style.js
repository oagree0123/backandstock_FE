import styled from "styled-components";

export const SignupWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: #eee;
`;

export const SignupCont = styled.section`
  width: 1211px;
  height: 794px;
  display: flex;
  border-radius: 40px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.15);
`;

export const SignupRight = styled.div`
   padding: 85px 65px 92px 72px;
   width: 605px;
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
   margin-bottom: 32px;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SignupInput = styled.input`
  padding-left: 20px;
  width: 460px;
  height: 55px;
  border: 1px solid var(--primary-color);
  box-sizing: border-box;
  border-radius: 15px;
  :focus {
    outline: 1.5px solid #0075FF;
  }
`;

export const InputLabel = styled.label`
  font-size: var(--font-large);
  font-weight: 500;
  margin-bottom: 12px;
  text-align: left;
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -20px;
  left: 10px;
  margin-top: 4px;
  font-size: var(--font-small);
  line-height: var(--line-small);
  color: red;
`;

export const SignupBtnWrap = styled.div`
   margin-top: 20px;
 
`

export const SignupBtn = styled.button`
  width: 402px;
  height: 47px;
  color: #fff;
  font-size: var(--font-medium);
  font-weight: 700;
  line-height: var(--line-medium);
  border: none;
  border-radius: 40px;
  background-color: var(--primary-color);
  cursor: pointer;
`;
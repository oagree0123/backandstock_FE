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
  width: 1211px;
  height: 794px;
  display: flex;
  border-radius: 40px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.15);
`;

export const LoginLeft = styled.div`
  padding: 85px 61px 0px 88px;
  width: 572px;
  background-color: var(--primary-color);
 
`;

export const LeftTitle = styled.p`
  width: 411px;
  height: 323px;
  color: #ffffff;
  font-size: 96px;
  font-weight: 900;
  margin-bottom: 73px;
  cursor: pointer;
`;

export const LoginRight = styled.div`
  padding: 85px 40px 92px 72px;
  width: 605px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const RightTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  > p {
    font-size: 36px;
    font-weight: 700;
  }
`

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 44px;
    > span {
    font-size: var(--font-large);
    
  }

`

export const SignUpBtn = styled.button`
  width: 98px;
  height: 30px;
  font-size: var(--font-small);
  font-weight: 700;
  color:#9E9E9E;
  border: 1px solid #9E9E9E;
  box-sizing: border-box;
  border-radius: 20px;
  outline: none;
`

// export const LOGO = styled.div`
//   margin-bottom: 50px;
//   width: 260px;
//   height: 40px;
//   font-size: 36px;
//   font-weight: 700;
//   line-height: 0.77;
//   text-align: center;
//   cursor: pointer;
// `;

export const LoginText = styled.div`
width: 411px;
height: 165px;
display: flex;
    align-items: flex-start;
    justify-content: space-between;
    align-content: center;
    flex-wrap: nowrap;
    > span {
      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }
`;

export const LeftLogo = styled.img`
  width: 136px;
  height: 136px;
  background-color: #fff;
  border-radius: 50%;
  margin: 18px 4px 11px 0;

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

export const LoginInput = styled.input`
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

export const CheckInput = styled.input`
  padding-left: 20px;
  width: 460px;
  height: 55px;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 15px;
  margin-bottom: 8px;
  ::placeholder {
    font-size: 16px;
    color: #C4C4C4;
  }
`

export const InputLabel = styled.label`
  font-size: var(--font-large);
  font-weight: 500;
  margin-bottom: 12px;
  text-align: left;
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -10px;
  left: 10px;
  margin-top: 4px;
  font-size: var(--font-small);
  line-height: var(--line-small);
  color: red;
`;

export const LoginBtnWrap = styled.div`
  width: 460px;
  > div{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginBtn = styled.button`
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

export const KakaoLoginBtn = styled.img`
  margin-bottom: 32px;
  cursor: pointer;
  margin-top: 14px;
`

export const Line = styled.div`
  margin: 28px 0;
  width: 460px;
  border: 0.5px solid #C4C4C4;
`;


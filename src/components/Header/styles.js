import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;

  border-bottom: 1.5px solid #E5EFFF;
  background-color: #fff;
  z-index: 10000;
`;

export const HeadWrap = styled.div`
  margin-left: calc(30.9vw - 320px);;
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;

  @media only screen and (max-width: 1360px) {
    margin-left: 0;
  }
`;

export const LOGO = styled.img`
  margin-left: 28px;
  background-image: ${(props) => props.src || "white"};
  width: 300px;
  cursor: pointer;
`;

export const HeaderBtnWrap = styled.div`
  position: relative;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const InfoBtn = styled.button`
  margin-right: ${props => props.margin_right ? props.margin_right : ""};
  font-size: var(--font-large);
  font-weight: 600;
  line-height: var(--line-large);
  color: var(--primary-color);
  border: none;
`;

export const Logout = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-small);
  font-weight: 900;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 20px;
  cursor: pointer;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50px;
  left: -200px;
  z-index: 2000;
`;

export const TestInfoModalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(45, 45, 45, 0.6);
  z-index: 1000;
`;
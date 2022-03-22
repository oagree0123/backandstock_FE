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
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;

  @media only screen and (max-width: 1360px) {
    margin-left: 0;
  }
`;

export const LOGO = styled.h1`
  margin-left: 24px;
  font-size: 28px;
  font-weight: 900;
  color: var(--primary-color);
  cursor: pointer;
`;

export const Logout = styled.div`
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
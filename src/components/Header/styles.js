import styled from 'styled-components';

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;

  border-bottom: 1.5px solid #E5EFFF;
  //background-color: var(--secondary-color);
  background-color: #fff;
  z-index: 10000;
`;

export const HeadWrap = styled.div`
  margin: 0 auto;
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LOGO = styled.h1`

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
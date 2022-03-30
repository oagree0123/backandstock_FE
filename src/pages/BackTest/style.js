import styled from 'styled-components';

export const BackTestWrap = styled.div`
  padding: 44px 0px 100px 56px;
  width: 880px;
  box-sizing: content-box;
`;

export const InfoWrap = styled.section`
  margin-right: 0;
  margin-bottom: 36px;
  padding: 22px 28px;
  width: 880px;
  height: 115px;
  display: flex;
  background-color: var(--secondary-color);
  border-radius: 12px;
`;

export const InfoTitle = styled.h1`
  margin-bottom: 32px;
  font-size: 32px;
  line-height: var(--line-header);
  font-weight: 600;
`;

export const InfoContLeft = styled.div`
  margin-right: 50px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InfoContRight = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const InfoCont = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  font-size: var(--font-main);
  font-weight: 500;
  line-height: var(--line-main);
  justify-content: flex-start;
  align-items: center;
  box-sizing: content-box;
`;

export const InfoCircle = styled.div`
  margin-right: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;
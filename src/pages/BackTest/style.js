import styled from 'styled-components';

export const BackTestWrap = styled.div`

`;

export const InfoWrap = styled.div`
  margin-bottom: 44px;
  padding: 27px 50px;
  width: 880px;
  height: 103px;
  display: flex;
  background-color: var(--secondary-color);
  border-radius: 20px;
`;

export const InfoTitle = styled.h1`
  margin-bottom: 24px;
  font-size: var(--font-header);
  line-height: var(--line-header);
  font-weight: 600;
`;

export const InfoContLeft = styled.div`
  margin-right: 50px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoContRight = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoCont = styled.div`
  margin-bottom: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: var(--font-medium);
  line-height: var(--line-medium);
  justify-content: flex-start;
  align-items: center;
`;

export const InfoCircle = styled.div`
  margin-right: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;
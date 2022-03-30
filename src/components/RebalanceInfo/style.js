import styled from 'styled-components';

export const InfoWrap = styled.div`
  position: relative;
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const InfoIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const InfoContWrap = styled.div`
  position: absolute;
  display: flex;
  left: 35px;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 54px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: #fff;
`;

export const InfoCont = styled.p`
  font-size: var(--font-small);
  font-weight: 500;
  line-height: 17px;
`;
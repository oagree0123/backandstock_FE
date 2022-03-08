import styled from "styled-components";

export const FormWrap = styled.div`

`;

export const FormTop = styled.div`
  margin-bottom: 52px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const FormBottom = styled.div`
  margin-bottom: 52px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const FormLeft = styled.div`
  margin-right: 50px;
  width: 350px;
`;

export const FormRight = styled.div`
  width: 350px;
`;

export const FormTitle = styled.h3`
  margin-bottom: 24px;
  font-size: var(--font-title);
  font-weight: 600;
`;

export const MoneyWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Won = styled.div`
  position: absolute;
  right: 20px;
  font-size: var(--font-medium);
`;

export const FormInput = styled.input`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: var(--font-main);
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const BackTextBtn = styled.button`
  width: 100%;
  height: 60px;
  font-size: var(--font-header);
  font-weight: 600;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
`;


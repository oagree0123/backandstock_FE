import styled from "styled-components";

export const ResultWrap = styled.div`
  width: 100%;
  padding: 44px 0px 56px 56px;
  padding-right: calc(30.9vw - 293px);
  background-color: var(--secondary-color);
`;

export const HeaderWrap = styled.header`
  margin-bottom: 20px;
  width: 880px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultHeaer = styled.h1`
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
`;

export const EditBtn = styled.button`
  width: 85px;
  height: 35px;
  font-size: var(--font-small);
  line-height: var(--line-small);
  color: #fff;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: var(--primary-color);
`;

export const Btn = styled.button`
  margin-top: 48px;
  width: 882px;
  height: 70px;
  color: #fff;
  font-size: var(--font-header);
  font-weight: 600;
  border-radius: 10px;
  background-color: #367bf5;
  outline: none;
  border: none;

  &:disabled {
    background-color: #D9DFE6;
    cursor: default;
  }
`;

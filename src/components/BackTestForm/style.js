import styled from "styled-components";

export const FormWrap = styled.div`

`;

export const FormTop = styled.div`
  margin-bottom: 32px;
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
  margin-right: 40px;
  width: 380px;
`;

export const MonthWrap = styled.div`
  margin-bottom: ${props => props.margin_bottom ? props.margin_bottom : ""};
`;

export const FormRight = styled.div`
  width: 325px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 24px;
  font-size: var(--font-header);
  line-height: var(--line-header);
  font-weight: 600;
`;

export const MoneyWrap = styled.div`
  margin-bottom: 40px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Won = styled.div`
  position: absolute;
  right: 20px;
  font-size: var(--font-medium);
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 60px;
  left: 0;
  font-size: var(--font-small);
  line-height: var(--line-small);
  color: red;
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
  width: 880px;
  height: 60px;
  font-size: var(--font-header);
  font-weight: 800;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
`;

export const TitleWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: flex-end;
`;

export const RebalanceTitle = styled.h2`
  font-size: var(--font-header);
  line-height: var(--line-header);
  font-weight: 600;
`;

export const RebalanceWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 325px;
  height: 55px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const RebalanceCont = styled.p`
  padding-left: 20px;
  font-size: var(--font-main);
  font-weight: 400;
`;

export const RebalanceSelect = styled.ul`
  padding: 4px 0px;
  position: absolute;
  top: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 325px;
  font-size: var(--font-main);
  font-weight: 400;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 3000;
`;

export const SelectItem = styled.li`
  padding-left: 20px;
  width: 300px;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: var(--font-main);
  font-weight: 400;
  border-bottom: 2px solid var(--secondary-color);
  z-index: 3000;
  cursor: pointer;
  list-style: none;

  &:hover {
    font-weight: 600;
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }
`;

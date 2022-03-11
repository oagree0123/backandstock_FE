import styled from "styled-components";

export const MonthPickerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 18px;
`;

export const DateWrap = styled.div`
  position: relative;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: var(--font-main);
  line-height: var(--line-main);
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const DateTitle = styled.div`
  position: absolute;
  top: -7px;
  left: 12px;
  width: 54px;
  height: 16px;
  font-size: 12px;
  text-align: center;
  color: var(--gray-color);
  background-color: #fff;
`;

export const CalenderWrap = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  width: 380px;
  height: 160px;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  z-index: 100;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.15);
`;

export const CalenderHeader = styled.div`
  margin-bottom: 8px;
  padding: 0px 25px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-medium);
  background-color: var(--secondary-color);
`;

export const CalenderYear = styled.p`

`;

export const CalenderArrow = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const MonthWrap = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: var(--font-medium);
  font-weight: 400;
  line-height: var(--line-medium);
  background-color: #fff;
`;

export const MonthClickBtn = styled.div`
  width: 25%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: var(--font-medium);
  font-weight: 700;
  line-height: var(--line-medium);
  text-align: center;
  cursor: pointer;
`;

export const BtnClickedInner = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--secondary-color);
`;

export const BtnInner = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const MonthBtn = styled.div`
  width: 25%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

export const MonthDisabledBtn = styled.div`
  width: 25%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  text-align: center;
  cursor: default;
`;
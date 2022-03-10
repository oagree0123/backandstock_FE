import styled from "styled-components";

export const MonthPickerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 18px;
`;

export const DateWrap = styled.div`
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

export const CalenderWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 175px;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  z-index: 100;
`;

export const CalenderHeader = styled.div`
  margin-bottom: 16px;
  padding: 0px 25px;
  width: 100%;
  height: 36px;
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
  width: 33.33%;
  height: 28px;
  color: var(--primary-color);
  font-size: var(--font-medium);
  font-weight: 700;
  line-height: var(--line-medium);
  text-align: center;
  cursor: pointer;
`;

export const MonthBtn = styled.div`
  width: 33.33%;
  height: 28px;
  text-align: center;
  cursor: pointer;
`;

export const MonthDisabledBtn = styled.div`
  width: 33.33%;
  height: 25px;
  color: #eee;
  text-align: center;
  cursor: default;
`;
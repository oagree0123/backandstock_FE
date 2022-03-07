import styled from "styled-components";

export const MonthPickerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const DateWrap = styled.div`
  margin-bottom: 15px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4.88vh;
  font-size: var(--font-main);
  border: 1px solid var(--font-color);
  border-radius: 10px;
`;

export const CalenderWrap = styled.div`
  position: absolute;
  top: 5.3vh;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
`;

export const CalenderHeader = styled.div`
  width: 100%;
  height: 3.4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
`;

export const CalenderYear = styled.p`

`;

export const CalenderArrow = styled.img`
  cursor: pointer;
`;

export const MonthWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
`;

export const MonthClickBtn = styled.div`
  width: 33.33%;
  height: 3.4vh;
  color: green;
  text-align: center;
  cursor: pointer;
`;

export const MonthBtn = styled.div`
  width: 33.33%;
  height: 3.4vh;
  text-align: center;
  cursor: pointer;
`;

export const MonthDisabledBtn = styled.div`
  width: 33.33%;
  height: 3.4vh;
  color: #eee;
  text-align: center;
  cursor: default;
`;
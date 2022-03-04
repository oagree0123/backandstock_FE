import styled from "styled-components";

export const MonthPickerWrap = styled.div`
  width: 325px;
  height: 100%;
  margin: 0;
`;

export const DateWrap = styled.div`

`;

export const CalenderWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CalenderHeader = styled.div`
  width: 100%;
  height: 20%;
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
`;

export const MonthClickBtn = styled.div`
  width: 33.33%;
  color: green;
  text-align: center;
  cursor: pointer;
`;

export const MonthBtn = styled.div`
  width: 33.33%;
  text-align: center;
  cursor: pointer;
`;

export const MonthDisabledBtn = styled.div`
  width: 33.33%;
  color: #eee;
  text-align: center;
  cursor: default;
`;
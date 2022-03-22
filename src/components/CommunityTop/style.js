import styled from "styled-components";

//CommunityTop
export const Box = styled.div`
  width: 160px;
  height: 213px;
  border: 1.5px solid #0075ff;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 54px;
  :not(:last-child) {
    margin-right: 5px;
  }
`;

export const Wrap = styled.div`
  margin: 15px 3px 12px 13px;
`;

export const Num = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: var(--font-blue);
`;

export const StockName = styled.p`
  font-size: var(--font-main);
  font-weight: 700;
  margin: 12px 0px 4px 0px;

  max-width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const StockNum = styled.p`
  font-size: var(--font-small);
  font-weight: 700;
  margin-bottom: 31px;
`;

export const Result = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: var(--font-blue);
`;

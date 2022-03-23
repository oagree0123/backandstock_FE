import styled from "styled-components";

//CommunityTop
export const Box = styled.div`
  margin-left: 5px;
  margin-right: 0;
  width: 166px;

  border-radius: 10px;
  margin-top: 54px;
  
  :not(:last-child) {
    margin-right: 5px;
  }
`;

export const Wrap = styled.div`
  padding: 15px 3px 20px 13px;
  width: 166px;
  height: 208px;
  box-shadow: -2px 4px 8px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Num = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: #000;
  //color: var(--primary-color);
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
  color: var(--primary-color);
`;

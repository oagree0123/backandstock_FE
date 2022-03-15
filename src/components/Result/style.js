import styled from "styled-components";

export const All = styled.div`
  width: 880px;
  background-color: #ecf5ff;
`;


export const Box = styled.div`
  width: 480px;
  height: 262px;
  border-radius: 12px;
  background-color: #fff;
  padding: 20px;
`;


export const TopWrap = styled.div`
  display: flex;
`;


export const BoxWrap = styled.div`
  margin-left: 16px;
`;

export const TopBox = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 117px;

  border-radius: 12px;
  background-color: #ffffff;

  padding: 20px 0 0 24px;
`;

export const Wrap = styled.div`
  width: 880px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;


export const MonthBox = styled.div`
  width: 428px;
  height: 200px;
  border-radius: 12px;
  background-color: #fff;
  padding: 11px 33px 21px 17px;
`;


export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const Text = styled.div`
  font-size: var(--font-title);
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 11px;
`;


export const Info = styled.span`
  font-size: var(--font-large);
  font-weight: 500;
`;


export const BestYear = styled.span`
  font-size: var(--font-header);
  font-weight: 700;
  color: #ff0000;
`;


export const WorstYear = styled.span`
  font-size: var(--font-header);
  font-weight: 700;
  color: #0075ff;
`;


export const MonthWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BestMonth = styled.span`
  font-weight: 700;
  font-size: 64px;
  color: #ff0000;
  margin-top: -20px;
`;


export const WorstMonth = styled.span`
  font-weight: 700;
  font-size: 64px;
  color: #0075ff;
  margin-top: -20px;
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: stretch;
`;

export const Icon = styled.img`
  width: 56px;
  height: 50px;
  margin-right: 4px;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #000000;
  font-size: var(--font-header);
  font-weight: 700;

  & span {
    margin-left: 8px;
    color: #ff0000;
    font-size: var(--font-header);
    font-weight: 700;
  }

  & p {
    margin-left: 8px;
    color: #0075ff;
    font-size: var(--font-header);
    font-weight: 700;
  }
`;

export const YieldWrap = styled.div`
  position: relative;
  display: flex;
`;

export const YieldIcon = styled.img`
  width: 144px;
  height: 208px;
  background-color: #0075ff;
  margin: 10px 0 0 30px;
`;

export const MinusYield = styled.p`
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 72px;
  font-weight: 900;
  line-height: 1;
  color: #0075ff;
`;

export const MinusYieldMoney = styled.div`
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  color: #0075ff;
`;

export const PlusYield = styled.p`
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 72px;
  font-weight: 900;
  line-height: 1;
  color: #ff0000;
`;

export const PlusYieldMoney = styled.div`
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  color: #ff0000;
`;

export const MinusYieldIcon = styled.img`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 144px;
  height: 208px;
`;

export const PlusYieldIcon = styled.img`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 144px;
  height: 208px;
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  height: 250px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 24px;
`;


export const ListWrap = styled.div`
  padding: 9px 0px 0px 20px;
`;


export const CardList = styled.div`
  width: 152px;
  height: 190px;
  background: #ecf5ff;
  border-radius: 10px;
  padding: 8px 14px 21px 16px;
`;

export const ListTitle = styled.div`
  width: 880px;
  height: 61px;
  padding: 16px 0 16px 24px;

  font-weight: 700;
  font-size: 22px;
  color: #322f37;
`;


export const StockTitle = styled.span`
  font-size: var(--font-medium);
  font-weight: 700;
  color: #322f37;
`;

export const StockTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: stretch;

  height: 55px;
  margin-bottom: 21px;
`;


export const MoneyWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: stretch;
`;


export const Minus = styled.span`
  font-size: var(--font-main);
  color: var(--font-blue);
  font-weight: 700;
  margin-bottom: 5px;
`;


export const Plus = styled.span`
  font-size: var(--font-main);
  color: var(--font-red);
  font-weight: 700;
  margin-bottom: 5px;
`;


export const Money = styled.span`
  font-size: var(--font-main);
  color: var(--font-textclolr);
  font-weight: 500;
`;


export const StockWrap = styled.div`
  width: 880px;
  background-color: #ffffff;
  margin-top: 24px;
  border-radius: 10px;
`;

export const ListTop = styled.div`
  border-bottom: 1px solid #bcdbff;
  padding-bottom: 10px;
`;


export const TopStockName = styled.p`
  padding-left: 50px;
  font-size: var(--font-main);
`;


export const TopStockRate = styled.p`
  padding-left: 25px;
  font-size: var(--font-main);
  text-align: center;
`;


export const TopStockPrice = styled.p`
  padding-right: 16px;
  font-size: var(--font-main);
`;


export const InfoWrap = styled.div`

`;


export const CalenderIcon = styled.img`
  width: 26px;
  height: 26px;
`;


export const Poket = styled.img`
  width: 26px;
  height: 26px;
`;


export const Dollar = styled.img`
  width: 14px;
  height: 33px;
`;


export const MoneyTitle = styled.span`
  font-size: var(--font-small);
`;


export const MoneyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


export const Empty = styled.div`
  display: flex;
  align-items: center;
  height: 190px;
  margin-left: 7px;
`;

export const TextIconWrap = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const InfoTitle = styled.h3`
  margin-right: 16px;
  font-size: var(--font-large);
  font-weight: 800;
  line-height: var(--line-large);
`;

export const InfoText = styled.p`
  font-size: 28px;
  font-weight: 800;
  line-height: var(--line-header);
`;
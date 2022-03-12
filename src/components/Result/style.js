import styled from "styled-components";


export const All = styled.div`
    width: 880px;
    background-color: #ECF5FF;
`

export const Box = styled.div`
    width: 480px;
    height: 262px;
    border-radius: 12px;
    background-color:#fff ;
    padding: 20px;
`

// export const Btn = styled.button`
//     width: 884px;
//     height: 50px;
//     background-color: #367BF5;
//     border-radius: 10px;
//     color:#FFFFFF;
//     outline: none;
//     border: none;
//     margin-top: 200px;
// `

export const TopWrap = styled.div`
    display: flex ;
`

export const BoxWrap = styled.div`
    margin-left: 16px;
`
export const TopBox = styled.div`
    display: flex ;
    flex-direction: column;
    width: 400px;
    height: 117px;

    border-radius: 12px;
    margin-bottom: 24px;
    background-color: #ffffff;

    padding: 24px 0 0 24px;
`
export const Wrap = styled.div`
    width: 880px;
    display: flex ;
    justify-content: space-between;
    margin-bottom: 50px;
`

export const MonthBox = styled.div`
    width: 428px;
    height: 200px;
    border-radius: 12px;
    background-color:#fff ;
    padding: 11px 33px 21px 17px;
`

export const TextWrap = styled.div`
    display: flex ;
    justify-content: space-between;
`

export const Text = styled.div`
    font-size: var(--font-title);
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 11px;
`

export const Info = styled.span`
    font-size: var(--font-large);
    font-weight: 500;
`

export const BestYear = styled.span`
    font-size: var( --font-header);
    font-weight: 700;
    color: #FF0000;
`

export const WorstYear = styled.span`
    font-size: var( --font-header);
    font-weight: 700;
    color: #0075FF;
`

export const MonthWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const BestMonth = styled.span`
    font-weight: 700;
    font-size: 64px;
    color: #FF0000;
`

export const WorstMonth = styled.span`
    font-weight: 700;
    font-size: 64px;
    color: #0075FF;

`
export const Icon = styled.img`
    width: 50px;
    height: 50px;
    background-color: black;
`

export const Price = styled.span`
 display: flex;
    justify-content: flex-end;
    color: #000000;
    font-size: var(--font-header);
    font-weight: 700;
    & span {
        color: #FF0000;
        font-size: var(--font-header);
        font-weight: 700;
    }
    & p {
        color: #0075FF;
        font-size: var(--font-header);
        font-weight: 700;
    }
`
export const YieldWrap = styled.div`
    display: flex;
`
export const YieldIcon = styled.img`
    width: 144px;
    height: 208px;
    background-color: #0075FF;
    margin: 10px 0 0 30px;
`
export const MinusYield = styled.div`
    font-size: 90px;
    color: #0075FF;
    font-weight: 900;
`
export const MinusYieldMoney = styled.div`
    font-size: 40px;
    color: #0075FF;
    font-weight: 900;
`
export const PlusYield = styled.div`
    font-size: 90px;
    color: #FF0000;
    font-weight: 900;
`
export const PlusYieldMoney = styled.div`
    font-size: 40px;
    color: #FF0000;
    font-weight: 900;
`
export const MinusYieldIcon = styled.img`
    width: 144px;
    height: 208px;
    background-color: #0075FF;
    margin: 10px 0 0 30px;
`
export const PlusYieldIcon = styled.img`
    width: 144px;
    height: 208px;
    background-color: #FF0000;
    margin: 10px 0 0 30px;
`
export const Lists = styled.div`
    height: 250px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-top: 24px;
`

export const ListWrap = styled.div`
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
    padding: 9px 46px 0px 36px;
`
export const ListTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 880px;
    height: 61px;
    padding: 16px 0;

    border-bottom: 1px solid #BCDBFF;

    font-weight: 700;
    font-size: 22px;
    color: #322F37;
`

export const StockTitle = styled.span`
    width: 250px;
    height: 34px;
    font-size: var(--font-large);
    font-weight: 400 ;
    color: #322F37;
`

export const Minus = styled.span`
    font-size: var(--font-large);
    color: var( --font-blue);
`

export const Plus = styled.span`
    font-size: var(--font-large);
    color: var( --font-red);
`

export const Money = styled.span`
    width: 185px;
    height: 34px;
    font-size: var(--font-large);
    color: var(--font-textclolr);
`

export const StockWrap = styled.div`
    width: 880px;
    background-color: #ffffff;
    margin-top: 24PX;
    border-radius: 10PX;

`

export const ListTop = styled.div`
   border-bottom: 1px solid #BCDBFF;
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
`
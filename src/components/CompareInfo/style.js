import styled from "styled-components";

export const CompareInfoWrap = styled.section`

`;

export const CompareTop = styled.div`
  margin-bottom: 44px;
  width: 880px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`;

export const BestWrap = styled.div`

`;

export const BestTitle = styled.h2`
  margin-bottom: 16px;
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
`;

export const BestBox = styled.div`
  padding-left: 32px;
  padding-right: 26px;
  width: 433px;
  height: 151px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  background-color: var(--secondary-color);
`;

export const BestName = styled.p`
  margin-top: 26px;
  font-size: 32px;
  font-weight: 800;
  line-height: 46px;
  color: var(--primary-color);
`;

export const BestInfo = styled.div`
  margin-top: 20px;
`;

export const BestDate = styled.p`
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
  text-align: right;
`;

export const BestRatioWrap = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const WorstRatioWrap = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

export const ArrowUpIcon = styled.img`
  margin-right: 8px;
  width: 36px;
  height: auto;
`;

export const ArrowDownIcon = styled.img`
  margin-right: 8px;
  width: 36px;
  height: auto;
`;

export const BestRatio = styled.p`
  height: 50px;
  display: flex;
  align-items: flex-end;
  font-size: 48px;
  font-weight: 800;
  line-height: 70px;
  color: #FF0000;
  text-align: right;
`;

export const WorstRatio = styled.p`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 48px;
  font-weight: 800;
  line-height: 70px;
  color: var(--primary-color);
  text-align: right;
`;

export const CompareBottom = styled.div`

`;

export const RankWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;

export const RankBox = styled.div`
  padding-top: 20px;
  width: 282px;
  height: 565px;
  border-radius: 10px;
  background-color: var(--secondary-color);
`;

export const RankTop = styled.div`
  margin: 0px 28.5px 28px 28.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1.5px solid var(--primary-color);
`;

export const RankTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 800;
  line-height: 52.5px;
`;

export const RankRatio = styled.p`
  margin-bottom: 8px;
  font-size: 44px;
  line-height: 58px;
  font-weight: 800;
  color: var(--primary-color);
`;

export const RankMoney = styled.p`
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 47px;
  font-weight: 800;
  color: var(--primary-color);
`;

export const RankMid = styled.div`
  margin-bottom: 28px;
  padding-left: 28px;
  width: 231px;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RankDate = styled.p`
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: 20px;
`;

export const RankBottom = styled.div`
  margin-left: 28px;
`;

export const RankStock = styled.p`
  margin-bottom: 12px;
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: 20px;
`;

export const NoneRankBox = styled.div`
  width: 282px;
  height: 565px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: var(--font-large);
  font-weight: 400;
  line-height: var(--line-large);
  color: #c4c4c4;

  border: 1px solid rgba(217, 223, 230, 1);
  border-radius: 10px;
  background: rgba(217, 223, 230, 0.3);
`;

export const NoneRankText = styled.p`
  font-size: var(--font-large);
  font-weight: 400;
  line-height: var(--line-large);
  color: #c4c4c4;
`;
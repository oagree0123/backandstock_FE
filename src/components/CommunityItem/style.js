import styled from 'styled-components';

export const CommunityItemWrap = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding-top: 16px;
  width: 280px;
  height: 300px;
  border-radius: 10px;
  background-color: var(--secondary-color);
`;

export const CardClickWrap = styled.div`
  cursor: pointer;
`;

export const LikeBtn = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const ItemTop = styled.div`
  padding-left: 20px;
`;

export const ItemTitle = styled.h3`
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: var(--line-medium);
  color: #000;
  //color: var(--primary-color);
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CardIcon = styled.img`
  margin-top: 2px;
  margin-right: 4px;
  width: 10px;
  height: 10px;
`;

export const InfoCnt = styled.p`
  width: 28px;
  font-size: 12px;
  line-height: 28px;
  color: #818181;
`;

export const ItemMid = styled.div`
  padding-top: 12px;
  padding-left: 12px;
  width: 280px;
  height: 200px;
  border: 3px solid var(--secondary-color);
  border-radius: 10px;
  background-color: #fff;
`;

export const StockCnt = styled.p`
  margin-bottom: 8px;
  font-size: var(--font-small);
  font-weight: 600;
  line-height: var(--line-small);
`;

export const StockDate = styled.p`
  margin-bottom: 12px;
  font-size: var(--font-small);
  font-weight: 600;
  line-height: var(--line-small);
`;

export const StockContWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StockInfoWrap = styled.div`
  margin-right: 6px;
  margin-bottom: 4px;
  width: 124px;
  display: flex;
  align-items: center;
`;

export const StockCircle = styled.div`
  margin-right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;

export const StockName = styled.p`
  margin-right: 2px;
  width: 67px;
  height: 26px;
  font-size: var(--font-small);
  font-weight: 600;
  line-height: 1.6;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
`;

export const StockRatio = styled.p`
  width: 35px;
  height: 26px;
  font-size: var(--font-small);
  font-weight: 600;
  line-height: 1.6;
`;

export const ItemBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  background-color: var(--secondary-color);
`;

export const FinalMoney = styled.p`
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: var(--line-medium);
`;
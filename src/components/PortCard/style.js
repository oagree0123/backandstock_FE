import styled from 'styled-components';

export const PortCardWrap = styled.div`
  position: relative;
  width: 280px;
  height: 340px;
  cursor: pointer;
`;

export const CardInfoWrap = styled.div `

`;

export const InfoTop = styled.div`
  padding: 0px 4px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  color: var(--primary-color);
  font-size: var(--font-large);
  line-height: 1.4;
`;

export const MyBestBtn = styled.button`
  position: absolute;
  top: 215px;
  right: 0;
  width: 82px;
  height: 28px;
  font-size: 12px;
  font-weight: 600;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  cursor: pointer;
`;

export const UnMyBestBtn = styled.button`
  position: absolute;
  top: 215px;
  right: 0;
  width: 82px;
  height: 28px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  background-color: var(--primary-color);
  cursor: pointer;
`;

export const InfoBottom = styled.div`
  position: relative;
  padding-top: 12px;
  width: 280px;
  height: 196px;
  border: 3px solid var(--secondary-color);
  border-radius: 10px;
`;

export const CardInfo = styled.p`
  margin-bottom: 12px;
  padding-left: 16px;
  font-size: var(--font-small);
  font-weight: 800;
  line-height: var(--line-small);
`;

export const StockContWrap = styled.div`
  padding-left: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const StockInfoWrap = styled.div`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

export const StockCircle = styled.div`
  margin-right: 6px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;

export const StockName = styled.p`
  width: 98px;
  height: 26px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
`;

export const CardMoney = styled.div`
  padding-left: 16px;
  position: absolute;
  left: -2px;
  bottom: -4px;
  display: flex;
  align-items: center;
  width: 280px;
  height: 52px;
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: var(--line-medium);
  border-radius: 10px;
  background-color: var(--secondary-color);
`;

export const CardCheck = styled.input`

`;
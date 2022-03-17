
import React from 'react';
import { history } from '../../redux/configStore';

import likecnt from '../../assets/images/likecnt.svg'
import commentcnt from '../../assets/images/commentcnt.svg'

import { CommunityItemWrap, IconWrap, InfoCnt, ItemTitle, ItemTop, LikeBtn, CardIcon, ItemMid, ItemBottom, StockInfoWrap, StockContWrap, StockCircle, StockName, StockRatio, StockCnt, StockDate, CardClickWrap, FinalMoney} from './style';

const CommunityItem = (props) => {
  const { communityPort } = props

  return (
    <CommunityItemWrap>
      <LikeBtn />
      <CardClickWrap onClick={() => {
        history.push(`/community/detail/${communityPort.portId}`)
        window.scrollTo(0, 0);
      }}>
        <ItemTop>
          <ItemTitle>
            {communityPort.nickname} 님의 <br />
            자산실험
          </ItemTitle>
          <IconWrap>
            <CardIcon src={likecnt} alt='likecnt' />
            <InfoCnt>{props.likesCnt}</InfoCnt>
            <CardIcon src={commentcnt} alt='commentcnt' />
            <InfoCnt>{props.commentCnt}</InfoCnt>
          </IconWrap>
        </ItemTop>
        <ItemMid>
          <StockCnt>종목 개수: {communityPort.stockList.length}</StockCnt>
          <StockDate>기간: {communityPort.startDate} ~ {communityPort.endDate}</StockDate>
          <StockContWrap>
            {
              communityPort.stockList.map((s, i) => {
                return (
                  <StockInfoWrap key={i}>
                    <StockCircle />
                    <StockName>{s}</StockName>
                    <StockRatio>{communityPort.ratioList[i]}%</StockRatio>
                  </StockInfoWrap>
                  );
                })
              }
          </StockContWrap>
        </ItemMid>
        <ItemBottom>
          <FinalMoney>
            최종 자산: {Math.floor(communityPort.finalYieldMoney / 10000)} 만원 
          </FinalMoney>
        </ItemBottom>
      </CardClickWrap>
    </CommunityItemWrap>
  );
};

export default CommunityItem;

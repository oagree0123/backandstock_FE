import React from 'react';
import { history } from '../../redux/configStore';

import likecnt from '../../assets/images/likecnt.svg'
import heartBlue from '../../assets/images/heart_blue.svg'
import heartRed from '../../assets/images/heart_red.svg'
import commentcnt from '../../assets/images/commentcnt.svg'

import { CommunityItemWrap, IconWrap, InfoCnt, ItemTitle, ItemTop, LikeBtn, CardIcon, ItemMid, ItemBottom, StockInfoWrap, StockContWrap, StockCircle, StockName, StockRatio, StockCnt, StockDate, CardClickWrap, FinalMoney } from './style';
import { useState } from 'react';
import { useEffect } from 'react';
import { createDispatchHook, useDispatch } from 'react-redux';
import { actionCreators as likepostActions } from '../../redux/modules/community';
import { useSelector } from 'react-redux';



const CommunityItem = (props) => {
  const dispatch = useDispatch()
  const { communityPort } = props

  const user = useSelector(state => state.user.user_info);
  // const like_user = useSelector(state => state.community.list);

  const port_id = props.communityPort.portId
  const nick_name = props.communityPort.nickname
  const like_user = props.likesUsers
  const user_name = user.nickname

  let [like, setLike] = useState(false)
  let [likeCount, setLikeCount] = useState(props.likesCnt)

  const toggleLike = () => {
    if (like === true) {
      setLike(false);
      setLikeCount(likeCount - 1);

      if (likeCount < 0) {
        return;
      }
    } else {
      setLike(true);
      setLikeCount(likeCount + 1)
    }
    dispatch(likepostActions.likePostDB(port_id, like, nick_name))
  };

  useEffect(() => {
    if (like_user.includes(user_name)) {
      setLike(true)
    } else {
      setLike(false)
    }
  }, [user_name])

  return (
    <CommunityItemWrap>

      {like ?
        (<LikeBtn
          onClick={toggleLike}
          src={heartRed}>
        </LikeBtn>)
        :
        (<LikeBtn
          onClick={toggleLike}
          src={heartBlue}>
        </LikeBtn>)
      }

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
            <InfoCnt>{likeCount} </InfoCnt>
            <InfoCnt></InfoCnt>
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
            최종 자산: {Math.floor(communityPort.finalYieldMoney / 10000).toLocaleString('ko-KR')} 만원 
          </FinalMoney>
        </ItemBottom>
      </CardClickWrap>
    </CommunityItemWrap>
  );
};

export default CommunityItem;

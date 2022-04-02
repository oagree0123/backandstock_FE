import React, { useState, useEffect } from "react";
import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

import likecnt from "../../assets/images/likecnt.svg";
import heartGray from "../../assets/images/heart_gray.svg";
import heartRed from "../../assets/images/heart_red.svg";
import commentcnt from "../../assets/images/commentcnt.svg";

import {
  CommunityItemWrap,
  IconWrap,
  InfoCnt,
  ItemTitle,
  ItemTop,
  LikeBtn,
  CardIcon,
  ItemMid,
  ItemBottom,
  StockInfoWrap,
  StockContWrap,
  StockCircle,
  StockName,
  StockRatio,
  MoneyTitle,
  CardClickWrap,
  FinalMoney,
  FinalRate,
} from "./style";
import { actionCreators as likepostActions } from "../../redux/modules/community";
import { actionCreators as deletlikePostActions } from "../../redux/modules/community";


const CommunityItem = (props) => {
  const dispatch = useDispatch();
  const { communityPort } = props;

  const user = useSelector((state) => state.user.user_info);
  const is_login = useSelector((state) => state.user.is_login);

  const port_id = props.communityPort.portId;
  const like_user = props.likesUsers;
  const user_id = user.user_id

  let [like, setLike] = useState(false)
  let [likeCount, setLikeCount] = useState(props.likesCnt);

  const toggleLike = (like) => {
    if (!like) {
      setLikeCount(likeCount + 1);
      dispatch(likepostActions.likePostDB(port_id, user_id));
    } else {
      if (likeCount < 0) {
        return;
      }
      setLikeCount(likeCount - 1);
      dispatch(deletlikePostActions.deletelikePostDB(port_id, user_id));
    }
  };
  
  return (
    <CommunityItemWrap>
      {like_user.includes(user.user_id) ? (
        <LikeBtn
          onClick={() => {
            if(!is_login) {
              return;
            }
            toggleLike(true);
          }}
          src={heartRed}
        />
      ) : (
        <LikeBtn
          onClick={() => {
            if(!is_login) {
              return;
            }
            toggleLike(false);
          }}
          src={heartGray}
        />
      )}

      <CardClickWrap
        onClick={() => {
          history.push(`/community/detail/${communityPort.portId}`);
          window.scrollTo(0, 0);
        }}
      >
        <ItemTop>
          <ItemTitle>
            {communityPort.nickname} 님의 <br />
            자산실험
          </ItemTitle>
            <IconWrap>
              <CardIcon src={likecnt} alt="likecnt" />
              <InfoCnt>{props.likesCnt} </InfoCnt>
              <CardIcon src={commentcnt} alt="commentcnt" />
              <InfoCnt>{props.commentCnt}</InfoCnt>
            </IconWrap>
        </ItemTop>
        <ItemMid>
          <MoneyTitle>총 수익</MoneyTitle>
          <FinalRate>{Math.floor(communityPort.finalYield)}%</FinalRate>
          <FinalMoney>
            {Math.floor(communityPort.finalYieldMoney / 10000).toLocaleString(
              "ko-KR"
            )} 만원
          </FinalMoney>
          <StockContWrap>
            {communityPort.stockList.map((s, i) => {
              return (
                <StockInfoWrap key={i}>
                  <StockCircle />
                  <StockName>{s}</StockName>
                </StockInfoWrap>
              );
            })}
          </StockContWrap>
        </ItemMid>
      </CardClickWrap>
    </CommunityItemWrap>
  );
};

export default CommunityItem;

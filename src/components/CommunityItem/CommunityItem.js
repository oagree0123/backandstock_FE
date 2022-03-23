import React, { useState, useEffect } from "react";
import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

import likecnt from "../../assets/images/likecnt.svg";
import heartBlue from "../../assets/images/heart_blue.svg";
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
  StockCnt,
  StockDate,
  CardClickWrap,
  FinalMoney,
} from "./style";
import { actionCreators as likepostActions } from "../../redux/modules/community";

const CommunityItem = (props) => {
  const dispatch = useDispatch();
  const { communityPort } = props;

  const user = useSelector((state) => state.user.user_info);

  const port_id = props.communityPort.portId;
  const like_user = props.likesUsers;

  let [likeCount, setLikeCount] = useState(props.likesCnt);

  const toggleLike = (type) => {
    if (type) {
      setLikeCount(likeCount + 1);
    } else {
      if (likeCount < 0) {
        return;
      }
      setLikeCount(likeCount - 1);
    }
    dispatch(likepostActions.likePostDB(port_id, type, user.nickname));
  };

  return (
    <CommunityItemWrap>
      {like_user.includes(user.nickname) ? (
        <LikeBtn
          onClick={() => {
            toggleLike(false);
          }}
          src={heartRed}
        />
      ) : (
        <LikeBtn
          onClick={() => {
            toggleLike(true);
          }}
          src={heartBlue}
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
            <InfoCnt></InfoCnt>
            <CardIcon src={commentcnt} alt="commentcnt" />
            <InfoCnt>{props.commentCnt}</InfoCnt>
          </IconWrap>
        </ItemTop>
        <ItemMid>
          <StockCnt>종목 개수: {communityPort.stockList.length}</StockCnt>
          <StockDate>
            기간: {communityPort.startDate} ~ {communityPort.endDate}
          </StockDate>
          <StockContWrap>
            {communityPort.stockList.map((s, i) => {
              return (
                <StockInfoWrap key={i}>
                  <StockCircle />
                  <StockName>{s}</StockName>
                  <StockRatio>{communityPort.ratioList[i]}%</StockRatio>
                </StockInfoWrap>
              );
            })}
          </StockContWrap>
        </ItemMid>
        <ItemBottom>
          <FinalMoney>
            최종 자산:{" "}
            {Math.floor(communityPort.finalYieldMoney / 10000).toLocaleString(
              "ko-KR"
            )}{" "}
            만원
          </FinalMoney>
        </ItemBottom>
      </CardClickWrap>
    </CommunityItemWrap>
  );
};

export default CommunityItem;

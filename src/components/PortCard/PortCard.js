import React from "react";
import { useDispatch } from "react-redux";
import PortChart from "../PortChart/PortChart";
import { actionCreators as portActions } from "../../redux/modules/port";
import {
  PortCardWrap,
  CardInfoWrap,
  CardTitle,
  CardInfo,
  CardCheck,
  InfoTop,
  MyBestBtn,
  InfoBottom,
  CardMoney,
  StockInfoWrap,
  StockCircle,
  StockName,
  StockContWrap,
  UnMyBestBtn,
} from "./style";

const PortCard = (props) => {
  const dispatch = useDispatch()

  const port_data = props.port_data.portBacktestingCal
  const final_money = props.final_money;

  const click_check = (type, port_id) => {
    dispatch(portActions.setCompare(type, port_id));
  }

  const click_card = (port_id) => {
    dispatch(portActions.getPortOneDB(port_id));
  }

  return (
    <PortCardWrap
      onClick={() => {
        click_card(props.port_data.portId);
      }}
    >
      <CardCheck 
        id={props.port_data.portId}
        className="checkbox"
        type="checkbox" 
        name={props.port_data.portId} 
        value={props.port_data.portId}
        onChange={(e) => {
          click_check(e.target.checked, props.port_data.portId);
        }}
      />
      <label htmlFor={props.port_data.portId}></label>
      <PortChart port_data={port_data} />
      <CardInfoWrap>
        <InfoTop>
          <CardTitle>자산실험 {props.num+1}</CardTitle>
          {props.port_data.myBest ?
            <UnMyBestBtn
              onClick={() => {
                dispatch(portActions.setBestDB(false, props.port_data.portId))
              }}
            >
              자랑하기
            </UnMyBestBtn> :
            <MyBestBtn
              onClick={() => {
                dispatch(portActions.setBestDB(true, props.port_data.portId))
              }}
            >
              자랑하기
            </MyBestBtn>
          }
        </InfoTop>
        <InfoBottom>
          <CardInfo>총 자산: {port_data.stockNames.length}개</CardInfo>
          <StockContWrap>
            { 
              port_data.stockNames.map((n, i) => {
                return (
                  <StockInfoWrap key={i}>
                    <StockCircle/>
                    <StockName>{n}</StockName>
                  </StockInfoWrap>
                );
              })
            }
          </StockContWrap>
          <CardMoney>총 수익: {final_money.toLocaleString('ko-KR')} 만원</CardMoney>
        </InfoBottom>
      </CardInfoWrap>
    </PortCardWrap>
  );
};

export default PortCard;

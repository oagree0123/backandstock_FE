import React, { useEffect } from "react";
import { DetailWrap } from './style';

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as portActions } from "../../redux/modules/port";
import { useParams } from "react-router-dom";
import {DetailResult} from '../../components'

const Detail = () => {
  const dispatch = useDispatch();
  
  const port_id = useParams();
  const result_list = useSelector((state) => state.port.port_one.portBacktestingCal);
  const stock_ratio = useSelector((state) => state.port.port_one.stockRatio);

  useEffect(() => {
    dispatch(portActions.getPortOneDB(port_id.id))
  }, [])

  return (
    <DetailWrap>
      {
        result_list &&
        <DetailResult stock_ratio={stock_ratio} result_list={result_list} />
      }
    </DetailWrap>
  );
};

export default Detail;
import React, { useState } from 'react';
import RebalanceIcon from '../../assets/images/Rebalan_info_icon.svg'
import { InfoCont, InfoContWrap, InfoIcon, InfoWrap } from './style';

const RebalanceInfo = (props) => {
  
  const [open_info, setOpenInfo] = useState(false);

  return (
    <InfoWrap>
      <InfoIcon 
        src={RebalanceIcon} 
        alt="rebalance_icon" 
        onClick={() => {
          setOpenInfo(!open_info);
        }}
      />
      { open_info &&
        <InfoContWrap>
          <InfoCont>
            자산 비율 유지를 위해 <br />
            주식을 사고 파는 주기
          </InfoCont>
        </InfoContWrap>
      }
    </InfoWrap>
  );
};

export default RebalanceInfo;
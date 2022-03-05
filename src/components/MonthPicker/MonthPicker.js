import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { actionCreators as testformActions } from '../../redux/modules/testform';
import arrowLeft from '../../assets/images/arrow_left.svg'
import arrowRight from '../../assets/images/arrow_right.svg'
import { CalenderArrow, CalenderHeader, CalenderWrap, CalenderYear, MonthBtn, MonthClickBtn, MonthDisabledBtn, MonthPickerWrap, MonthWrap } from './style';

const MonthPicker = (props) => {
  const dispatch = useDispatch();

  const today_year = moment().format('YYYY');
  const today_month = moment().format('MM');

  const [is_open, setIsOpen] = useState(false);
  const [year, setYear] = useState(props.type === "start" ? 2019 : 2022);
  const [month, setMonth] = useState(1);

  const months = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
  ]

  const change_year = (type) => {
    if(type === "plus" && year < 2022) {
      setYear(year + 1);
    }
    else if(type === "minus" && year > 2019) {
      setYear(year - 1);
    }
  }

  useEffect(() => {
    if(props.type === "start") {
      dispatch(testformActions.setStart(year, month));
    }
    else {
      dispatch(testformActions.setEnd(year, month));
    }
  }, [month, dispatch])

  return (
    <MonthPickerWrap>
      <div style={{
        width: "200px",
        height: "50px",
        border: "1px solid #eee",
      }}
      onClick={()=>{
        setIsOpen(true);
      }}
      >
        {year} {months[month-1]}
      </div>
      {
        is_open &&
        <CalenderWrap>
          <CalenderHeader>
            <CalenderArrow 
              src={arrowLeft}
              alt="left" 
              onClick={() => {
                change_year("minus");
              }}
            />
            <CalenderYear>{year}</CalenderYear>
            <CalenderArrow 
              src={arrowRight} 
              alt="right"
              onClick={() => {
                change_year("plus");
              }}
            />
          </CalenderHeader>
          <MonthWrap>
            {
              months.map((m, i) => {
                if (parseInt(today_year) === year && month - 1 === i) {
                  return (
                    <MonthClickBtn 
                      key={i} 
                      onClick={() => {
                        setMonth(i + 1)
                        setIsOpen(false);
                      }}
                    >
                      {m}
                    </MonthClickBtn>
                  );
                }
                else {
                  if(parseInt(today_year) === year && parseInt(today_month) <= i){
                    return (
                      <MonthDisabledBtn 
                        key={i} 
                      >
                        {m}
                      </MonthDisabledBtn>
                    );
                  }
                  else{
                    return (
                      <MonthBtn 
                        key={i} 
                        onClick={() => {
                          setMonth(i + 1)
                          setIsOpen(false);
                        }}
                      >
                        {m}
                      </MonthBtn>
                    );
                  }
                }
              })
            }
          </MonthWrap>
        </CalenderWrap>
      }
    </MonthPickerWrap>
  );
};

export default MonthPicker;
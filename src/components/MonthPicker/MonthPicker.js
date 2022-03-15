import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { actionCreators as testformActions } from '../../redux/modules/testform';
import arrowLeft from '../../assets/images/arrow_left.svg'
import arrowRight from '../../assets/images/arrow_right.svg'
import { CalenderArrow, CalenderHeader, CalenderWrap, CalenderYear, DateWrap, MonthBtn, MonthClickBtn, MonthDisabledBtn, MonthPickerWrap, MonthWrap, BtnInner, BtnClickedInner, DateTitle } from './style';

const MonthPicker = (props) => {
  const dispatch = useDispatch();

  const today_year = moment().format('YYYY');
  const today_month = moment().format('MM');

  const [is_open, setIsOpen] = useState(false);
  const [year, setYear] = useState(props.type === "start" ? 2019 : 2022);
  const [month, setMonth] = useState(props.type === "start" ? 3 : 1);
  const [clicked_date, setClickedDate] = useState(props.type === "start" ? 2019 : 2022);

  const months = [
    '1월', '2월', '3월',
    '4월', '5월', '6월',
    '7월', '8월', '9월',
    '10월', '11월', '12월'
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
      <DateWrap
        onClick={()=>{
          setIsOpen(!is_open);
        }}
      >
        {year}년 {months[month-1]}
        {props.type === "start" ?
          <DateTitle>시작년도</DateTitle>:
          <DateTitle>종료년도</DateTitle>
        }
      </DateWrap>
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
                if (clicked_date === year && month - 1 === i) {
                  return (
                    <MonthClickBtn 
                      key={i} 
                      onClick={() => {
                        setMonth(i + 1)
                        setClickedDate(year)
                        setIsOpen(false);
                      }}
                    >
                      <BtnClickedInner>
                        {m}
                      </BtnClickedInner>
                    </MonthClickBtn>
                  );
                }
                else {
                  if(parseInt(today_year) === year && parseInt(today_month) <= i + 1){
                    return (
                      <MonthDisabledBtn 
                        key={i} 
                      >
                        <BtnInner>
                          {m}
                        </BtnInner>
                      </MonthDisabledBtn>
                    );
                  }
                  else if( year === 2019 && i < 2 ) {
                    return (
                      <MonthDisabledBtn 
                        key={i} 
                      >
                        <BtnInner>
                          {m}
                        </BtnInner>
                      </MonthDisabledBtn>
                    );
                  }
                  else{
                    return (
                      <MonthBtn 
                        key={i} 
                        onClick={() => {
                          setMonth(i + 1)
                          setClickedDate(year)
                          setIsOpen(false);
                        }}
                      >
                        <BtnInner>
                          {m}
                        </BtnInner>
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
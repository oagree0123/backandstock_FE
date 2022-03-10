import React, { useEffect } from 'react';
import Line from '../../components/Line';
import { Box, Btn } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as portActions } from '../../redux/modules/port'
import { useHistory } from 'react-router-dom';
import ResultChart from './ResultChart';



const TestResult = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // window.addEventListener('beforeunload', (event) => {
    //     event.preventDefault();
    //     event.returnValue = '';
    //     window.location.replace("/")
    // })


    const result_list = useSelector((state) => state.port.result_list);
    console.log(result_list);




    return (
        <div>
            <Box></Box>
            <ResultChart></ResultChart>
            <Line></Line>

            {/* <Btn onClick={() => { dispatch(portActions.getPortfolioDB()) }}>저장하기</Btn> */}
            <Btn onClick={() => history.push('/mypage')}>저장하기</Btn>
        </div>
    );
};

export default TestResult;
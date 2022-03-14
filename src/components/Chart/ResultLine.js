import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ResultLine = (props) => {
    const [chart_min, setChartMin] = useState(0);

    const styles = {
        width: "880px",
        height: "300px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        marginTop: "20px"
    };

    const result_list = useSelector((state) => state.port.list);
    //const result_list = props.result_list;

    console.log(result_list);

    const months = result_list.months
    const monthYieldMoney = result_list.monthYieldMoney
    const kospiYieldMoney = result_list.kospiYieldMoney
    const kosdaqYieldMoney = result_list.kosdaqYieldMoney
    const Worst_money = Math.floor(result_list.worstMoney);

    useEffect(() => {
        let _worst = String(Worst_money).split("");
        _worst = _worst.map((v, i) => {
            return i !== 0 ? v = 0 : v
        })
        _worst = _worst.join('');
        setChartMin(_worst);
    }, [chart_min, Worst_money]);

    const data = [
        {
            "id": "내 자산",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": "KOSPI",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": "KOSDAQ",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        }
    ]

    monthYieldMoney.map((m, i) => {
        let xy = {
            x: months[i].substring(2),
            y: parseInt(m)
        }
        data[0].data.push(xy)
    })

    kospiYieldMoney.map((m, i) => {
        let xy = {
            x: months[i].substring(2),
            y: parseInt(m)
        }
        data[1].data.push(xy)
    })

    kosdaqYieldMoney.map((m, i) => {
        let xy = {
            x: months[i].substring(2),
            y: parseInt(m)
        }
        data[2].data.push(xy)
    })

    return (
        <div style={styles}>
            <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 110, bottom: 40, left: 60 }}
                colors={['#0075FF', '#A183F8', '#49DDCB']}
                keys={[
                    "내 자산",
                    "KOSPI",
                    "KOSDAQ",
                ]}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: chart_min,
                    max: 'auto',
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 60,
                    // legend: '연도',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    // legend: '수익금',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enableGridY={false}
                pointSize={4}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />

        </div>
    )

}



export default ResultLine;
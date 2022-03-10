import { ResponsiveLine } from '@nivo/line'
import { useSelector } from 'react-redux';


const Line = () => {
    const styles = {
        width: "880px",
        height: "346px",
        marginTop: "10px",
        marginRight: "10px"
    };

    const result_list = useSelector((state) => state.port.result_list);
    console.log(result_list);

    const months = result_list.months
    const monthYieldMoney = result_list.monthYieldMoney
    const kospiYieldMoney = result_list.kospiYieldMoney
    const kosdaqYieldMoney = result_list.kosdaqYieldMoney

    const data = [
        {
            "id": "monthYieldMoney",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": "kospiYieldMoney",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": "kosdaqYieldMoney",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        }
    ]


    monthYieldMoney.map((m, i) => {
        let xy = {
            x: months[i],
            y: parseInt(m)
        }
        data[0].data.push(xy)
    })

    kospiYieldMoney.map((m, i) => {
        let xy = {
            x: months[i],
            y: parseInt(m)
        }
        data[1].data.push(xy)
    })

    kosdaqYieldMoney.map((m, i) => {
        let xy = {
            x: months[i],
            y: parseInt(m)
        }
        data[2].data.push(xy)
    })

    return (
        <div style={styles}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
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
                enableGridX={false}
                // enablePoints={false}
                pointSize={10}
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



export default Line;
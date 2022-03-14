import { ResponsiveBar } from '@nivo/bar'
import { useSelector } from 'react-redux';

const ResultChart = (props) => {
    const styles = {
        width: "880px",
        height: "300px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        marginBottom: "20px"
    }

    const result_list = useSelector((state) => state.port.list);

    //const result_list = props.result_list

    const months = result_list.months
    const monthYield = result_list.monthYield
    const kospiYield = result_list.kospiYield
    const kosdaqYield = result_list.kosdaqYield



    const data = [

    ]

    monthYield.map((m, i) => {
        let xy = {
            months: months[i].substring(2),
            "내 자산": Math.floor(monthYield[i]),
            "KOSPI": Math.floor(kospiYield[i]),
            "KOSDAQ": Math.floor(kosdaqYield[i]),
        }
        data.push(xy)
    })


    return (
        <div style={styles} >
            <ResponsiveBar
                groupMode="grouped"
                data={data}
                keys={[
                    "내 자산",
                    "KOSPI",
                    "KOSDAQ",
                ]}
                indexBy="months"
                colors={['#0075FF', '#A183F8', '#49DDCB']}
                axisLeft={{
                    // legend: "수익률",
                    legendPosition: "middle",
                    legendOffset: -40
                }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 60,
                }}
                padding={0.1}
                margin={{
                    top: 20,
                    right: 100,
                    bottom: 50,
                    left: 35,
                }}
                enableGridX={true}
                enableGridY={false}
                pointSize={20}
                pointColor={{ theme: 'background' }}
                enableLabel={false}
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
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />

        </div >

    )


}

export default ResultChart
import { ResponsiveBar } from '@nivo/bar'
import { useSelector } from 'react-redux';

const ResultChart = (props) => {
    const styles = {
        width: "880px",
        height: "346px",
    };

    const result_list = props.result_list

    const months = result_list.months
    const monthYield = result_list.monthYield
    const kospiYield = result_list.kospiYield
    const kosdaqYield = result_list.kosdaqYield

    const data = [

    ]

    monthYield.map((m, i) => {
        let xy = {
            months: months[i],
            monthYield: Math.floor(monthYield[i]),
            kospiYield: Math.floor(kospiYield[i]),
            kosdaqYield: Math.floor(kosdaqYield[i]),
        }
        data.push(xy)
    })


    return (
        <div style={styles}>
            <ResponsiveBar
                groupMode="grouped"
                data={data}
                keys={[
                    'monthYield',
                    'kospiYield',
                    'kosdaqYield',
                ]}
                indexBy="months"
                axisLeft={{
                    // legend: "수익률",
                    legendPosition: "middle",
                    legendOffset: -40
                }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 60,
                    // legend: '연도',
                    legendOffset: 36,
                    legendPosition: 'middle',

                }}

                padding={0.3}
                margin={{
                    top: 30,
                    right: 90,
                    bottom: 50,
                    left: 50
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
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
            // enableGridY={true}
            />

        </div>

    )


}

export default ResultChart
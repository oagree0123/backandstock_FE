// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
import chartData from './data'


const styles = {
    width: "100%",
    height: "800px",
};

const Chart = () => {

    const months = chartData[0].months
    const yieldMoney = chartData[0].yieldMoney
    const kospiYieldMoney = chartData[0].kospiYieldMoney

    // const xList = months
    // const yList = yieldMoney
    // const kList =kospiYieldMoney
    const data = [
        {
            "id": "yieldMoney",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": "kospiYieldMoney",
            "color": "hsl(233, 70%, 50%)",
            "data": []
        }
    ]


    months.map((m, i) => {
        let xy = {
            x: m,
            y: yieldMoney[i]
        }
        data[0].data.push(xy)
    })

    months.map((m, i) => {
        let xy = {
            x: m,
            y: kospiYieldMoney[i]
        }
        data[1].data.push(xy)
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
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 6,
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
                pointSize={8}
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
                        itemWidth: 100,
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








export default Chart
import { ResponsiveLine } from '@nivo/line'
import test from '../Mypage/test'


const styles = {
    width: "880px",
    height: "346px",
    marginTop: "10px",
    marginRight: "10px"
};

const months = test[2].months
const monthYield_1 = test[0].monthYield
const monthYield_2 = test[1].monthYield
const monthYield_3 = test[2].monthYield

// console.log(months, monthYield_1, monthYield_2, monthYield_3);

const data = [
    {
        "id": "monthYield_1",
        "color": "hsl(233, 70%, 50%)",
        "data": []
    },
    {
        "id": "monthYield_2",
        "color": "hsl(33, 70%, 50%)",
        "data": []
    },
    {
        "id": "monthYield_3",
        "color": "hsl(123, 70%, 50%)",
        "data": []
    }
]


monthYield_1.map((m, i) => {
    let xy = {
        x: months[i],
        y: parseInt(Number(m))
    }
    data[0].data.push(xy)
})

monthYield_2.map((m, i) => {
    let xy = {
        x: months[i],
        y: parseInt(Number(m))
    }
    data[1].data.push(xy)
})

monthYield_3.map((m, i) => {
    let xy = {
        x: months[i],
        y: parseInt(Number(m))
    }
    data[2].data.push(xy)
})



const MypageLine = () => {

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



export default MypageLine;
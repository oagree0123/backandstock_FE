import { ResponsiveLine } from '@nivo/line'
import { useSelector } from 'react-redux';


const ResultStockLine = () => {
    const styles = {
        width: "880px",
        height: "300px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        marginTop: "50px"
    };

    const result_list = useSelector((state) => state.port.list);
    console.log(result_list);

    const months = result_list.months
    const month_yieldmoney = result_list.stockYieldMoneys
    const stock_name = result_list.stockNames


    const data = [

        {
            "id": [],
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": [],
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": [],
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },
        {
            "id": [],
            "color": "hsl(233, 70%, 50%)",
            "data": []
        },


    ]

    stock_name.map((s, k) => {
        months.map((m, i) => {
            let xy = {
                x: m,
                y: parseInt(month_yieldmoney[k][i])
            }
            data[k].data.push(xy)
            data[k].id.push(s)
        })
    })

    // months.map((a, i) => {
    //     data[i].data.push(a)
    // })


    // stock_name.map((s, i) => {
    //     data[i].id.push(s)
    // })




    return (
        <div style={styles}>
            <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
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



export default ResultStockLine;
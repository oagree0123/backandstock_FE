import React from "react";
import { Bar } from "@nivo/bar";
import chartData from './data'



const months = chartData[0].months
const monthYield = chartData[0].monthYield
const kospiYied = chartData[0].kospiYied

const data = [

];


months.map((m, i) => {
    let xy = {
        months: m,
        monthYield: monthYield[i],
        kospiYied: kospiYied[i]
    }
    data.push(xy)
})


const GraphBar = () => (
    <div className="App">
        <Bar
            groupMode="grouped"
            data={data}
            keys={["monthYield", "kospiYied"]}
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
            width={1500}
            height={500}
            padding={0.3}
            margin={{
                top: 30,
                right: 0,
                bottom: 100,
                left: 50
            }}
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
            enableGridY={true}
        />
    </div>
);

export default GraphBar;



// import { ResponsiveBar } from '@nivo/bar'
// import React from "react";
// import chartData from './data'


// const months = chartData[0].months
// const monthYield = chartData[0].monthYield
// const kospiYied = chartData[0].kospiYied

// const data = [

// ]

// months.map((m, i) => {
//     let xy = {
//         months: m,
//         monthYield: monthYield[i],
//         kospiYied: kospiYied[i]
//     }
//     data.push(xy)
// })


// const Bar = () => (
//     <ResponsiveBar
//         data={data}
//         keys={["monthYield", "kospiYied"]}
//         indexBy="months"
//         margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//         padding={0.3}
//         groupMode="grouped"
//         valueScale={{ type: 'linear' }}
//         indexScale={{ type: 'band', round: true }}
//         colors={{ scheme: 'nivo' }}
//         defs={[
//             {
//                 id: 'dots',
//                 type: 'patternDots',
//                 background: 'inherit',
//                 color: '#38bcb2',
//                 size: 4,
//                 padding: 1,
//                 stagger: true
//             },
//             {
//                 id: 'lines',
//                 type: 'patternLines',
//                 background: 'inherit',
//                 color: '#eed312',
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10
//             }
//         ]}
//         fill={[
//             {
//                 match: {
//                     id: 'monthYield'
//                 },
//                 id: 'dots'
//             },
//             {
//                 match: {
//                     id: 'kospiYied'
//                 },
//                 id: 'lines'
//             }
//         ]}
//         borderColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     1.6
//                 ]
//             ]
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'months',
//             legendPosition: 'middle',
//             legendOffset: 32
//         }}
//         axisLeft={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'Yield',
//             legendPosition: 'middle',
//             legendOffset: -40
//         }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         labelTextColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     1.6
//                 ]
//             ]
//         }}
//         legends={[
//             {
//                 dataFrom: 'keys',
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 120,
//                 translateY: 0,
//                 itemsSpacing: 2,
//                 itemWidth: 100,
//                 itemHeight: 20,
//                 itemDirection: 'left-to-right',
//                 itemOpacity: 0.85,
//                 symbolSize: 20,
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemOpacity: 1
//                         }
//                     }
//                 ]
//             }
//         ]}

//     />
// )

// export default Bar
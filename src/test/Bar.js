// import React from "react";
// import { Bar } from "@nivo/bar";
// import test from '../pages/Mypage/test'


// const months = test[2].months
// const monthYield = test[0].monthYield

// const data = [

// ];

// months.map((m, i) => {
//     let xy = {
//         months: m,
//         monthYield: monthYield[i],
//     }
//     data.push(xy)
// })


// const GraphBar = () => (
//     <div className="App">
//         <Bar
//             groupMode="grouped"
//             data={data}
//             keys={["monthYield", "kospiYied"]}
//             indexBy="months"
//             axisLeft={{
//                 // legend: "수익률",
//                 legendPosition: "middle",
//                 legendOffset: -40
//             }}
//             axisBottom={{
//                 orient: 'bottom',
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 60,
//                 // legend: '연도',
//                 legendOffset: 36,
//                 legendPosition: 'middle',

//             }}
//             width={1500}
//             height={500}
//             padding={0.3}
//             margin={{
//                 top: 30,
//                 right: 0,
//                 bottom: 100,
//                 left: 50
//             }}
//             pointSize={10}
//             pointColor={{ theme: 'background' }}
//             pointBorderWidth={2}
//             pointBorderColor={{ from: 'serieColor' }}
//             pointLabelYOffset={-12}
//             useMesh={true}
//             legends={[
//                 {
//                     anchor: 'bottom-right',
//                     direction: 'column',
//                     justify: false,
//                     translateX: 100,
//                     translateY: 0,
//                     itemsSpacing: 0,
//                     itemDirection: 'left-to-right',
//                     itemWidth: 80,
//                     itemHeight: 20,
//                     itemOpacity: 0.75,
//                     symbolSize: 12,
//                     symbolShape: 'circle',
//                     symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                     effects: [
//                         {
//                             on: 'hover',
//                             style: {
//                                 itemBackground: 'rgba(0, 0, 0, .03)',
//                                 itemOpacity: 1
//                             }
//                         }
//                     ]
//                 }
//             ]}
//             enableGridY={true}
//         />
//     </div>
// );

// export default GraphBar;


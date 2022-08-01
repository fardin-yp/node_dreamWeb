import React,{useEffect, useState} from 'react';
import { Line, Bar } from "react-chartjs-2";



const chart = ({info ,sells}) => {


  
    const d = new Date();
    const year = d.getFullYear().toString();

    console.log(year)

    const filterSells = sells && sells.filter(res => res.year === year);
    const filterYear = info && info.filter(res => res.year === year);


  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    

let onepast = months[d.getMonth()];
let twoPast = months[d.getMonth() - 1];
let threePast = months[d.getMonth() - 2];
let fourPast = months[d.getMonth() - 3];
let fifthPast = months[d.getMonth() - 4];
let sixth = months[d.getMonth() -5];
let seventh = months[d.getMonth() - 6];
let eight = months[d.getMonth() - 7];
let ninth = months[d.getMonth() - 8];
let ten = months[d.getMonth() - 9];
let eleventh = months[d.getMonth() - 10];
let twelve = months[d.getMonth() - 11];


const getValue = (val) => {
  return filterSells && filterSells.filter(res => res.month === val).length
}

const getview = (val) => {
  return filterYear && filterYear.filter(res => res.month === val).length
}


    let chartExample1 = {
        data: {
            labels: [sixth ,fifthPast, fourPast, threePast, twoPast ,onepast],
            datasets: [
              {
                label: 'تعداد بازدید ها (ماهیانه)',
                data: [
                  //  getview(twelve) 
                  // ,getview(eleventh)
                  // ,getview(ten)
                  // ,getview(ninth)
                  // ,getview(eight)
                  // ,getview(seventh)
                  ,getview(sixth)
                  ,getview(fifthPast)
                  ,getview(fourPast)
                  ,getview(threePast)
                  ,getview(twoPast) 
                  ,getview(onepast)
                ],
                backgroundColor: [
                    "#ddf0ff",
                ],
                lineTension: 0.4,  
                fill: true,
                pointRadius:0
              },
            ],
          }
        }

let chartExample2 = {

    data: {
      labels: [fifthPast, fourPast, threePast, twoPast ,onepast],
      datasets: [
        {
          label: "Sales",
          data: [getValue(fifthPast), getValue(fourPast), getValue(threePast), getValue(twoPast) ,getValue(onepast) ],
          maxBarThickness: 5,
        },
      ],
    },
  };


    return (
        <div className="chart"> 
         <div className="Bar-chart">
             <h1>تعداد سفارشات</h1>
         <Bar
          data={chartExample2.data}
          options={{
            responsive:true ,
              plugins:{  legend: {display: false}},scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
                grid: {
                  display: false
                }
              }, 
            }
        ,backgroundColor:"#fb6240",
        maintainAspectRatio: false

        }}
        />
         </div>
    <div className="line-chart">
         <h1>تعداد بازدید</h1>
           {filterYear && <Line 
             data={chartExample1.data} 
             options={{responsive:true,maintainAspectRatio: false ,plugins:{  legend: {display: false}}}}

            />}
            </div>

      </div>

    )


}

export default chart

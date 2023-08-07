import React from "react"
import {resultGamma} from "./test"

export default function Gamma()
{

 let mean=[],median=[],mode=[],titles=[]

  resultGamma.forEach((item)=>{
      mean.push(item.mean_var)
      median.push(item.median_var)
      mode.push(item.mode_var)
      titles.push(item.alcohol)
  })
  let arr_mean = mean.map(item=><td>{item}</td>)
  let arr_median = median.map(item=><td>{item}</td>)
  let arr_mode = mode.map(item=><td>{item}</td>)
  let arr_title = titles.map(item=><th>{"Class "+item}</th>)


  
    return(<table>
      <tr>
        <th>Measure</th>
        {arr_title}
      </tr>
      <tr>
      <th>Gamma mean</th>
    {arr_mean}
    </tr>
    <tr>
        <th>Gamma median</th>
        {arr_median}
      </tr>
      <tr>
        <th>Gamma mode</th>
       {arr_mode}
      </tr>
    </table>)
  }

import data from "./Data";

let alcoholObj = {};
let gammaObj = {};
let resultAlcohol=[],resultGamma=[];


data.forEach((item)=>{
  if(!alcoholObj[item.Alcohol]){alcoholObj[item.Alcohol]=[item.Flavanoids]}
  else{alcoholObj[item.Alcohol].push(item.Flavanoids)}
 let gamma=Math.round(((item.Ash*item.Hue)/item.Magnesium + Number.EPSILON) * 1000) / 1000
 if(!gammaObj[item.Alcohol]){gammaObj[item.Alcohol]=[gamma]}
 else{gammaObj[item.Alcohol].push(gamma)}
})

for(let alcohol in alcoholObj)
{
  let mean_var,median_var,mode_var;

  mean_var = mean(alcoholObj[alcohol]);
  median_var = median(alcoholObj[alcohol]);
  mode_var = mode(alcoholObj[alcohol]);

  resultAlcohol.push({alcohol,mean_var,median_var,mode_var})
}
for(let alcohol in gammaObj)
{
  let mean_var,median_var,mode_var;

  mean_var = mean(gammaObj[alcohol]);
  median_var = median(gammaObj[alcohol]);
  mode_var = mode(gammaObj[alcohol]);

  resultGamma.push({alcohol,mean_var,median_var,mode_var})
}

function mean(arr)
{
  let sum=0;
  for(let c of arr){sum+=c}
  return Math.round((sum/arr.length + Number.EPSILON) *1000)/1000
}

function median(arr)
{
  arr = arr.sort();
  if(arr.length%2!==0)
  {let x = (arr.length+1)/2; return arr[x]}
  
let x = Math.round(((arr.length/2)+ ((arr.length/2)+1))/2)
  return arr[x];
}

function mode(arr)
{
  let obj={},max=0,final=0;
  for(let c of arr)
  {
    if(!obj[c]){obj[c]=1}
    else{obj[c]+=1}
  }  
  console.log(obj,"obj")
  for(let key in obj)
  {
      if(obj[key]>max){max=obj[key];final=key}
  }

  return parseInt(final);
}

export  {resultAlcohol,resultGamma}
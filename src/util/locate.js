const request =require('request');

const geo=(lat,lon,callback)=>{

const ur='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=dd90f185f522e1da04a08e5d2ea4b14f'
//const  url= 'http://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=dd90f185f522e1da04a08e5d2ea4b14f';
console.log(ur)
 request(ur,{json:true},(error,{body})=>{
    if(error){
         console.log(error); 
     }
    else
  callback({
    temp:body.main.temp,
    place:body.name})
 })



}
module.exports=geo;










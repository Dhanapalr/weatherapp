const request=require('request');

console.log('finding latitude and longitude');
const latlon=(address,callback)=>{
   
    const gurl= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZGhhbmFwYWxyMTAiLCJhIjoiY2s5OHB0N2NnMDRlaTNmbW5nbDd4YWVlbSJ9.eudVOTzaPKybYvMqWlok8g&limit=1'
    
    request({url:gurl ,json:true},(error,res)=>{
     const lon=res.body.features[0].center[0]
   const lat=res.body.features[0].center[1]
  callback(lat,lon)
   } )
   
}


module.exports=latlon;
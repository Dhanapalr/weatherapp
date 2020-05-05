const path=require('path');
const latlon=require('./util/latlon');
const locate=require('./util/locate');
const express= require('express');
const hbs= require('hbs')
const app=express();
const htmlpath = path.join(__dirname,'../public')
const par=path.join(__dirname,'../templates')
const views=path.join(__dirname,'../views')
app.set('view engine','hbs')
app.set('views',views)

hbs.registerPartials(par)
app.use(express.static(htmlpath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'welcome',
        desc:'Developer dhana on fire'
    })
})

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    title:'about',
    desc:'Developer dhana amazing'
  })
})
app.get('/weather',(req,res)=>{
  latlon(req.query.address,(lat,lon)=>{
    locate(lat,lon,({temp,place })=>{
               res.send({
                  location: place,
                  Longitude: lon,
                  Latitude: lat,
                  Temperature: temp,
                  searched_address: req.query.address
              })
           
    })
    
   })
  })


app.get('*',(req,res)=>{
    res.render("404")
})



app.listen(3000);



const search=document.querySelector('form');
 const loco=document.querySelector('input')
search.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(loco.value)
    fetch('http://localhost:3000/weather?address='+loco.value).then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
})

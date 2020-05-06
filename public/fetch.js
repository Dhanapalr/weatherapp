const search=document.querySelector('form');
 const loco=document.querySelector('input')

 const m1= document.querySelector('#m1')
 const m2= document.querySelector('#m2')
 m1.textContent="loading"
search.addEventListener('submit',(e)=>{
    e.preventDefault()
    m1.textContent="Searching for "+loco.value
    fetch('/weather?address='+loco.value).then((response)=>{
    response.json().then((data)=>{
        m1.textContent="place="+loco.value
       
       const dd=JSON.stringify(data)
   
        m2.textContent= dd
    })
})
})

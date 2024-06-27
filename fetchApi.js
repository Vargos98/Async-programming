fetch('url')

.then(response =>{
  if(!response.ok){
    throw new Error('Network response was not OK')
  }
  return response.json();
})

.then(data => console.log(data))
.catch(error => console.log(error))

// Note : after the data is received we need to convert the data into json format so that we could read/use it.
axios.get('url')
.then(result =>{
  console.log(res.data);
})

.catch(error => console.log(error))

// Note : axios method converts the data into json format automatically.
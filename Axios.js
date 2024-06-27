axios.get('https://randomuser.me/api/')
.then(result =>{
  console.log(res.data);
})

.catch(error => console.log(error))

// Note : axios method converts the data into json format automatically.
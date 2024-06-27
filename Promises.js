// Promises

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


function fetchData(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let success= flase;
      if (success){
        resolve("Data fetched")
      }else{
        reject("Error occurred")
      }
    },2000);
  });
}

fetchData()

.then(result =>{
  console.log(result)
})
.catch(error =>{
  console.log(error)
})
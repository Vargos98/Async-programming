// callback is nothing but a function which is passed as an arrgument to another function 
// and it executes after the function has completed its task.

function doSomeThing(url, callback){
  fetch(url)
  .then(data => data.json())
  .then(result =>{
    callback()
  })
}

doSomeThing("some url", function(){

})


//over here the function passed as an arrgument in dosomething function is the callback.
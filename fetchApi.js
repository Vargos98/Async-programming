fetch('https://randomuser.me/api/')

.then(response => response.json()) // Turn the response into usable data
.then(data => {
  console.log(data); // Do something with the data
})
.catch(error => {
  console.error('Something went wrong:', error); // Handle errors
});
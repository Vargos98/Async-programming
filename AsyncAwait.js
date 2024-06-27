async function abcd(){
  let a = await fetch('https://randomuser.me/api/');
  a = await a.json();
  console.log(a)
}
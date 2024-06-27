// const btn = document.querySelector('#btn')
// const para = document.querySelector('.para')
// btn.addEventListener('click', function(){
//   para.textContent = "Lorem87";
// })



let img1 = document.querySelector("#one");
let img2 = document.querySelector("#two");
const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
  var src1 = img1.src;
  var src2 = img2.src;

  img1.src = src2;
  img2.src = src1;

})
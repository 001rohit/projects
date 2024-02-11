const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const CountLabel= document.getElementById("count1");
let count = 0;
btn1.onclick = function(){
    count++;
   CountLabel.textContent = count;
}
btn2.onclick = function(){
   count--;
   CountLabel.textContent = count;
}
btn3.onclick = function(){
   count=0;
   CountLabel.textContent = count;
}

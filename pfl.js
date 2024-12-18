const input=document.getElementById('input-one')
const hiddenDiv=document.getElementById('img-stl1')
const hiddenDivTow=document.getElementById('img-stl2')
input.addEventListener("click",hl)
function hl(){
 hiddenDiv.style.display='block';
 hiddenDivTow.style.display='none';
}


const input2=document.getElementById('input-tow')
input2.addEventListener("click",hll)
function hll(){
 hiddenDivTow.style.display=('block');
 hiddenDiv.style.display=('none');
}
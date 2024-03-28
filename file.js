document.querySelector('#grandParent').addEventListener('click',(a)=>{console.log("grand parent clicked");
a.stopPropagation();},false);
document.querySelector('#parent').addEventListener('click',()=>{console.log(" parent clicked")},true);
document.querySelector('#child').addEventListener('click',(z)=>{console.log(" child clicked");
z.stopPropagation();},false);
document.querySelector('#btn1').addEventListener('click',()=>{console.log(" button clicked")},false);
let prev=document.querySelector('.arrow1');
let next=document.querySelector('.arrow2');


prev.addEventListener('click',function(){
    let items=document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

next.addEventListener('click',function(){
    let items=document.querySelectorAll('.item');
    if(items.length!=0)
        {
    document.querySelector('.slide').prepend(items[items.length-1])}
})
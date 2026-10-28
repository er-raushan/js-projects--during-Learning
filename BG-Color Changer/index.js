const body=document.querySelector('body');
const parent=document.querySelector('#parent');

parent.addEventListener('click',(e)=>{

    console.log(e.target);
    const child=e.target;

    body.style.backgroundColor=child.id;


})
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Boy=document.querySelector('#boy');
    const girl=document.querySelector('#girl');


    const l1=(Boy.value).length;
    const l2=(girl.value).length;
    // console.log(l1);

    const cal=Math.pow(l1+l2,3)%101;

    const result=document.querySelector('h2');
    result.textContent=`Result: ${cal}%`;

    form.reset();

});

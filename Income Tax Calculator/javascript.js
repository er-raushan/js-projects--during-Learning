const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const income = document.querySelector('#income');
    const amount = Number(income.value);

    const result = document.querySelector('h3');

    let xyz = function (amount) {

        if (amount <= 1200000) {
            return 0;
        } 
        else if (amount <= 1600000) {
            return (amount - 1200000) * 0.15;
        } 
        else if (amount <= 2000000) {
            return ((amount - 1600000) * 0.20) + 60000;
        } 
        else if (amount <= 2400000) {
            return ((amount - 2000000) * 0.25) + 140000;
        } 
        else {
            return ((amount - 2400000) * 0.30) + 180000;
        }
    };

    result.textContent = `Total Tax : ${xyz(amount)}`;

    form.reset;
});




 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 

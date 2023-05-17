
// var => var, let and const
 // let btn = document.querySelector('.btn')
// btn.style.display = 'none'

function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons')

    let bill = amount.value / persons.value;
    document.getElementById('bill').innerText = bill;
   
}


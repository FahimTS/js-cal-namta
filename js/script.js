// =========================== select option for date =========================

let formDate = document.getElementById('form-date');
let date = '';
for(i = 1; i <= 30; i++){
    date += `<option>${i}</option>`;
}
formDate.innerHTML = date;

// =========================== select option for month =========================

let formMonth= document.getElementById('form-month');
const months = ["January", "February", "March", "April",
"May", "June", "July", "August",
"September", "October", "November", "December"];
let month = " ";
for(i = 0; i < months.length; i++){
    month += `<option>${months[i]}</option>`;
}
formMonth.innerHTML = month;

// =========================== select option for year =========================

let formYear = document.getElementById('form-year');
let years = ' ';
for(i = 2024; i >= 1905; i--){
    years += `<option>${i}</option>`;
}
formYear.innerHTML = years;

// =========================== form show and hide event =========================

let closeNow = document.querySelector('.x_close');
let singForm = document.querySelector('.sing_form');
let showFormBtn = document.getElementById('show_form_now');
function showForm(){
    singForm.classList.add('active');
}
function hideForm(){
    singForm.classList.remove('active');
}
showFormBtn.addEventListener('click', () => {
    showForm();
})
closeNow.addEventListener('click', () => {
    hideForm();
})
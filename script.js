// open modal on button click
var modal_open_btn =document.getElementById('myBtn');
var modal_div =document.getElementById('myModal');
var modal_cloth_btn =document.getElementsByClassName('close')[0];

// when click on open button , open the modal
modal_open_btn.onclick = function(){
    modal_div.style.display = 'block';
    // open the modal
}
// when click on close button , close the modal
modal_cloth_btn.onclick = function(){
    modal_div.style.display = 'none';
    // close the modal
}
// when click on out side the modal button , out side the modal the modal
window.onclick = function(event){
    if (event.target==modal_div){
        modal_div.style.display='none';
    }
    // close the modal
}
// update age slider value

var slider = document.getElementById('age');
var output = document.getElementById('ageRange');
output.innerHTML= slider.value; //display the initial value
//change to current value
slider.oninput = function(){
    output.innerHTML= this.value;

}
// this function recives student information
function sendStudentInfo(e){
    e.preventDefault();
    //alert('it works')
    var name , gender , age , nationality;
    name = document.getElementById('name').value
    gender =document.getElementById('gender').value
    age =document.getElementById('age').value
    nationality =document.getElementById('nationality').value
    alert (name);

//recive input... generate questions   then  close  modal
var questions = 'what is your name?'

// generate question
document.getElementById('question_header').innerHTML =questions;

//close modale
modal_div.style.display ='none';

// hide original butten
modal_open_btn.style.display='none';
}
// for today it is enough i will start tomorrow

  


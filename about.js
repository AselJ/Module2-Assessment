console.log("hello world");

let img = document.querySelector('#cat');

img.addEventListener('mouseover', function(){
	alert('Cool')
})



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
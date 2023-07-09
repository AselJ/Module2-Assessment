let restBtn = document.querySelector('#restBtn');
let parksBtn = document.querySelector('#parksBtn')
let fitnessBtn = document.querySelector('#fitnessBtn')

let restArray = ['Idaho Potato', 'Olive Garden', 'Pho-Lee'];
let parkArray = ['Barber Park', 'Ann Morrison Park', 'Simplot'];
let fitnessArray = ['YMCA', 'AnyTime Fitness', 'Club Pilates'];

function showRandomElement(array){
  const randomIndex = Math.floor(Math.random()* array.length);
  const randomElement = array[randomIndex];

  alert(randomElement);
}
restBtn.addEventListener('click', function(){
  showRandomElement(restArray)

})
parksBtn.addEventListener('click', function(){
  showRandomElement(parkArray)

})
fitnessBtn.addEventListener('click', function(){
  showRandomElement( fitnessArray)

})


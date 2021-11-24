const time = setTimeout(countDown, 30000);

function countDown(){
    alert('hello');
}


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const numeri = [];
getRandomNumber(numeri);
function getRandomNumber (array){
    for(let i = 0; i < 5; i++){
        array.push(random(1,100));
    }
}

const numberContainer = document.createElement('div');
numberContainer.setAttribute('id', 'numeri');
console.log(numberContainer)

document.querySelector('.container').append(numberContainer);

numberContainer.innerHTML = numeri;
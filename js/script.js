const numeri = [];
const tentativi =[];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
getRandomNumber(numeri);

function getRandomNumber (array){
    for(let i = 0; i < 5; i++){
        array.push(random(1,100));
    }
}


console.log(numeri);

creaNumeri(numeri);
function creaNumeri(arrayNumeri){
    
    const numberContainer = document.createElement('div');
    numberContainer.setAttribute('id', 'numeri');
    
    document.querySelector('.container-numeri').append(numberContainer);

    
    numberContainer.innerHTML = arrayNumeri;
}

const time = setTimeout(countDown, 3000);

function countDown(){
  
    let count = 0;
    for(let k = 0; k < 1; k++){
        const guess = parseInt(prompt
        ('inserisci un valore'));

        tentativi.push(guess);

       if(numeri.includes(guess)){
          ++count;
       }
    }
    if(count == numeri.length){
        document.querySelector('.vinto-perso').innerHTML = `<h2>Hai vinto! ${count}/5</h2>`;
    }else{
            document.querySelector('.vinto-perso').innerHTML = `<h2>Hai perso! ${count}/5</h2>`;
    }
    
}

const change = setTimeout(changeClass, 2900);

function changeClass(){
    document.querySelector('.container-numeri').classList.add('white');
}




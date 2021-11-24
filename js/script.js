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
creaNumeri(numeri);
function creaNumeri(arrayNumeri){
    
    const numberContainer = document.createElement('div');
    numberContainer.setAttribute('id', 'numeri');
    
    document.querySelector('.container').append(numberContainer);
    
    numberContainer.innerHTML = arrayNumeri;
}

const time = setTimeout(countDown, 3000);
function countDown(){
    let count = 0;
    for(let k = 0; k < 2; k++){
        const guess = parseInt(prompt
        ('inserisci un valore'));

        tentativi.push(guess);

        for(let j = 0; j < tentativi.length; j++){
            if(tentativi.includes(numeri[k])){
                console.log('ciao')
            }
        }
    
    }
}








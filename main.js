 function init () {
	
	balanceDisplay.textContent = '$' +  TotalBalance;
}


var TotalBalance 	= 5000,
	balanceDisplay	= document.querySelector('.cash'),
	bet 			= document.querySelector('.bet'),
	betValue 		= document.querySelector('.betValue'),
	rollBtn 		= document.querySelector('.roll')
	resultDisplay 	= document.querySelector('.result');


function getResult() {
	var	result =  Math.floor(Math.random() * 36);
	resultDisplay.textContent = result;
	return result;
}

function count() {	
	if (getResult() == 0) {
		return 'neutro'
	}

	else if (getResult() / 2 % 1) {
		return 'impar'
	}

	else {
		return 'par'
	}
}

function rollet() {
	if (count() == 'neutro') {
		resultDisplay.classList.add('background-green');
	} else if (count() == 'impar') {
		resultDisplay.classList.add('background-red');		
	} else if (count() == 'par'){
		resultDisplay.classList.add('background-black');		
	}
}

rollBtn.addEventListener('click', )




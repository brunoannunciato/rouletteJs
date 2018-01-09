 function init () {
	moneyDisplay.textContent = money;
}


var money 	=  5000,
	moneyDisplay	= document.querySelector('.cash'),
	valueToBet 		= document.querySelector('.betValue'),
	rollBtn 		= document.querySelector('.roll'),
	resultDisplay 	= document.querySelector('.result');
	

function getResult() {
	var	result =  Math.floor(Math.random() * 37);
	resultDisplay.textContent = result;
	return parseInt(result);
}

function count(num) {	
	if (num % 2 == 0 && num != 0) {
		return 'even';
	} 
	else if (num % 2 != 0){
		return 'odd';
	}
	else {
		return 'neutral';
	}
}

function fillColor() {
	var r = getResult();
	var result = count(r);

	if (result == 'even') {
		resultDisplay.classList = 'result background-black';
	}
	else if (result == 'odd') {
		resultDisplay.classList = 'result background-red';
	}
	else if (result == 'neutral') {
		resultDisplay.classList = 'result background-green';
	}
}

function betResult() {
	var betNum = document.querySelector('.bet').value,
		resultDisplayValue = parseInt(document.querySelector('.result').textContent);

	if (count(resultDisplayValue) === count(betNum)) {
 		if (resultDisplayValue == betNum) {
			 console.log ('wx4')
			 return 'wx4'
		 } else {
			 console.log('xw2')
			 return 'wx2'
		 }
 	}	else if (count(resultDisplayValue) !== count(betNum)){
		 console.log('lose')
		 return 'lose'
 	}
}

rollBtn.addEventListener('click', function() {
	fillColor();
	betResult();
})
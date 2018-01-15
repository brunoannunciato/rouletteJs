 function init () {
	moneyDisplay.textContent = money;
}


var money 	=  5000,
	moneyDisplay	= document.querySelector('.cash'),
	valueToBet 		= document.querySelector('.betValue'),
	rollBtn 		= document.querySelector('.roll'),
	resultBox		= document.querySelector('.result-box'),
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
		resultBox.classList = 'result-box background-black';
	}
	else if (result == 'odd') {
		resultBox.classList = 'result-box background-red';
	}
	else if (result == 'neutral') {
		resultBox.classList = 'result-box background-green';
	}
}

function betResult() {
	var betNum = document.querySelector('.bet').value,
		resultDisplayValue = parseInt(document.querySelector('.result').textContent),
		betValue = document.querySelector('.betValue').value,
		cash = document.querySelector('.cash').textContent;

	if (count(resultDisplayValue) === count(betNum)) {
		if (resultDisplayValue == 0) {
			console.log ('wx16')
			return 'wx16'
		} 
		else if (resultDisplayValue == betNum) {
			 console.log ('wx4')
			 return 'wx4'
		 } else {
			 console.log('xw2')
			 return 'wx2'
		 }
 	}	else if (count(resultDisplayValue) !== count(betNum)){
		 console.log('lose');
		 return 'lose'
 	}
}

function bet() {
	document.querySelector('.cash').textContent = parseInt(document.querySelector('.cash').textContent) - parseInt(document.querySelector('.betValue').value);
}

function betReturn() {
	var betValue = parseInt(document.querySelector('.betValue').value),
	cash = parseInt(document.querySelector('.cash').textContent);

	switch (betResult()) {
		case 'lose':
			document.querySelector('.cash').textContent = cash;
		break;

		case 'wx16':
			cash += (betValue * 16);
			document.querySelector('.cash').textContent = cash;
		break;

		case 'wx4':
			cash += (betValue * 4);
			document.querySelector('.cash').textContent = cash;
		break;

		default:
			cash += (betValue * 2);
			document.querySelector('.cash').textContent = cash;
		break;
	}
}

rollBtn.addEventListener('click', function() {
	bet();
	fillColor();
	betReturn();
})
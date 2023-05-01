let placeLetter = document.querySelector('.guesLetter');

let words = ['calculator', 'echipa', 'rezultat', 'colegi', 'camion', 'victor', 'cuvint'];
let keyboard = document.querySelector('.keyboard');
let head = document.querySelector('.head'),
	neck = document.querySelector('.neck'),
	leftHand = document.querySelector('.leftHandContainer'),
	rightHand = document.querySelector('.righthancContainer'),
	body = document.querySelector('.body'),
	leftLeg = document.querySelector('.leftLegContainer'),
	legRight = document.querySelector('.rightLegCOntainer'),
	counterTxt = document.querySelector('.counter'),
	threat = document.querySelector('.thread'),
	textInfo = document.querySelector('.textInfo')

let	arrPartToAdd = [threat, head, neck, leftHand, rightHand, body, leftLeg, legRight];
let counter = 0;
let lives = arrPartToAdd.length;
counterTxt.textContent = lives;

const randomWords = () => {
	let randomWord = words[Math.floor(Math.random() * words.length)]
	return randomWord
}
const giveElementManToChange = (id) => {
	arrPartToAdd = [threat, head, neck, leftHand, rightHand, body, leftLeg, legRight];
	return arrPartToAdd[id];
}
export const createLetterPlace = () => {
	let word = randomWords()
	for(let i = 0; i < word.length; i++) {
		let divCreated = document.createElement('div');
		divCreated.className = 'letter'
		let paragraph = document.createElement('p');
		paragraph.classList = `underscore${i}`;
		paragraph.textContent = '___'
		divCreated.appendChild(paragraph);
		placeLetter.appendChild(divCreated)
	}
}
createLetterPlace();
console.log(lives); 
let randomWord = randomWords()
console.log(randomWord);

keyboard.addEventListener('click', function(){
	
	const clickedElement = event.target;
	const textClickedElement = clickedElement.textContent.toLowerCase()
	
	if(randomWord.includes(textClickedElement)) {
		let indexLetter = randomWord.indexOf(textClickedElement);
		clickedElement.classList.add('disable')
		clickedElement.disabled = true;
		const letter = document.querySelector(`.underscore${indexLetter}`)
		letter.textContent = textClickedElement.toUpperCase();
		letter.classList.add('letterStyle')
	} else {
		if (lives >=1) {
			let elementToChange = giveElementManToChange(counter);
			elementToChange.classList.remove('hidden');
			console.log(elementToChange, counter);
			counter++
			lives--
			counterTxt.textContent = lives
			if (lives == 0) {
				textInfo.textContent = "You don't have more:"
			}
		}	
	};
	
})








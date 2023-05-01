let placeLetter = document.querySelector('.guesLetter');

let words = ['calculator', 'echipa', 'rezultat', 'colegi', 'camion', 'victor', 'cuvint'];
let keyboard = document.querySelector('.keyboard');
let head = document.querySelector('.head'),
	neck = document.querySelector('.neck'),
	leftHand = document.querySelector('.leftHandContainer'),
	rightHand = document.querySelector('.righthancContainer'),
	body = document.querySelector('.body'),
	leftLeg = document.querySelector('.leftLegContainer'),
	right = document.querySelector('.rightLegCOntainer'),
	counterTxt = document.querySelector('.counter')

 

const randomWords = () => {
	let randomWord = words[Math.floor(Math.random() * words.length)]
	return randomWord
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
let randomWord = randomWords()
console.log(randomWord);
keyboard.addEventListener('click', function(){
	const clickedElement = event.target;
	const textClickedElement = clickedElement.textContent.toLowerCase()
	console.log(clickedElement);
	if(randomWord.includes(textClickedElement)) {
		let indexLetter = randomWord.indexOf(textClickedElement);
		clickedElement.classList.add('disable')
		clickedElement.disabled = true;
		const letter = document.querySelector(`.underscore${indexLetter}`)
		letter.textContent = textClickedElement.toUpperCase();
		letter.classList.add('letterStyle')
	};
	
})










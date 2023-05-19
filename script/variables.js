let placeLetter = document.querySelector('.guesLetter'),
	btnSelectLanguage = document.querySelector('.btns'),
	keyboard = document.querySelector('.newKeyboard'),
	containerSelectLanguage = document.querySelector('.container-select-language'),
	words = [ "algoritm", "variabilă","buclă","funcție","clasă","obiect","metodă","declarare","operator"],
	currentLanguage = 'ro',
	head = document.querySelector('.head'),
	neck = document.querySelector('.neck'),
	leftHand = document.querySelector('.leftHandContainer'),
	rightHand = document.querySelector('.righthancContainer'),
	body = document.querySelector('.body'),
	leftLeg = document.querySelector('.leftLegContainer'),
	legRight = document.querySelector('.rightLegCOntainer'),
	counterTxt = document.querySelector('.counter'),
	threat = document.querySelector('.thread'),
	textInfo = document.querySelector('.textInfo'),
	arrPartToAdd = [threat, head, neck, leftHand, rightHand, body, leftLeg, legRight]
	
	 
const randomWord = () => {
	return words[(Math.floor(Math.random() * words.length))]
} 
export {
	randomWord,
	placeLetter,
	btnSelectLanguage,
	keyboard,
	containerSelectLanguage,
	words,
	currentLanguage,
	head,
	neck,
	leftHand,
	rightHand,
	body,
	leftLeg,
	legRight,
	counterTxt,
	threat,
	textInfo,
	arrPartToAdd
}
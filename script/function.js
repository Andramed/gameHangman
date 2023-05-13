import { ConstrucSpaceLetter } from "./ConstructorSpaceLetter.js";
import { keyboard, placeLetter, randomWord, btnSelectLanguage, currentLanguage, threat,
head, neck, leftHand, rightHand, body, leftLeg, legRight, arrPartToAdd, counterTxt, textInfo   } from './variables.js';
import { ConstructorKeyBoard } from "./ConstructorKeyBoardConstruct.js";

let wordRandom = randomWord(),
	counter = 0,
	lives = arrPartToAdd.length;
counterTxt.textContent = lives;
const createSpaceUnderscore = () => {
	const spaceUnderscore = new ConstrucSpaceLetter(wordRandom, placeLetter)
	return spaceUnderscore.constructDiv()
}
const createNewKeybordByDefault = (language, elementToPend) => {
	const newKeyboard = new ConstructorKeyBoard(language, elementToPend);
	console.log(newKeyboard.eng[0][0]);
	return newKeyboard.createEngKeyboard();
}
const createNewKeybordByLanguage = () => {
	let newCurrentLanguage = currentLanguage
	btnSelectLanguage.addEventListener('click', function (event) {
		let newLanguage = event.target.classList.value;
		if (newLanguage != newCurrentLanguage) {
			keyboard.innerHTML = '';
			createNewKeybordByDefault(newLanguage, keyboard);
			newCurrentLanguage = newLanguage;
		}
	});
};
const giveElementManToChange = (id) => {
	return arrPartToAdd[id];
}
const assignLetterToLetterSpace = (clickedLetter, clickedElement) => {
	
		if (wordRandom.includes(clickedLetter)) {
			wordRandom.split('').forEach((letter, index) => {
				if (letter.toUpperCase() === clickedLetter.toUpperCase()) {
				  let letterSpace = document.querySelector(`.underscore${index}`);
				  letterSpace.textContent = clickedLetter.toUpperCase();
				  letterSpace.classList.add('letterStyle');
				  clickedElement.classList.add('disable', 'btnKeyboardDisable');
				  clickedElement.disabled = true;
				}
			  });
		} else {
			if (lives >=1) {
				let elementToChange = giveElementManToChange(counter);
				elementToChange.classList.remove('hidden');
				counter++
				lives--
				counterTxt.textContent = lives
				if (lives == 0) {
					textInfo.textContent = "You don't have more:"
				}
				clickedElement.classList.add('disable', 'btnKeyboardDisable');
				clickedElement.disabled = true;
			}	
		}
}

export {
	createSpaceUnderscore,
	createNewKeybordByDefault,
	createNewKeybordByLanguage,
	assignLetterToLetterSpace
}
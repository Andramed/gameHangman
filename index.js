import {  createNewKeybordByDefault, createSpaceUnderscore, createNewKeybordByLanguage, assignLetterToLetterSpace} from './script/function.js';
import { keyboard, currentLanguage} from './script/variables.js';


createNewKeybordByDefault(currentLanguage, keyboard);
createNewKeybordByLanguage();	
createSpaceUnderscore();


keyboard.addEventListener('click', function(event){
	let	clickedLetter = (event.target.textContent).toLowerCase();
	let clickedElement = event.target;
	assignLetterToLetterSpace(clickedLetter, clickedElement);
})





 













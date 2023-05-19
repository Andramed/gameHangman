export class ConstructorKeyBoard {
	constructor(language, elementHtml) {
		this.language = language;
		this.elementHtml = elementHtml; 
		this.ru = [`ЙЦУКЕНГШЩЗХЪ`, `ФЫВАПРОЛДЖЭ`, `ЯЧСМИТЬБЮЁ`];
		this.eng = [`QWERTYUIOP`, `ASDFGHJKL`, `ZXCVBNM`];
		this.ro = [`QWERTYUIOPĂÎÂ`, `ASDFGHJKLȘȚ`, `ZXCVBNM`]
	}
	createEngKeyboard () {
			let codeLetter = this[this.language];
			console.log(codeLetter);
			for(let i = 0; i < codeLetter.length; i++) {
				let div = document.createElement('div');
				div.className = `keyboardLine${i}`
				for(let letter of codeLetter[i]) {
					let button = document.createElement('button');
					button.classList = 'btnKeyboard';
					button.textContent = letter;
					div.appendChild(button);
				}
				this.elementHtml.appendChild(div);
			}
			// for(let i = 0; i < 3; i++){
			// 	let div = document.createElement('div');
			// 	div.className = `keyboardLine${i}`
			// 	for(let j = 0; j< 12; j++) {
			// 		let currentLetter = String.fromCharCode(codeLetter);
			// 		if (codeLetter > this[this.language][1]) {
			// 			break
			// 		}
			// 		codeLetter++;
			// 		let button = document.createElement('button');
			// 		button.classList = 'btnKeyboard';
			// 		button.textContent = currentLetter;
			// 		div.appendChild(button);
			// 	}
			// 	this.elementHtml.appendChild(div);
			// }
	}
}
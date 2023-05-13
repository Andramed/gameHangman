export class ConstructorKeyBoard {
	constructor(language, elementHtml) {
		this.language = language;
		this.elementHtml = elementHtml; 
		this.ru = [1040, 1071];
		this.eng = [65, 90];
		this.ro = [65, 90]
	}
	createEngKeyboard () {
			let codeLetter = this[this.language][0];
			for(let i = 0; i < 3; i++){
				let div = document.createElement('div');
				div.className = `keyboardLine${i}`
				for(let j = 0; j< 12; j++) {
					let currentLetter = String.fromCharCode(codeLetter);
					if (codeLetter > this[this.language][1]) {
						break
					}
					codeLetter++;
					let button = document.createElement('button');
					button.classList = 'btnKeyboard';
					button.textContent = currentLetter;
					div.appendChild(button);
				}
				this.elementHtml.appendChild(div);
			}
	}
}
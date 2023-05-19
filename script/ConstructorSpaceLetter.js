
export class ConstrucSpaceLetter {
	constructor(randomWord, placeLetter){
		this.randomWord = randomWord;
		this.placeLetter = placeLetter
	}
	constructDiv () {
		for(let i = 0; i < this.randomWord.length; i++) {
			let div = document.createElement('div');
			div.className = 'letter'
			let paragraph = document.createElement('p');
			paragraph.className = `underscore${i}`;
			paragraph.textContent = '___';
			div.appendChild(paragraph);
			this.placeLetter.appendChild(div);
			
		}
		console.log(this.randomWord);
	}
}




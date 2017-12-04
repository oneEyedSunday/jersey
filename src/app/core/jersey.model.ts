export class Jersey {
	constructor(
		public font: string,
		public text: string,
		public number: string,
		public badge: string,
		public complete: boolean
	){}
}

export const InitialJersey: Jersey = {
	font: 'sans-serif',
	text: '',
	number: '',
	badge: '',
	complete: false
}
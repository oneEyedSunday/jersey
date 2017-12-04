export class Jersey {
	constructor(
		public font: string,
		public text: string,
		public number: string,
		public badge: string,
		public badge_position: string,
		public base: string,
		public pricolor: string,
		public seccolor: string,
		public complete: boolean
	){}
}

export const InitialJersey: Jersey = {
	font: 'sans-serif',
	text: '',
	number: '9',
	badge: '',
	badge_position: 'right',
	base: '',
	pricolor: '#000000',
	seccolor: '#000000',
	complete: false
}
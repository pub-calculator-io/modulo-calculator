function calculate() {
	const a = input.get('a').number().val();
	const b = input.get('b').number().val();

	_('result').innerHTML = ((a % b) + b) % b;
}
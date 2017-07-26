export default function mockData() {
	console.log('mockData')
	var a = []
	for (var i = 0; i < 11; i++) {
		a.push({
			year: 2000 + i + ''
		  , apples: 500 + Math.random() * 300
		  , bananas: 400 + Math.random() * 200
		  , oranges: 300 + Math.random() * 100
		})
	}
	return a
}

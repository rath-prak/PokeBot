const random = array => {
	return array[Math.floor(Math.random() * array.length)]
}

const getGreetings = () => {
	const answers = [
	  'What!',
    'What you want?',
    'Hurry up man!',
	]
	return random(answers)
}

module.exports = getGreetings
const ball = document.querySelector('.ball-img img')
const input = document.querySelector('.question input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = [
	'To pewne.',
	'Zdecydowanie tak.',
	'Bez wątpienia.',
	'Tak, zdecydowanie.',
	'Możesz na to liczyć.',
	'Widzę, że tak.',
	'Najprawdopodobniej.',
	'Perspektywa jest dobra.',
	'Tak.',
	'Wszystkie znaki wskazują na: tak.',
	'Odpowiedź jest mglista, spróbuj jeszcze raz.',
	'Zapytaj później.',
	'Lepiej nie mówić teraz.',
	'Nie mogę teraz przewidzieć.',
	'Skoncentruj się i zapytaj ponownie.',
	'Nie licz na to.',
	'Moja odpowiedź brzmi: nie.',
	'Moje źródła mówią, że nie.',
	'Prognoza nie jest zbyt dobra.',
	'Bardzo wątpliwe.',
]

const animation = () => {
	ball.classList.add('shake-animation')
	setTimeout(() => {
		ball.classList.remove('shake-animation')
		error.textContent = ''
		answer.innerHTML = ''
		checkInput()
	}, 1000)
}

const checkInput = () => {
	if (input.value == '') {
		error.textContent = 'Musisz zadać pytanie'
	} else if (input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi zawierać "?".'
	} else {
		error.textContent = ''
		drawAnswer()
	}
}
const drawAnswer = () => {
	const random = Math.floor(Math.random() * 20)
	answer.innerHTML = `<span>Odpowiedz:</span> ${answers[random]}`
}

ball.addEventListener('click', animation)

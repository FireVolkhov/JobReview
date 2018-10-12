// AngularJs 1.6
// Услованя бизнес-логика требует подсчет колическва событий ресайза экрана
// Джунеор отдал код на ревью,
// Укажите на допущенные ошибки (если они есть) и предложите свой вариант
function AngularController () {
	this.resizeCounter = 0;

	window.addEventListener('resize', this.resize);

	this.resize = function() {
		this.resizeCounter++;
	};
}

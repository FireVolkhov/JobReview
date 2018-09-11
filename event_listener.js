var div = $('<div><button>Click Me</button></div>');
var button = div.find('button');

button.get(0).addEventListener('click', function () {
	console.log('button', 1);
});
button.get(0).addEventListener('click', function () {
	console.log('button', 2);
}, true);

div.get(0).addEventListener('click', function () {
	console.log('div', 1);
});
div.get(0).addEventListener('click', function () {
	console.log('div', 2);
}, true);

// Пользователь кликнул в кнопку
// Что будет в видно в консоли?

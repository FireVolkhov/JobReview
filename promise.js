function request () {
	return Promise
		.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error(x) })
		.then((x) => 10)
		.then((x) => console.log('then 1', x))
		.finally((x) => console.log('finally 1', x))
		.catch((e) => console.log('catch 1', e))
		.then((x) => 5)
		.then((x) => console.log('then 2', x))
		.finally((x) => console.log('finally 2', x))
		.catch((e) => console.log('catch 2', e));
}

// Что будет в консоли?

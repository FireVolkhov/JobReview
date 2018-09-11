function request () {
	return Promise
		.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error(x) })
		.then((x) => 10)
		.then((x) => console.log(x))
		.catch((e) => console.log(e))
		.then((x) => 5)
		.then((x) => console.log(x))
		.catch((e) => console.log(e));
}

// Что будет в консоли?

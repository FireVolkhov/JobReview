function angular1xCtrl() {
	var self = this;

	self.counter = 0;

	self.clickInButton = function() {
		self.counter = 1;

		setTimeout(function () {
			self.counter = 2;
			console.log(self.counter);
		}, 100);
	}
}

// После нажатия кнопки, что будет в консоли и что увидет пользователь в шаблоне?

// AngularJs 1.6
// isLoading - используеться в шаблоне
// Что увидет пользователь и что будет в консоле, после нажатия на кнопку
function AngularController () {
	this.isLoading = false;

	self.clickInButton = () => {
		this.isLoading = true;

		setTimeout(() => {
			this.isLoading = false;
			console.log('this.isLoading', this.isLoading);
		}, 2000);
	};
}

// Джунеор отправил код на ревью, оцените его код,
// напишите замечания, если необходимо

// AngularJs 1.6
const AutocompleteComponent = {
	binding: {
		srcType: '@',
		srcList: '@', // 1 Должен быть = или <
		description: '@',
		isDisabled: '='
	},
	template: `
		<div>
			<div ng-repeat="item in autocompleteComponentCtrl.list">
				<div>{{ item.Name }}</div>
			</div>
			
			<div>{{:: autocompleteComponentCtrl.id }}</div>
			<div>{{:: autocompleteComponentCtrl.resizeCounter }}</div>
			
			<div ng-if="autocompleteComponentCtrl.isLoading"><loader></loader></div>
			<button ng-click="clickInButton()"></button> // 13 не указан контроллер
		<div>`, // 11 Нет закрывающего тега

	controller: function ($scope, $element, _, AutocompleteServiceFactory) { // 2 должен быть inject
		switch (this.srcType) {
			case 'api':
				if (this.apiUrl) { // 3 Должно быть указана в binding
					this.autocompleteService = AutocompleteServiceFactory(this.apiUrl);
				}
				// 7 Нет break

			case 'list':
				this.list = parseList(this.srcList); // 1
				break;

			// 6 Нет дефолт части
		}

		this.id = _.uniqueId('autocomplete_');
		this.resizeCounter = 0;

		window.addEventListener('resize', this.resize); // 4 bind или использование self + (apply | call)
		// 8 Нет снятия биндинга

		this.resize = function() { // 4 либо стрелочная функция
			this.resizeCounter++; // 4 либо self тут
		}; // 10 Объяевлена позже использования

		this.isLoading = false;

		self.clickInButton = () => {
			this.isLoading = true;

			setTimeout(() => {
				this.isLoading = false; // 5 $digest или $apply
			}, 2000);
		};

		function parseList(list) {
			// some code
			return list;
		}
	}
};

// 14 Не указан module
angular.component('AutocompleteComponent', AutocompleteComponent); // 12 С заглавной буквы ошибка

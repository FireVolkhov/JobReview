// https://jsfiddle.net/gf57dztc/
// Джунеор отправил код на ревью, оцените его,
// напишите замечания, если необходимо
// _ - библиотека lodash
// AutocompleteServiceFactory

// AngularJs 1.6
const AutocompleteComponent = {
	binding: {
		srcType: '@',
		srcList: '@',
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
			<button ng-click="clickInButton()"></button>
		<div>`,

	controller: function ($scope, $element, _, AutocompleteServiceFactory) {
		switch (this.srcType) {
			case 'api':
				if (this.apiUrl) {
					this.autocompleteService = AutocompleteServiceFactory(this.apiUrl);
				}
				// нет брейка
			case 'list':
				this.list = parseList(this.srcList);
				break;
				// нет дефолта
		}

		this.id = _.uniqueId('autocomplete_');


		this.resizeCounter = 0;

		window.addEventListener('resize', this.resize);

		this.resize = function() {
			this.resizeCounter++;
		};


		this.isLoading = false;

		self.clickInButton = () => {
			this.isLoading = true;

			setTimeout(() => {
				this.isLoading = false;
			}, 2000);
		};

		function parseList(list) {
			// some code
			return list;
		}
	}
};

angular.component('AutocompleteComponent', AutocompleteComponent);

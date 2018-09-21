// React 15.x
import _ from 'lodash';
// 1 нет экстенда
export default class NewComponent {
	constructor(props) {
		// 2 нет конструктора
		switch (props.srcType) {
			case 'api':
				if (props.apiUrl) {
					// 3 no import
					this.autocompleteService = AutocompleteService(props.apiUrl);
				}
				// 4 нет break

			case 'list':
				this.list = this.parseList(props.srcList);
				break;

			// 5 no default
		}

		this.resizeCounter = 0;

		this.state = {};
		// 6 не использован getInitState
	}

	getInitState(props) {
		const id = _.uniqueId('autocomplete_');

		const state = {
			id: id,
			value: '',
			trimmedValue: '',
			model: props.ngModel,
			name: props.name || id
		};

		return state;
	}

	parseList(list) {
		// some code
		return list;
	}

	componentDidMount() {
		// 7 нет биндинга
		window.addEventListener('resize', this.resize);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// 8 из-за этого не будет обновляться компонент
		return false;
	}

	// 9 componentWillUnmount его нет

	resize() {
		this.resizeCounter++;
	}
}

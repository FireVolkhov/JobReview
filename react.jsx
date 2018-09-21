// Джунеор отправил код на ревью, оцените его код,
// напишите замечания, если необходимо
//
// React 15.x
import _ from 'lodash';

export default class NewComponent {
	constructor(props) {
		switch (props.srcType) {
			case 'api':
				if (props.apiUrl) {
					this.autocompleteService = AutocompleteService(props.apiUrl);
				}

			case 'list':
				this.list = this.parseList(props.srcList);
				break;
		}

		this.resizeCounter = 0;

		this.state = {};
	}

	getInitState(props) {
		const id = _.uniqueId('autocomplete_');

		const state = {
			id: id,
			value: '',
			trimmedValue: '',
			model: props.model,
			name: props.name || id
		};

		return state;
	}

	parseList(list) {
		// some code
		return list;
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	resize() {
		this.resizeCounter++;
	}
}

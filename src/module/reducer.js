import * as actions from './action';

export default function divState(state = { hidden: false }, action) {
	switch (action.type) {
		case actions.TOGGLEDIV:
			return {
				hidden: !state.hidden,
			};
		default:
			return state;
	}
}

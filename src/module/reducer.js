import * as actions from './action';

function divState(state={ hidden: false }, action) {
	switch (actions.type) {
		case actions.TOGGLEDIV:
			return {
				hidden: !state.hidden,
			};
		default:
			return state;
	}
}

export function createActions(actions, defaults) {
	return actions.reduce(function(actions, action) {
		if (typeof action === 'string') action = { type: action }
		action = Object.assign({}, defaults, action)
		if (!action.act) {
			action.act = function(data) {
				return { type: this.type, data }
			}
		}
		var act = function(data) {
			return action.act(data)
		}
		Object.assign(act, action)
		actions[action.type] = act
		return actions
	}, {})
}

export function createReducer(initialState, handlers) {
	  return function reducer(state = initialState, action, ...rest) {
		  const handler = handlers[action.type]
		  return handler ? handler(state, action, ...rest) : state
	  }
}

export function combineReducers(reducers) {
	function getUndefinedStateErrorMessage(key, action) {
		  let actionType = action && action.type
		  let actionName = actionType && `"${actionType.toString()}"` || 'an action'
		return (
			`Reducer "${key}" returned undefined handling ${actionName}. ` +
			`To ignore an action, you must explicitly return the previous state.`
		  )
	}
	return function combination(state = {}, action) {
		let finalState = Object.assign({}, state)
		let hasChanged = false
		for (let key in reducers) {
			let reducer = reducers[key]
			let previousStateForKey = state[key]
			let nextStateForKey = reducer(previousStateForKey, action, finalState)
			if (nextStateForKey === undefined) {
				let errorMessage = getUndefinedStateErrorMessage(key, action)
				throw new Error(errorMessage)
			}
			// let { effects } = nextStateForKey
			// if (effects) {
			// 	nextStateForKey = nextStateForKey.state
			// 	if (nextStateForKey === undefined) nextStateForKey = previousStateForKey
			// 	let previousEffects = finalState.effects
			// 	let nextEffects = {}
			// 	for (let driver in effects) {
			// 	  	let newEffectsForDriver = effects[driver]
			// 	  	nextEffects[driver] = [...previousEffects[driver], ...newEffectsForDriver]
			// 	}
			// 	finalState.effects = { ...previousEffects, nextEffects }
			// 	hasChanged = true
			// }
			if (nextStateForKey !== previousStateForKey) {
				finalState[key] = nextStateForKey
				hasChanged = true
			}
		}
		return hasChanged ? finalState : state
	  }
}

import {createStore} from 'redux'

const defaultState = {
    isModalOpen: false
}

const reducer = (state = defaultState, action) => {
    if(action.type === 'OPEN_MODAL') {
        return {...state, isModalOpen: true}
    }
    if(action.type === 'CLOSE_MODAL'){
        return {...state, isModalOpen: false}
    }
    if(action.type === 'TOGGLE_MODAL') {
        return {...state, isModalOpen: action.payload}
    }
    return state
}

export const store = createStore(reducer)
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                lists: {
                    ...state.lists,
                    myList: [...state.lists.myList.filter(item => item.id !== action.payload.id), action.payload]
                }
            }
            break;
        case 'DELETE_FAVORITE':
            return {
                ...state,
                lists: {
                    ...state.lists,
                    myList: state.lists.myList.filter(items => items.id !== action.payload)
                }
            }
            break;
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
            break;
    }
}

export default reducer
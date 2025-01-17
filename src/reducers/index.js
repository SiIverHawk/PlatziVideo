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
            break;
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
            break;
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
            break;
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.lists.trends.find(item => item.id === Number(action.payload)) ||
                    state.lists.originals.find(item => item.id === Number(action.payload)) || []
            }
            break;
        case 'GET_VIDEO_RESULT':
            let search = action.payload || ''
            let regExp = new RegExp('\\b' + search + '\\b', 'gi')
            return {
                ...state,
                result: search.length > 0 ? [state.lists.trends.find(item => item.title.match(regExp)) || state.lists.originals.find(item => item.title.match(regExp)) || []] : []
            }
            break;
        default:
            return state
            break;
    }
}

export default reducer
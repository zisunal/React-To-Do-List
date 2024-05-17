const initialState = {
    list: []
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case 'MARK_DONE':
            return {
                ...state,
                list: state.list.map((item, index) => {
                    if (index === action.payload) {
                        return {
                            ...item,
                            done: true
                        }
                    }
                    return item
                })
            }
        case 'MARK_UNDONE':
            return {
                ...state,
                list: state.list.map((item, index) => {
                    if (index === action.payload) {
                        return {
                            ...item,
                            done: false
                        }
                    }
                    return item
                })
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                list: state.list.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}

export default listReducer
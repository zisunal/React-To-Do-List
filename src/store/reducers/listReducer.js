const initialState = {
    list: []
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            var lsList = localStorage.getItem('list');
            return {
                ...state,
                list: lsList ? JSON.parse(lsList) : []
            }
        case 'ADD_TODO':
            var lsList = localStorage.getItem('list');
            if (!lsList || lsList === '[]') {
                localStorage.setItem('list', JSON.stringify([action.payload]));
            } else {
                let list = JSON.parse(lsList);
                list.push(action.payload);
                localStorage.setItem('list', JSON.stringify(list));
            }
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case 'MARK_DONE':
            var lsList = localStorage.getItem('list');
            if (lsList) {
                let list = JSON.parse(lsList);
                list[action.payload].done = true;
                localStorage.setItem('list', JSON.stringify(list));
            }
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
            var lsList = localStorage.getItem('list');
            if (lsList) {
                let list = JSON.parse(lsList);
                list[action.payload].done = false;
                localStorage.setItem('list', JSON.stringify(list));
            }
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
            var lsList = localStorage.getItem('list');
            if (lsList) {
                let list = JSON.parse(lsList);
                list.splice(action.payload, 1);
                localStorage.setItem('list', JSON.stringify(list));
            }
            return {
                ...state,
                list: state.list.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}

export default listReducer
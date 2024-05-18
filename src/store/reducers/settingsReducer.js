const initialState = {
    title: 'A to do List App in react by Zisun',
    theme: '',
    author: 'MD Al Fariya Zisun',
    authorUrl: 'https://github.com/zisunal/React-To-Do-List',
    ytUrl: 'https://youtube.com/@zisunal',
    githubUrl: 'https://github.com/zisunal'
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_THEME':
            var ls = localStorage.getItem('theme');
            if (ls) {
                return {
                    ...state,
                    theme: ls,
                };
            } else {
                localStorage.setItem('theme', 'light');
                return {
                    ...state,
                    theme: 'light',
                };
            }
        case 'TOGGLE_THEME':
            localStorage.setItem('theme', state.theme === 'light' ? 'dark' : 'light');
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        default:
            return state;
    }
}

export default settingsReducer;
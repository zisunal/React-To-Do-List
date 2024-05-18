import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckBox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ListComponent = ({theme}) => {
    const todos = useSelector(store => store.list.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'GET_TODOS' });
    }, [dispatch]);
    const handleDelete = (index) => dispatch({ type: 'DELETE_ITEM', payload: index });

    if (!todos.length) return (<p className='empty'>No todos</p>);
    return (
        <ul className='list'>
            {todos.map((todo, index) => (
                <li key={index}>
                    <CheckBox
                    className={theme === 'dark' ? 'dark' : ''}
                    checked={todo.done}
                    color='secondary'
                    onChange={() => dispatch({ type: todo.done ? 'MARK_UNDONE' : 'MARK_DONE', payload: index })} 
                    inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p className={todo.done ? 'done' : ''}>{todo.text}</p>
                    <IconButton onClick={() => handleDelete(index)}><DeleteIcon className={theme === 'dark' ? 'dark' : ''} /></IconButton>
                </li>
            ))}
        </ul>
    );
};

export default ListComponent;
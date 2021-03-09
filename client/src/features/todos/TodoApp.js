import {
    increment,
    selectCount
} from './todoSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function TodoApp() {
    const dispatch = useDispatch()
    const count = useSelector(selectCount)

    // GET request to todos
    // DELETE request to todos
    // PATCH request to todos
    // POST request to todos

    return <div>
        <button onClick={() => dispatch(increment(1))}>{count}</button>
    </div>
}
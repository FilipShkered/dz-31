import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { save } from './store/actions/todo'

export default function Header () {
  const todoEdit = useSelector((state) => state.todo.todoEdit);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (todoEdit.title) {
      setTitle(todoEdit.title)
    }
  }, [todoEdit.title])

  function onTitleChange (e) {
    setTitle(e.target.value)
  }

   function onSubmit (e) {
    e.preventDefault();

    const todo = {
      ...todoEdit,
      title,
    }

      dispatch(save(todo))
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={onTitleChange}
        />
      </form>
    </div>
  )
}


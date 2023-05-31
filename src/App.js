import { useEffect } from 'react';
import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { remove, edit, fetchTodos , save } from './features/store/actions/todo'


function App() {
  const list = useSelector((state) => state.todo.list);
  const todoEdit = useSelector((state) => state.todo.todoEdit);
  const dispatch = useDispatch()
  
  useEffect(() => {
  dispatch(fetchTodos())
  }, [dispatch])
  
  function onTodoSubmit(todo) {
   dispatch(save(todo))
  }
  

  function onTodoRemove (id) {
    dispatch(remove(id))
  }

  function onTodoEdit (todo) {
    dispatch(edit(todo))
  }

  return (
    <div className="App">
      <Header
        todoEdit={todoEdit}
        onTodoSubmit={onTodoSubmit}
      />
      <TodoList
        list={list}
        onTodoRemove={onTodoRemove}
        onTodoEdit={onTodoEdit}
      />
      <Footer />
    </div>
  );
}

export default App;
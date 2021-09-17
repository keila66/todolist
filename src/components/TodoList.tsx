import React, { useContext } from 'react';
import TodoListItem from './TodoListItem'
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/TodoContext';

// import { Container } from './styles';

const TodoList = () => {
  const { todos } = useContext<TodoContextType>(TodoContext);

  return (
      <table className="uk-table">
          <caption>Lista de tarefas</caption>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Tarefa</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {
                  //se todo n tiver nada  ponto de interrogação impede de dar erro
                  todos?.map(
                      todo => {
                          return <TodoListItem key={todo.id} todo={todo}></TodoListItem>
                      }
                  )
              }
          </tbody>
      </table>
  );
}

export default TodoList;
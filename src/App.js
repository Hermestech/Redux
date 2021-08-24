import React from "react";
import  {TodoCounter} from './Componentes/TodoCounter';
import { TodoList } from './Componentes/TodoList';
import { TodoSearch } from "./Componentes/TodoSearch";
import { TodoItem } from './Componentes/TodoItem';
import { CreateTodoButton } from "./Componentes/CreateTodoButton";

const todos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro de React', completed: false},
  { text: 'Llorar con la llorona', completed: false}

];

function App() {
  return (
    <>

    <TodoCounter />
    <TodoSearch />

    <TodoList>
      {todos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        />
      ))}
    </TodoList>  

    <CreateTodoButton />

    </>
  );
}

export default App;

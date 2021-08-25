import React from 'react';
import  {TodoCounter} from '../Componentes/TodoCounter';
import { TodoList } from '../Componentes/TodoList';
import { TodoSearch } from "../Componentes/TodoSearch";
import { TodoItem } from '../Componentes/TodoItem';
import { CreateTodoButton } from '../Componentes/CreateTodoButton';

function AppUI({
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
}){
    return(
    
    <>

        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
           searchValue={searchValue}
           setSearchValue={setSearchValue}
        />
    
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            
            />
          ))}
        </TodoList>  
    
        <CreateTodoButton />
    
     </>);

}

export {AppUI}
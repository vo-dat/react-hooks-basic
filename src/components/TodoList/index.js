import React from 'react';
import PropTypes from 'prop-types';


TodoList.propTypes = {
    todos: PropTypes.array,
    onToCLick:PropTypes.func,
    
};
TodoList.defauftProps={
    todos:[],
    onToCLick:null,
}

function TodoList(props) {
    const {todos, onToCLick}=props;
    function handelClick(todo){
        if(onToCLick){
            onToCLick(todo);
        }
    }
    return (
        <div>
           <div className="todo-list">
               {todos.map((todo,index)=>(
                
                <span className="label label-info" key={index} onClick={()=>{handelClick(todo)}}>{todo.id}: {todo.title}</span>
               ))}
           </div>
        </div>
    );
}

export default TodoList;
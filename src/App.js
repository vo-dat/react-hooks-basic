import { useState } from 'react';
import './App.scss';
import TodoForm from './components/AddTodo/AddTodo';
import AddTodo from './components/AddTodo/index';
// import ColorBox from './components/ColorBox/ColorBox'
import TodoList from './components/TodoList/index'
import FormInput from './components/FormStudent';
import ListStudent from './components/ListStudent';

function App() {
  const [todoList,setTodoList] =useState([
    {id:'1',title:'A'},
    {id:'2',title:'B'},
    {id:'3',title:'C'},
    {id:'4',title:'D'}

  ]);
  const [student, setstudent] = useState([
      {id:'1',name:'HS A', email:'@123.com'},
      {id:'2',name:'HS A', email:'@123.com'},
      {id:'3',name:'HS A', email:'@123.com'},
      {id:'4',name:'HS A', email:'@123.com'},   
    ]);
  //Hàm remove 1 đối tượng
  function handelTodoClick(todo){
    const index= todoList.findIndex(x=>x.id===todo.id);
    console.log(index);
    if(index<0)return;

    const newtodoList=[... todoList];
    newtodoList.splice(index,1);
    setTodoList(newtodoList);
  }

  function handelSubmitForm(formValue){
    console.log(formValue);
    const newTodoForm=[... todoList];
    const newtodo= {
      id: todoList.length*10+1,
      ... formValue,
    }
    newTodoForm.push(newtodo);
    setTodoList(newTodoForm);
  }
    function handelOnSubmit(formValue){
          const newValue={ ... formValue};
          const newTodoList=[... todoList];
          newTodoList.push(newValue);
          setTodoList(newTodoList);
    }
    function handelOnSubmitStudent(formStudent){
      const newListSudent= [... student];
      const newValue={... formStudent};
      newListSudent.push(newValue);
      console.log(newValue);
      setstudent(newListSudent);
    }
  return (
    <div className="App">
      <h1>Wellcome ReactJs Hook</h1>
      {/* <ColorBox></ColorBox> */}
          <TodoList todos={todoList} onToCLick={handelTodoClick}/>
          <TodoForm onSubmit={handelSubmitForm}/>
      <h1>Tự Làm</h1>
          <AddTodo clickSubmit={handelOnSubmit}/>
      <h1>Form Student</h1>
          <FormInput onSubmit={handelOnSubmitStudent}/>
          <br/>
          <ListStudent students={student}/>
    </div>
  );
}

export default App;

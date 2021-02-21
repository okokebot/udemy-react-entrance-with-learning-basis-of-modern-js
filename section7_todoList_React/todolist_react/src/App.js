import React, {useState} from 'react';
import './style.css';
import {InputTodo} from './components/InputTodo'

function App() {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // input area に変更があった場合は、その値を書き換える
  // value={todoText} としているため、これがないと常に初期値である '' が代入され、フォームに入力できない
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return ;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <div className="incomplete-area">
        <p className="title">未完了のToDO</p>
        <ul>
          {
            incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)} >削除</button>
                </div>
              )
            })
          }
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDO</p>
        <ul >
          {
            completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{ todo }</li>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default App;

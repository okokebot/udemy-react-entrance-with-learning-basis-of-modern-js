export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="ToDO を入力" value={todoText} onChange={onChange} />
      <button onClick={ onClick }>追加</button>
    </div>
  )
}

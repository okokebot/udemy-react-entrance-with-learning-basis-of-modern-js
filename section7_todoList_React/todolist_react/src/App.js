import './style.css';

function App() {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDO を入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDO</p>
        <ul>
          <div className="list-row">
            <li>aaaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>aaaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDO</p>
        <ul >
          <div className="list-row">
            <li>aaaaaa</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default App;

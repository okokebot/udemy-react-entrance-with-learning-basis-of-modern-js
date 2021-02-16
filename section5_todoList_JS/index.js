const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputDom = document.querySelector("#add-text");
  const inputText = inputDom.value;
  inputDom.value = "";

  createIncompleteList(inputText);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li 生成
  const li = document.createElement("li");
  li.innerText = text;

  // button (完了) 作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ (div) を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // ToDO 内容を取得
    const text = addTarget.firstElementChild.innerText;

    // div だけは使い回す。そのための初期化
    addTarget.textContent = null;

    // li タグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグdiv を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.querySelector("#complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;

      // text をもとに、未完了の ToDO を作成
      createIncompleteList(text);
    });

    // div タグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.querySelector("#complete-list").appendChild(addTarget);
  });

  // button (削除) 作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ (div) を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div 配下に li を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了 ul 配下に div を追加
  document.querySelector("#incomplete-list").appendChild(div);
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.querySelector("#incomplete-list").removeChild(target);
}

document.querySelector("#add-button").addEventListener("click", () => onClickAdd());

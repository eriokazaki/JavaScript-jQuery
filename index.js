const input = document.getElementById('input'); // inputタグを取得する
const result = document.getElementById('result'); // pタグを取得する

function checkStock() {
  const stock = input.value; // inputタグの入力値を取得する

  if (stock < 10) {
    result.innerHTML = "ポテパンダの在庫は残りわずかです。"; // innerHTMLを使ってpタグの内容を切り替える
  } else {
    result.innerHTML = "ポテパンダの在庫はあります。"; // innerHTMLを使ってpタグの内容を切り替える
  }
}
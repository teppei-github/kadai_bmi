const calcBMI = () => {
  // 画面から、身長の値を取得して、変数 height に格納
  let height = document.getElementById("sincho").value;
  // 画面から、体重の値を取得して、変数 weight に格納
  let weight = document.getElementById("taijyu").value;
  // BMI を計算する
  let bmi = weight / (height * height);

  // [宿題] BMI の値を、100倍（%に変換）して、小数点以下2桁で四捨五入するコードを書いてください！
  // ChatGPTなしで！ただ、MDNとか、Googleで調べるのはOKです！

  //

  // 計算結果を、画面上の id='kekka'に表示する
  document.getElementById("kekka").value = bmi;
};

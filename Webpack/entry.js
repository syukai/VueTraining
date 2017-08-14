// ↓webpack.config.jsに設定を移動
// ↓これでコンパイル
// webpack ./entry.js bundle.js --module-bind "css=style-loader!css-loader"
//require("!style-loader!css-loader!./style.css");

require("./style.css");
document.write(require("./content.js"));

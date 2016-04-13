var root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

var context = require.context("./unit/", true, /\.spec\.js$/);
context.keys().forEach(context);


var srcContext = require.context("../src/js/", false, /\.js$/);
srcContext.keys().forEach(srcContext);
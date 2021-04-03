var UglifyJS = require('uglify-js')

var code = `var a;
var x = {b: 123};
a = 123;
delete x`

var ast = UglifyJS.parse(code)

ast.figure_out_scope();

compressor = UglifyJS.Compressor();
ast = ast.transform(compressor);

code = ast.print_to_string();

console.log("code", code);
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('./wat_multiply.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes, importObject )
).then(results => {
  instance = results.instance;

  var resultdiv = document.getElementById("result");
  resultdiv.innerHTML=instance.exports.multiply(2,5);
  console.log("2 * 5 = " +
    instance.exports.multiply(2,5));
}).catch(console.error);

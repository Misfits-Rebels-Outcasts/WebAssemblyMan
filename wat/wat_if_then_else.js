fetch('./wat_if_then_else.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)
).then(results => {
  instance = results.instance;

  console.log("min10(12) " +
    instance.exports.min10(12));

  console.log("min10(5) " +
    instance.exports.min10(5));

}).catch(console.error);
const proxy = [
  {
    context: "/denki-api",
    target: "http://localhost:8080",
  },
];
module.exports = proxy;

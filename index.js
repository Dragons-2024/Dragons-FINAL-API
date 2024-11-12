const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.js")();
const router = jsonServer.router(db);

server.use(middlewares);

server.get("/clientes", (req, res) => {

  res.jsonp(db.clientes);
});

server.put("/clientes/:nit", (req, res) => {
  const id = req.params.nit; 
  const cliente = db.clientes.find((cliente) => cliente.nit == id);
  console.log(cliente);
  if (cliente) {
    cliente.activo = !cliente.activo;
    res.jsonp(cliente);
  } else {
    res.sendStatus(404);
  }
});

server.put("/clientes/:id", (req, res) => {
  const id = req.params.id;
  const clienteIndex = db.clientes.findIndex((cliente) => cliente.id == id);
  
  if (clienteIndex !== -1) {
    db.clientes[clienteIndex] = { ...db.clientes[clienteIndex], ...req.body };
    res.jsonp(db.clientes[clienteIndex]);
  } else {
    res.sendStatus(404);
  }
});

server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running on port ${port}");
});

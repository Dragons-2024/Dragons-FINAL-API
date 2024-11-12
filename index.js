const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.js")();
const router = jsonServer.router(db);

server.use(middlewares);
server.use(jsonServer.bodyParser);

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

server.put("/clientes/actualizar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const clientes = router.db.get("clientes");

  const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);

  if (clienteIndex !== -1) {
    const updatedCliente = { ...clientes[clienteIndex], ...req.body };
    clientes[clienteIndex] = updatedCliente;
    router.db.write(); 
    res.jsonp(updatedCliente);
  } else {
    res.sendStatus(404);
  }
});

server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running on port ${port}");
});

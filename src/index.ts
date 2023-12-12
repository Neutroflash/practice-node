import http from "node:http";

const notes = [
  { id: 1, content: "Hacer la cama" },
  { id: 2, content: "Lavar los platos" },
  { id: 3, content: "Estudiar JavaScript" },
  { id: 4, content: "Hacer las compras" },
  { id: 5, content: "Limpiar mi habitación" },
  { id: 6, content: "Almorzar a tiempo" },
];

const requestListener: http.RequestListener = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "plain/text" });
    res.end("Bienvenidos a Notas");
  } else if (req.url === "/notes") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(notes));
  } else if (req.url === "/notes/") {
    
  }
};

const server = http.createServer(requestListener);
server.listen(5500);

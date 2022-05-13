const http = require("http");

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/employees") {
    const data = [
      {
        id: 1,
        emp_name: "Fernandez Estrada",
        emp_designation: "FullStack Developer",
      },
    ];

    res.end(JSON.stringify(data));
  } else if (req.url === "/") {
    const data = [
      {
        id: 21,
        body: "21",
        title: "21",
      },
      {
        id: 22,
        body: "22",
        title: "22",
      },
      {
        id: 27,
        body: "27",
        title: "27",
      },
      {
        id: "nq-a9GC",
        body: "Edit-body",
        title: "vignesh-nayak",
      },
      {
        id: "vH87b2g",
        body: "okay",
        Title: "okay",
      },
      {
        id: "vKSBZUf",
        body: "body",
        title: "title",
      },
    ];
    res.end(JSON.stringify(data));
  } else {
    res.end(JSON.stringify({}));
  }
};

const server = http.createServer(requestListener);

const PORT = 8000;

server.listen(PORT, () => console.log(`server running at ${PORT}`));

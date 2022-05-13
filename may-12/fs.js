const fs = require("fs/promises");

const utilities = async () => {
  await fs.mkdir("./example", () => console.log("created a directory"));

  await fs.writeFile("./example/msg.txt", "Hello there", "utf8", () =>
    console.log("msg.txt created and added a text")
  );

  await fs.appendFile(
    "./example/msg.txt",
    "\nThis Obi wan kenobi.",
    "utf8",
    () => console.log("text appended to file")
  );

  const msg = await fs.readFile("./example/msg.txt", "utf8");

  console.log(msg);
};

utilities();

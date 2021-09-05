const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
	console.log(req.headers.host)
	console.log('???')
	res.send({ name:"Hello World!"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

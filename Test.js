const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  fs.readFile('exampleAssignments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

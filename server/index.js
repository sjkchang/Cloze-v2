const express = require('express');
const app = express();
const port = 5000;

app.get('/hello', (req, res) => res.send('Hello World'));
app.post('/hello', (req, res) => res.send("You called the post method at '/'!"));
app.all('/test', (req, res) => res.send("HTTP method doesn't have any effect on this route!"));

app.listen(port, () => console.log(`Cloze V2 is running at http://localhost:${port}`));
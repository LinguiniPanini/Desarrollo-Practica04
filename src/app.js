const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: 'a y b deben ser numeros' });
  }

  res.json({ result: a + b });
});

module.exports = app;

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/quiz', (req, res) => {
  res.json([{ question: "What is the powerhouse of the cell?", answer: "Mitochondria" }]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
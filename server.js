const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 4000;

// Use CORS middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Use routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

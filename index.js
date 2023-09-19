const express = require ("express");
const cors = require ("cors");
const app = express ();

app.use (cors());
app.get("/", (req, res) => res.json ("Hello! from iTechNets... Updated"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server started on port ${PORT}'));

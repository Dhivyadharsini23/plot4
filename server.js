const express = require("express");

const cors = require("cors");

const connectDB = require("./db");

const plotRoutes = require("./routes/plotRoutes");

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api/plots", plotRoutes);

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});

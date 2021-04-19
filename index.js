require('dotenv').config()

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//port server
const PORT = process.env.PORT || 8080;

const app = express();

//mengamankan http 
app.use(helmet());
//memberi izin akses pada platfom lainnya
app.use(cors({
    origin: true,
    credentials: true
}));

//inputan json
app.use(express.json());
//inputan urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(require("./routers/index"));

//jika request router tidak sama atau tidak ada maka not found
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: error.message,
    });
});

app.listen(PORT, () => {
    console.log(`Express server started on ${PORT}`);
    });
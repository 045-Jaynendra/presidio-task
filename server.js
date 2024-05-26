const express = require('express')
const connectDb = require('./config/dbConnection')
const cors = require('cors');

connectDb();
const app = express();

app.use(cors());


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.static("public"));

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.json(__dirname, 'build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use("/api/landlord", require("./routes/landlordRoutes"));
app.use('/api/property', require("./routes/propertyRoutes"));
app.use('/api/request', require("./routes/requestRoutes"));
app.use('/api/tenant', require("./routes/tenantRoutes"));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
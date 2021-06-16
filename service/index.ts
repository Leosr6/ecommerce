
// Import dependencies
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get("/heartbeat", (req, res) => {
    res.status(200);
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`Backend listening on: ${port}`));

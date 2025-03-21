const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Halaman utama dengan tautan ke halaman form
app.get("/", (req, res) => {
    res.send(`
        <h1>Hello, World!</h1>
        <p><a href="/form">Klik di sini untuk pergi ke Form</a></p>
    `);
});

// Halaman form
app.get("/form", (req, res) => {
    res.send(`
        <form action="/form" method="post">
            Nama: <input type="text" name="name"><br>
            Email: <input type="email" name="email"><br>
            <input type="submit">
        </form>
    `);
});

// Handle form submit
app.post("/form", (req, res) => {
    const { name, email } = req.body;
    res.send(`<h2>Data Diterima</h2><p>Nama: ${name}</p><p>Email: ${email}</p>`);
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});

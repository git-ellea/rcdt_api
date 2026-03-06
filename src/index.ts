import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(201).send("Hello")
})

app.post('/analyze-deadlines', (req, res) => {
    const {company, obligations, today} = req.body;
    if (!company || !obligations || !today) {
        res.status(400).send("Either one or more of the following fields (company, obligations, today) are missing")
    }
    res.json({
        "company": company,
        "analysis": ""
    })
})

app.listen(PORT, () => {
    console.log(`Program is running at http://localhost:${PORT}`);
})
import express from "express"

const app = express()

const PORT = 5000
app.get("/", (req, res) => {
    res.send("API is running...")
})

app.listen(PORT, console.log(`Server running in ${PORT}`))
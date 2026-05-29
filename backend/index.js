const express = require("express")
const cors = require("cors")

const PORT = 3001

// Create the backend server instance
const app = express()

app.use(cors())  // Enable cors
app.use(express.json())  // Allow the server to understand Json requests

// GET HTTP request
app.get("/", (request, result) =>
{
    result.send("Backend is working!")
})

app.listen(PORT, () =>
{
    console.log("Server is now running on port " + PORT)
})
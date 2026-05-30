const express = require("express")
const cors = require("cors")
const db = require("./db")

const PORT = 3001
const INTERNAL_SERVER_ERROR = 500

// Create the backend server instance
const app = express()

app.use(cors())  // Enable cors
app.use(express.json())  // Allow the server to understand Json requests

// GET all of the attacks
app.get("/attacks", (req, res) =>
{
    // .all returns all rows
    db.all("SELECT * FROM attacks;", (error, rows) =>  // error if somehting fails, and rows is an array
    {
        if(error)
        {
            // return error to the client
            return res.status(INTERNAL_SERVER_ERROR).json(error)
        }

        const formatted = rows.map(r => ({...r, // copy everything as is
            platforms: JSON.parse(r.platforms)}))  // since platforms is stored as a string in the database we need to parse it
        res.json(formatted)
    })
})

app.listen(PORT, () =>
{
    console.log("Server is now running on port " + PORT)
})
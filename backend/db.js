// .verbose enables detailed logging and debugging information
const sqlite3 = require("sqlite3").verbose()

// Create the database in a specipic path
const db =  new sqlite3.Database("./attacks.db")

// Create the table if it does'nt exist query
const createAttacksTable = "CREATE TABLE IF NOT EXISTS attacks ( id TEXT PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, platforms TEXT NOT NULL, detection TEXT NOT NULL, phase TEXT NOT NULL);"

// .serialize makes sure queries run in order, not randomly or in parallel
db.serialize(() => 
{
    db.run(createAttacksTable)
})

module.exports = db  // Enable other files to use this database object
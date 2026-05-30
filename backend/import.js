// Fill up teh database with all of the attacks, I ran this script once
const fs = require("fs")
const db = require("./db")

NOT_AVAILABLE = "NA"

// I have cloned the git repository to fill the database locally
const DATA_DIR = "C:/Users/USER/Documents/refaelTask/cti/enterprise-attack/attack-pattern"

// I am using prepared statements (precompiled statements) for easy sqlite database management
const insert = db.prepare("INSERT INTO attacks (id, name, description, platforms, detection, phase) VALUES (?, ?, ?, ?, ?, ?)")

// This line is using fs, readdirSync means we are reading all of the files in the given directory and iterating over them
fs.readdirSync(DATA_DIR).forEach(file =>
{
    // file is the path of the current file
    const filePath = DATA_DIR + "/" + file

    // Open the file and read it as text
    const raw = fs.readFileSync(filePath, "utf-8")
    const json = JSON.parse(raw)

    // json.objects gives the array of all of the objects inside of the file
    // ? is for safety, if objects exists, continue and if not don't crash
    // We are finding the first item that matches the "attack-pattern" key (its singular)
    const obj = json.objects?.find(item => item.type === "attack-pattern")
    if (!obj)
    {
        return
    }

    // obj is now the enire attack-pattern, we need to extract the fields, NA if not found
    const id = obj.external_references?.find(r => r.external_id)?.external_id || NOT_AVAILABLE
    const name = obj.name || NOT_AVAILABLE
    const description = obj.description || NOT_AVAILABLE
    const platforms = extractPlatforms(obj)
    const detection = obj.x_mitre_detection || NOT_AVAILABLE
    const phase = obj.kill_chain_phases?.[0]?.phase_name || NOT_AVAILABLE

    insert.run(id, name, description, platforms, detection, phase)

    console.log("Inserted:", id)
})

/*
    Helper function to extract the platforms from the attack-pattern json object and make the code look cleaner
    input: the attack-pattern jsob object
    output: the string version of the platforms, because it is stored this way in the database
*/

function extractPlatforms(obj)
{
    return JSON.stringify(obj.x_mitre_platforms || [])
}

// finalize the sqlite prepared statemt
insert.finalize()

console.log("finished importing attacks")
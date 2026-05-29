import { useState, type SubmitEvent } from "react"
import { Button } from "./Button"

export function SearchBar()
{
    const [attack, setAttack] = useState("")

    function handleSubmit(event: SubmitEvent)
    {
        event.preventDefault()  // add docs

        if(attack.trim() === "")
        {
          return
        }

        setAttack("")
    }
    
    return (
    <form className="flex gap-2 mt-6" onSubmit={handleSubmit}>
        <input
        value={attack} onChange={event => setAttack(event.target.value)}
        className="flex-1 rounded-lg bg-zinc-400 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        placeholder="Search...">
        </input>

        <Button content="Search"
          disabled={attack.trim() === ""}> 
        </Button>
       
    </form>)
}



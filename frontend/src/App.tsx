import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { AttackCard } from "./components/AttackCard"
import { useState } from "react"

// Temporary attacks to test functionality
export const attacks = [
{
    id: "T1055",
    name: "Process Injection",
    description: "Adversaries may inject code into processes...",
    platforms: ["Windows", "Linux"],
    detection: "Monitor unusual process behavior",
    phase: "Defense Evasion"
},
{
    id: "T1574",
    name: "DLL Side-Loading",
    description: "Attackers may execute their own malicious payloads by side-loading DLLs...",
    platforms: ["Windows"],
    detection: "Monitor DLL loading events",
    phase: "Persistence"
}
]

/*
  Function is the root application component
  input: no input values
    output: rendered UI card displaying the entire application
*/

export default function App()
{
  const [search, setSearch] = useState("")

  // Description search
  const filteredAttacks = attacks.filter(attack => attack.description.toLowerCase().includes(search.toLowerCase()))

  return (
  <div className="max-w-2xl mx-auto p-4 flex flex-col">
      <Header/>
      <SearchBar
        attack={search}
        setAttack={setSearch}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {filteredAttacks.map(attack => (  // This map() function creates an AttackCard (object) for every attack that has been filtered and presents it.
          <AttackCard
            key={attack.id}
            name={attack.name}
            description={attack.description}
            platforms={attack.platforms}
            detection={attack.detection}
            phase={attack.phase}
          />
        ))}
      </div>
  </div>
  )
}

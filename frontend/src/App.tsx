import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { AttackCard } from "./components/AttackCard"
import { useState , useEffect} from "react"

type Attack = 
{
  id: string
  name: string
  description: string
  platforms: string[]
  detection: string
  phase: string
}

/*
  Function is the root application component
  input: no input values
    output: rendered UI card displaying the entire application
*/

export default function App()
{
  const [attacks, setAttacks] = useState<Attack[]>([])
  const [search, setSearch] = useState("")
  const [selectedPhase, setSelectedPhase] = useState("Phases - All")  // set the default state

  // extract the phases from the attacks array and put them in a set (unique values only), and convert back to array
  const phases = ["Phases - All", ...new Set(attacks.map(attack => attack.phase))]

  // First we fetch the data from the backend once the application loads
  // Run side effects in the component, fetch makes an http get request to the /attacks site that the backend has loaded the attacks to
  // The response the converted from json and restored using setAttacks
  useEffect(() => {
    fetch("http://localhost:3001/attacks")
      .then(res => res.json())
      .then(data => setAttacks(data))
      .catch(err => console.error("failed to fetch attacks:", err))
  }, [])

  // Then we can filter by description search and selected phase (Bonus)
  const filteredAttacks = attacks.filter(attack =>
  {
    const matchesDescription = attack.description.toLowerCase().includes(search.toLowerCase())
    const matchesPhase = selectedPhase === "Phases - All" || attack.phase === selectedPhase

    return matchesDescription && matchesPhase
  })

  return (
  <div className="max-w-2xl mx-auto p-4 flex flex-col">
      <Header/>
      <SearchBar
        attack={search}
        setAttack={setSearch}
      />
      <select
        value={selectedPhase}
        onChange={e => setSelectedPhase(e.target.value)}
        className="flex-1 rounded-lg bg-zinc-300 px-4 py-3 my-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
          {phases.map(phase =>
          (
            <option key={phase} value={phase}>
              {phase}
            </option>
          ))}
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {filteredAttacks.map(attack => (  // This map() function creates an AttackCard (object) for every attack that has been filtered and presents it.
          <AttackCard
            key={attack.id}
            name={attack.name}
            description={attack.description}
            platforms={attack.platforms}
            detection={attack.detection}
            phase={attack.phase}
            allAttacks={attacks}
          />
        ))}
      </div>
  </div>
  )
}

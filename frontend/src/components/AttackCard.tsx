import { useState } from "react"

type Attack =
{
    id: string
    name: string
    description: string
    platforms: string[]
    detection: string
    phase: string
}

type AttackCardProps =  // This is the object for an attack card, the data it has is taken from the database
{
    name: string
    description: string
    platforms: string[]
    detection: string
    phase: string
    allAttacks: Attack[]
}

/*
    Function creates an AttackCard component for a given attack
    input: AttackCardProps object, it is extracted into variables at the function's defenition
    output: rendered UI card displaying the Attack card
*/

export function AttackCard({name, description, platforms, detection, phase, allAttacks}: AttackCardProps)
{
    const [expanded, setExpanded] = useState(false)

    // related attacks are identified by similar attack phases (Bonus)
    const relatedAttacks = allAttacks.filter(attack =>
    {
      return attack.phase === phase && attack.name !== name
    }).slice(0, 3)

    return (
        <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{name}</h2>

                <span className="bg-violet-200 px-2 py-1 rounded text-sm">
                    {phase}
                </span>
            </div>

            <p className="text-zinc-700">
                {expanded ? description : description.slice(0, 200) + "..."}
            </p>

            <button onClick={() => setExpanded(prev => !prev)}
                className="text-violet-600 hover:underline text-sm">
                {expanded ? "Show less" : "Show more"}
            </button>

            <div>
                <span className="font-bold">Platforms: </span>
                {/* create a strinng of all of the platforms connected witha  comma.*/}
                {platforms.join(", ")}
            </div>

            <div>
                <span className="font-bold">Detection: </span>
                {detection}
            </div>
            <div>
            <span className="font-bold">
                Related Techniques:
            </span>
            {/* display 3 related techniques by phase (realtedAttacks is sliced to the first 3)*/}
            <ul className="list-disc ml-5">
                {relatedAttacks.map(attack => 
                (
                    <li key={attack.id}>
                        {attack.name}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
type AttackCardProps =  // This is the object for an attack card, the data it has is taken from the database
{
    name: string
    description: string
    platforms: string[]
    detection: string
    phase: string
}

/*
    Function creates an AttackCard component for a given attack
    input: AttackCardProps object, it is extracted into variables at the function's defenition
    output: rendered UI card displaying the Attack card
*/

export function AttackCard({name, description, platforms, detection, phase}: AttackCardProps)
{
    return (
        <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{name}</h2>

                <span className="bg-violet-200 px-2 py-1 rounded text-sm">
                    {phase}
                </span>
            </div>

            <p className="text-zinc-700">
                {description}
            </p>

            <div>
                <span className="font-bold">Platforms: </span>
                {/* create a strinng of all of the platforms connected witha  comma.*/}
                {platforms.join(", ")}
            </div>

            <div>
                <span className="font-bold">Detection: </span>
                {detection}
            </div>
        </div>
    )
}
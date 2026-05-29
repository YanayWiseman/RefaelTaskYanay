type SearchBarProps =  // This is the search bar's properties object, it has the string searched and the method to set it
{
  attack: string
  setAttack: (value: string) => void
}


/*
    Function creates the search bar component
    input: SearchBarProps object to update whenever a user updates the search bar 
    output: rendered UI card displaying the SearchBar
*/

export function SearchBar( {attack, setAttack } : SearchBarProps)
{  
    return (
        <form className="flex gap-2 mt-6">
            <input
            value={attack}
            onChange={event => setAttack(event.target.value)}  // automatically change the attack everytime the user changes the searchBar
            className="flex-1 rounded-lg bg-zinc-300 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            placeholder="Search attacks by description..."
          />
        </form>)
}



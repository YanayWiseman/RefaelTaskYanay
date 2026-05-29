/*
    Function creates an Header component, it displays the title, date and description
    input: no input values
    output: rendered UI card displaying the Headers
*/

export function Header()
{  
  // To display the current date
  const current = new Date();
  const date = current.getDate() + "/" + (current.getMonth() + 1) + "/" + current.getFullYear();

  return (
    <header className="flex items-start justify-between">

      <div className="flex flex-col gap-2">

          <h1 className="text-3xl font-bold">Cyber Attack Explorer</h1>
          <span className="text-zinc-900 text-l px-1 font-bold">By Yanay Wiseman - Magshimim Cyber</span>

      </div>

      <div className="flex flex-col gap-1 items-end">
          <span className="text-3xl font-bold text-zinc-900">
            {date}
          </span>
      </div>

    </header>
    )
}
export function Header()
{  const current = new Date();
  const date = current.getDate() + "/" + (current.getMonth() + 1) + "/" + current.getFullYear();
  return <header className="flex items-start justify-between">
    <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">This is the Title</h1>
        <span className="text-zinc-900 text-l px-1 font-bold">By Yanay Wiseman</span>
    </div>
    <div className="flex flex-col gap-1 items-end">
        <span className="text-3xl font-bold text-zinc-900">{date}</span>
    </div>
  </header>
}
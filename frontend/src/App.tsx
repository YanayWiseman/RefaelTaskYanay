import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
export default function App()
{
  return (
  <div className="max-w-2xl mx-auto p-4 flex-col">
      <Header/>
      <SearchBar/>
  </div>
  )
}

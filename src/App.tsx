import { Suspense } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Players from "./components/Players/Players";
import type { PlayersType } from "./types";
import AvailablePlayers from "./components/Players/AvailablePlayers";


const plyersFetch = async(): Promise<PlayersType[]> => {
  const res = await fetch('/Data.json');
  const data = await res.json()
  return data;
}

const playersPromise = plyersFetch()

function App() {

  return (
    <>
      <Navbar />
      <Banner />

      <Suspense fallback={<h1 className="text-blue-400 font-bold">Loading....</h1>}>
        <Players playersPromise={playersPromise} />
      </Suspense>

      {/* <AvailablePlayers></AvailablePlayers> */}
    </>
  )
}

export default App

import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";
import { Place } from "./api/Place";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState<Place | null>(null);
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-4 bg-gray-100 border-r border-gray-200 shadow-lg">
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;

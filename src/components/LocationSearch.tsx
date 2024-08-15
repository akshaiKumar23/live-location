import { FormEvent, Fragment, useState } from "react";
import { Place } from "../api/Place";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({ onPlaceClick }: LocationSearchProps) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await search(term);
    console.log(data);
    setPlaces(data);
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="mb-6">
        <label
          htmlFor="term"
          className="text-lg font-semibold mb-2 block text-gray-700"
        >
          Search
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter location"
        />
      </form>

      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Found Locations
      </h1>
      <div className="grid grid-cols-[1fr_80px] gap-4 items-center">
        {places.map((place) => (
          <Fragment key={place.id}>
            <p className="text-base text-gray-600">{place.name}</p>
            <button
              className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              onClick={() => onPlaceClick(place)}
            >
              Go
            </button>
            <div className="border-b w-full col-span-2 mt-2 border-gray-300" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;

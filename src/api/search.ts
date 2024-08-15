import { Place } from './Place';
interface SearchResponse {

    features: {
        geometry: {
            coordinates: number[]
        }
        properties: {
            place_id: number;
            display_name: string;
        }
    }[]
}

export const search = async (term: string) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`)
    const data: SearchResponse = await res.json();
    const places: Place[] = data.features.map((feature) => {
        return {
            id: feature.properties.place_id,
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
            name: feature.properties.display_name,
        }
    })
    return places
}
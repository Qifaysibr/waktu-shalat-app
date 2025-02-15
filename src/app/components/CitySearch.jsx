"use client";
import { useState, useEffect, useMemo } from "react";
import cities from "@/cities";

export default function CitySearch({ onCitySelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.myquran.com/v2/sholat/kota/semua"
        );
        const data = await response.json();
        setCities(data.data);
        console.log("Cities : ", data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
      setLoading(false);
    };

    fetchCities();
  }, []);

  const filteredCities = useMemo(() => {
    return cities.filter((city) =>
      city.lokasi?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, cities]);
  console.log("filtered:", filteredCities);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Cari kota/kabupaten..."
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {console.log("Search term:", searchTerm)}
      {loading ? (
        <div className="text-center text-gray-500">Memuat daftar kota...</div>
      ) : (
        <div className="max-h-60 overflow-y-auto mt-2">
          {filteredCities.map((city) => (
            <div
              key={city.id}
              onChange={() => onCitySelect(city.id)}
              className="p-3 hover:bg-blue-50 cursor-pointer"
            >
              <span className="font-medium">{city.nama}</span>
              <span className="text-sm text-gray-500 ml-2">
                ({city.lokasi})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

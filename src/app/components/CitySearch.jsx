"use client";
import { useState, useEffect } from "react";

export default function CitySearch({ onCitySelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm.trim()) {
        const abortController = new AbortController();

        setLoading(true);
        fetch(
          `https://api.myquran.com/v2/sholat/kota/cari/${encodeURIComponent(
            searchTerm
          )}`,
          {
            signal: abortController.signal,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status && data.data) {
              setCities(data.data);
            } else {
              setCities([]);
            }
          })
          .catch((error) => {
            if (error.name !== "AbortError") {
              console.error("Error fetching cities:", error);
              setCities([]);
            }
          })
          .finally(() => setLoading(false));

        return () => abortController.abort();
      } else {
        setCities([]);
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Cari kota/kabupaten..."
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <div className="mt-2">Loading...</div>}

      {!loading && cities.length > 0 && (
        <div className="max-h-60 overflow-y-auto mt-2 border rounded-md">
          {cities.map((city) => (
            <div
              key={city.id}
              onClick={() => onCitySelect(city)}
              className="p-3 hover:bg-yellow-600  cursor-pointer border-b last:border-b-0 bg-yellow-800"
            >
              <span className="font-medium">{city.nama}</span>
              <span className="text-sm text-gray-100 ml-2 ">
                {city.lokasi}
              </span>
            </div>
          ))}
        </div>
      )}

      {!loading && searchTerm && cities.length === 0 && (
        <div className="mt-2 text-gray-500">Tidak ada kota/kabupaten yang cocok.</div>
      )}
    </div>
  );
}

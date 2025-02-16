"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import PrayerTimeCard from "./components/PrayerTimeCard";
import ErrorMessage from "./components/ErrorMessage";
import CitySearch from "./components/CitySearch";

// Komponen Utama
export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCityName, setSelectedCityName] = useState("");
  const [jadwalShalat, setJadwalShalat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  // Fetch jadwal shalat ketika kota dipilih
  useEffect(() => {
    if (!selectedCity) return;

    const abortController = new AbortController();

    const fetchJadwal = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.myquran.com/v2/sholat/jadwal/${selectedCity}/${today}`,
          { signal: abortController.signal }
        );

        if (!response.ok)
          throw new Error(`Gagal mengambil data: ${response.status}`);

        const data = await response.json();
        if (!data?.data?.jadwal) throw new Error("Format data tidak valid");

        setJadwalShalat(data.data.jadwal);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJadwal();
    return () => abortController.abort();
  }, [selectedCity, today]);


const handleCitySelect = (cityData) => {
  setSelectedCity(cityData.id);
  setSelectedCityName(cityData.lokasi);
  console.log(selectedCityName);
};
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Jadwal Shalat
        </h1>
         <CitySearch onCitySelect={handleCitySelect}/>

        {/* <CitySelector
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        /> */}

        <div className="bg-white rounded-lg p-6 shadow-md">
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}

          {jadwalShalat && !loading && !error && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {selectedCityName} -{" "}
                {new Date(today).toLocaleDateString("id-ID")}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(jadwalShalat).map(([key, value]) => {
                  if (["tanggal", "date"].includes(key)) return null;
                  return (
                    <PrayerTimeCard
                      key={key}
                      name={key.charAt(0).toUpperCase() + key.slice(1)}
                      time={value}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



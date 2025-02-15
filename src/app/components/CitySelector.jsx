import cities from '../../cities';


const CitySelector = ({ value, onChange }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Pilih Kota
      </label>
      <select
        value={value}
        onChange={onChange}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        {cities.map((city) => (
          <option key={city.code} value={city.code} className='text-black'>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );

  export default CitySelector
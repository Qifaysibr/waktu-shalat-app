const PrayerTimeCard = ({ name, time }) => (
    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-sm font-semibold text-blue-600">{name}</div>
      <div className="text-2xl font-bold text-gray-800">{time}</div>
    </div>
  );

  export default PrayerTimeCard;
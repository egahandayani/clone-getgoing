export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-400 rounded-lg p-6 text-white flex flex-col items-start">
      <div className="bg-white p-2 rounded-full mb-2 text-red-600 text-2xl">
        {icon}
      </div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}

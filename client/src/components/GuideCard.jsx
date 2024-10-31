export default function GuideCard({ name, location, image }) {
  return (
    <div className="flex flex-col w-full overflow-hidden transition-transform transform hover:scale-105">
      <a href="#" className="w-full">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-48 rounded-lg"
        />
      </a>
      <div className="mt-2 w-full text-left pl-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
}
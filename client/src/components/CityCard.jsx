export default function CityCard({ name, location, image }) {
    return (
      <div className="relative w-full max-w-[250px] overflow-hidden transition-transform transform hover:scale-105 rounded-xl mx-auto">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-80 rounded-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white rounded-b-xl">
          <h2 className="text-2xl font-bold text-white">{name}</h2>
          <p className="text-sm font-normal text-white">{location}</p>
        </div>
      </div>
    );
  }
  
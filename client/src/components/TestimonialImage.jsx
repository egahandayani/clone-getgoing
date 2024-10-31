// TestimonialImage.jsx
export default function TestimonialImage({ image, name, occupation }) {
  return (
    <div className="relative">
      <div className="relative shadow-lg transform rotate-0 hover:rotate-1 transition-transform">
        <img
          src={image}
          alt={name}
          className="w-[150px] h-[200px] object-cover rounded-md"
        />
        <div className="text-center mt-2">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{occupation}</p>
        </div>
      </div>
      <div className="absolute -top-4 -left-6 transform rotate-[-15deg] bg-gray-100 shadow-lg rounded-md">
        <img
          src={image}
          alt={name}
          className="w-[130px] h-[180px] object-cover rounded-md opacity-70"
        />
      </div>
    </div>
  );
}

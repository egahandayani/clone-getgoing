import {
  FaHeadset,
  FaUserFriends,
  FaBus,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  const listFeatures = [
    "Tentukan tanggal keberangkatan sesukamu",
    "Tidak ada kuota minimum, jadi pasti berangkat",
    "Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan",
    "Liburan jadi lebih exclusive untuk kamu dan keluarga",
  ];

  const detailedFeatures = [
    {
      icon: <FaHeadset />,
      title: "Konsultasi GRATIS",
      description: "Curhatin aja semuanya!",
    },
    {
      icon: <FaUserFriends />,
      title: "Local Guide",
      description: "Biar ada temen!",
    },
    {
      icon: <FaBus />,
      title: "Transportasi",
      description: "Bebas pilih transportasi apa",
    },
    {
      icon: <FaStar />,
      title: "Lengkap Pokoknya",
      description: "Hotel, Asuransi, Visa, Wifi dll",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between space-x-10 my-10 mx-auto px-4 max-w-7xl">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 font-sans pl-8">
        <h2 className="text-[rgb(204,0,0)] text-[40px] font-medium">
          PRIVATE TRIP
        </h2>
        <h3 className="text-[40px] font-bold">
          Berangkat{" "}
          <span className="text-[rgb(204,0,0)] font-bold">Kapan Saja</span>{" "}
          Semaumu
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-6">
          {listFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 text-[rgb(121,129,155)] text-[16px]"
            >
              <span className="text-red-600 mt-1">
                <FaCheck />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Card Component */}
      <div className="grid grid-cols-2 gap-4 p-8 rounded-tl-[40px] rounded-bl-[40px] bg-gradient-to-r from-red-500 to-orange-400">
        {detailedFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

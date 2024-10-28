import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Contoh gambar slide dan teks
const slides = [
  {
    id: 1,
    type: "image", // Slide pertama hanya menampilkan gambar
    img: "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11",
    alt: "Slide 1",
  },
  {
    id: 2,
    type: "custom", // Slide kedua menampilkan teks dan logo App Store & Play Store
    title: "Aplikasi GetGoing",
    subtitle: "Eksplor dan nikmati mudah liburan ke luar negeri dengan",
    appLinks: {
      appStore: "https://link_to_appstore.com", // Ganti dengan link yang sebenarnya
      playStore: "https://link_to_playstore.com", // Ganti dengan link yang sebenarnya
    },
  },
  {
    id: 3,
    type: "image",
    img: "https://via.placeholder.com/800x400?text=Slide+3",
    alt: "Slide 3",
  },
];

export default function Banner() {
  return (
    <div className="container mx-auto py-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {slide.type === "image" ? (
              <div className="w-full h-96 flex justify-center items-center">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="flex justify-between items-center h-96 px-6">
                {/* Bagian kiri: Teks custom */}
                <div className="w-1/2">
                  <h3 className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                    {slide.subtitle}
                  </h3>
                  <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-gray-600 mb-8">Dapat didownload di:</p>
                  <div className="flex space-x-4">
                    {/* Logo App Store */}
                    <a href={slide.appLinks.appStore} target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_badge.svg"
                        alt="Download on App Store"
                        className="h-12"
                      />
                    </a>
                    {/* Logo Play Store */}
                    <a href={slide.appLinks.playStore} target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get it on Google Play"
                        className="h-12"
                      />
                    </a>
                  </div>
                </div>

                {/* Bagian kanan: Panah navigasi */}
                <div className="w-1/2 flex justify-center">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11"
                    alt="Image for Slide"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

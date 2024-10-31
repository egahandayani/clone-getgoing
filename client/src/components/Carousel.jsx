import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const AUTOPLAY_SETTINGS = {
  delay: 3000,
  disableOnInteraction: false,
};

// Data hardcoded slides
const slides = [
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11",
    alt: "Slide 1",
    title: "Apa yang GetGoing Punya?",
    description: "Layanan yang tersedia untuk Anda",
    features: [
      {
        title: "Trip Planner",
        description: "Susun Rute Perjalananmu Sendiri",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        ),
      },
      {
        title: "Guide",
        description: "Tour Guide berbahasa Indonesia",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 12a4 4 0 110-8 4 4 0 010 8zm0 2c-3.326 0-6 2.48-6 5.5 0 .28.22.5.5.5h11a.5.5 0 00.5-.5c0-3.02-2.674-5.5-6-5.5z" />
          </svg>
        ),
      },
      {
        title: "Info",
        description: "Info penting di luar negeri",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 10.998h-6.586l2.293-2.293-1.414-1.414L12 12.172l-3.293-3.293-1.414 1.414 2.293 2.293H3v2h6.586l-2.293 2.293 1.414 1.414L12 13.828l3.293 3.293 1.414-1.414-2.293-2.293H21v-2z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca",
    alt: "Slide 2",
    title: "Aplikasi GetGoing",
    description: "Eksplor dan nikmati mudah liburan ke luar negeri dengan",
    appLinks: {
      appStore: "https://apps.apple.com/us/app/getgoing/id1602015694",
      playStore:
        "https://play.google.com/store/apps/details?id=com.getgoing.app",
    },
  },
];

// Component for Feature Item
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4 text-center p-4 rounded-lg hover:scale-105 transform transition-transform duration-300">
    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
      {icon}
    </div>
    <div className="text-left">
      <h3 className="font-semibold text-gray-800 text-[20px] text-lg mb-1">
        {title}
      </h3>
      <p className="text-[#212529] font-bold text-[12px] leading-[12px] bg-gray-100 px-3 py-1 rounded-full">
        {description}
      </p>
    </div>
  </div>
);

export default function Carousel() {
  return (
    <div className="container mx-auto py-8">
      <Swiper
        spaceBetween={30}
        loop
        autoplay={AUTOPLAY_SETTINGS}
        navigation
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-between items-center h-96 px-6">
              <div className="w-1/2 pr-6 flex justify-center">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-11/12 h-96 object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="w-1/2 pl-6 text-center">
                {slide.id === 1 ? (
                  <>
                    <h2 className="text-gray-400 text-[16px] text-sm uppercase tracking-[.3em] mb-4">
                      {slide.title}
                    </h2>
                    <div className="space-y-6">
                      {slide.features.map((feature, index) => (
                        <FeatureItem
                          key={index}
                          icon={feature.icon}
                          title={feature.title}
                          description={feature.description}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-[16px] font-light text-[#868e96] tracking-[.3em] mb-2 uppercase">
                      {slide.description}
                    </h3>
                    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-[16px] font-light text-[#868e96] tracking-[.3em] mb-8 uppercase">
                      Dapat didownload di:
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={slide.appLinks.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                          alt="Download on App Store"
                          className="h-12"
                        />
                      </a>
                      <a
                        href={slide.appLinks.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                          alt="Get it on Google Play"
                          className="h-12"
                        />
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

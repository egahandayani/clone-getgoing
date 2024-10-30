import GuideCard from "../components/GuideCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Carousel from "../components/Carousel";
import QuoteDisplay from "../components/QuoteDisplay";
import FeatureSection from "../components/FeatureSection";
import PopularCities from "../components/PopularCities";

export default function Homepage() {
  const cardData = [
    {
      name: "Nuel",
      location: "Paris, Prancis",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2F1724200976015?alt=media&token=50786cb5-41e5-4353-96ac-c8558febc60c",
    },
    {
      name: "Agus",
      location: "Roma, Italia",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f",
    },
    {
      name: "Stella",
      location: "Zurich, Swiss",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FStella%20Runia?alt=media&token=1b69c0d0-80d3-4947-8788-a421e2f00774",
    },
    {
      name: "Januar",
      location: "Munich, Jerman",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2FPHOTO-2018-09-23-16-32-02.jpg?alt=media&token=4ea14f69-6ea5-4c9b-83ac-2e8b3ca107d6",
    },
    {
      name: "Gio",
      location: "Amsterdam, Belanda",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FIMG_1904.jpeg?alt=media&token=ee183e63-aa7a-452d-99dd-840c885486f6",
    },
    {
      name: "Nuel",
      location: "Paris, Prancis",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2F1724200976015?alt=media&token=50786cb5-41e5-4353-96ac-c8558febc60c",
    },
    {
      name: "Agus",
      location: "Roma, Italia",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f",
    },
    {
      name: "Stella",
      location: "Zurich, Swiss",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FStella%20Runia?alt=media&token=1b69c0d0-80d3-4947-8788-a421e2f00774",
    },
    {
      name: "Januar",
      location: "Munich, Jerman",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/avatar%2FPHOTO-2018-09-23-16-32-02.jpg?alt=media&token=4ea14f69-6ea5-4c9b-83ac-2e8b3ca107d6",
    },
    {
      name: "Gio",
      location: "Amsterdam, Belanda",
      image:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FIMG_1904.jpeg?alt=media&token=ee183e63-aa7a-452d-99dd-840c885486f6",
    },
  ];

  return (
    <div>
      <Carousel />
      <div className="flex items-center mt-2 mb-6 px-14">
        <h1 className="text-[32px] leading-[42px] font-bold font-poppins">
          Sedang <span style={{ color: "rgb(204, 0, 0)" }}>Populer</span>
        </h1>
      </div>

      {/* Swiper Component */}
      <div className="px-16">
        {" "}
        <Swiper
          modules={[Pagination]}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="swiper-container"
        >
          {cardData.map((data, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <GuideCard
                name={data.name}
                location={data.location}
                image={data.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Quote Display Component */}
      <QuoteDisplay
        text="Better to SEE something once than hear about it A THOUSAND TIMES"
        highlight1="SEE"
        highlight2="A THOUSAND TIMES"
        author="Asian Proverb"
      />

      {/* Feature Section Component */}
      <div className="mt-12">
        <FeatureSection />
      </div>

      {/* Popular Cities Component */}
      <div className="mt-12">
        <PopularCities />
      </div>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .swiper-container {
          padding-bottom: 60px;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 10px;
          text-align: center;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background-color: gray;
          opacity: 0.6;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background-color: rgb(204, 0, 0);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

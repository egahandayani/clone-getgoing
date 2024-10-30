// components/PopularCities.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CityCard from './CityCard';

export default function PopularCities() {
    const cities = [
        { name: "Paris", location: "Prancis", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61" },
        { name: "Bern", location: "Swiss", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea" },
        { name: "Amsterdam", location: "Belanda", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae" },
        { name: "London", location: "Inggris", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2" },
        { name: "Roma", location: "Italia", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7" },
        { name: "Paris", location: "Prancis", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61" },
        { name: "Bern", location: "Swiss", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea" },
        { name: "Amsterdam", location: "Belanda", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae" },
        { name: "London", location: "Inggris", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2" },
        { name: "Roma", location: "Italia", image: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7" }
    ];

    return (
        <div className="container mx-auto mt-8 px-4 lg:px-8">
            <h1 className="text-4xl font-bold mb-6 ml-4 text-gray-800">
                Kota <span className="text-red-600">Populer</span>
            </h1>
            <Swiper
                modules={[Pagination]}
                slidesPerView={5}
                spaceBetween={10}
                pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 5 },
                }}
                className="pb-10"
            >
                {cities.map((city, index) => (
                    <SwiperSlide key={index}>
                        <CityCard
                            name={city.name}
                            location={city.location}
                            image={city.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center mt-6 swiper-pagination-custom" />
        </div>
    );
}

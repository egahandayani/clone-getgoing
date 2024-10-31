import { useState } from "react";
import TestimonialContent from "./TestimonialContent";

const testimonials = [
  {
    heading: "Keluar negeri pertama kali tanpa rasa khawatir",
    content:
      "GetGoing bikin liburan keluar negeri tanpa rasa khawatir dan bener-bener terasa kayak cuma punya kami berdua. Apalagi ada aplikasinya juga yang bisa dipakai untuk mengeksplor kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya",
    name: "Herlika & Johan",
    occupation: "ENTREPRENEUR",
    image:
      "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F171135077820230216_150747-min.jpg?alt=media&token=78f902bb-6967-457e-92cd-1877248b4460",
  },
  {
    heading: "Liburan seperti yang aku mau",
    content:
      "Best banget segalanya mau aku recokin kapanpun (bahkan tengah malampun ready hahaha) Bener2 seperti yg ku mau, yakni sistem 'partner trip' bukan 'jasa tour'. Temen2 yg di kirim ke aku buat nemenin jg baik2 n sabar2.. Thankyouuu banyak yah mbaa See you aku recokin di negara2 lain ya mbaaa.",
    name: "Hilda",
    occupation: "ENTREPRENEUR",
    image:
      "https://ik.imagekit.io/getgoing/tr:w-500,h-500/v0/b/getgoing-prod.appspot.com/o/CMS%2F1711350675Image_20221216_075245_899%20(1).jpeg?alt=media&token=05ac57ca-86f1-424d-a4f7-8d260f64e9f9",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-7xl mx-auto">
      <h1 className="text-[32px] font-bold text-[rgb(0,0,0)] mb-2">
        Kata <span className="text-[rgb(204,0,0)]">Mereka</span>
      </h1>
      <p className="text-[16px] font-medium text-[rgb(135,145,169)] mb-20">
        Cerita dari mereka yang telah menjelajahi Eropa bersama kami
      </p>

      <div className="flex items-start w-full justify-between space-x-12">
        {/* Testimonial Content */}
        <div className="flex-1 max-w-4xl">
          <TestimonialContent testimonial={testimonials[currentIndex]} />
        </div>
        <div className="relative w-[300px]">
          <img
            src={
              testimonials[
                (currentIndex - 1 + testimonials.length) % testimonials.length
              ].image
            }
            alt="Previous"
            className="absolute left-[-40px] top-10 w-32 h-40 object-cover rounded-lg shadow-lg transform rotate-[-5deg] opacity-60"
          />
          <div className="relative z-10">
            <img
              src={testimonials[currentIndex].image}
              alt="Current"
              className="w-52 h-64 object-cover rounded-lg shadow-xl border-4 border-white"
            />
            <div className="text-center mt-2">
              <h3 className="font-bold text-lg">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].occupation}
              </p>
            </div>
          </div>
          <img
            src={testimonials[(currentIndex + 1) % testimonials.length].image}
            alt="Next"
            className="absolute right-[-40px] top-10 w-32 h-40 object-cover rounded-lg shadow-lg transform rotate-[5deg] opacity-60"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex space-x-4 self-start">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-red-600 transition-colors duration-200"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-red-600 transition-colors duration-200"
        >
          →
        </button>
      </div>
    </div>
  );
}

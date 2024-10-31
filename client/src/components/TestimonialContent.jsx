// TestimonialContent.jsx
export default function TestimonialContent({ testimonial }) {
  return (
    <div className="relative pr-12 max-w-[600px]">
      <div className="absolute top-[-20px] left-[-30px] text-gray-200 text-[150px] font-bold opacity-10 -z-10">
        “
      </div>
      <h2 className="text-[24px] font-bold text-[rgb(33,37,41)] mb-2">
        {testimonial.heading}
      </h2>
      <p className="text-[14px] font-medium text-[rgb(135,145,169)] leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  );
}

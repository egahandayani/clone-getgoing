export default function QuoteDisplay({ text, highlight1, highlight2, author }) {
    return (
      <div className="text-center my-10">
        <p className="text-[32px] font-poppins font-bold text-gray-800">
          <span>“</span>
          {text.split(new RegExp(`(${highlight1}|${highlight2})`, 'g')).map((word, index) => (
            <span
              key={index}
              className={
                word === highlight1
                  ? "font-bold"
                  : word === highlight2
                  ? "font-bold"
                  : ""
              }
              style={{
                color: word === highlight1 ? "rgb(204, 0, 0)" : word === highlight2 ? "rgb(65, 131, 209)" : ""
              }}
            >
              {word}{" "}
            </span>
          ))}
          <span>”</span>
        </p>
        <p className="mt-2 text-[24px] font-poppins font-bold text-gray-800">– {author}</p>
      </div>
    );
  }
  
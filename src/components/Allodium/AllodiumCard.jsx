
const AllodiumCard = ({src, title, description, isCommingSoon, color}) => {
  return (
    <div className="relative size-full">
      <video className="absolute left-0 top-0 size-full object-cover object-center"
        src={src}
        loop
        mutes
        autoPlay
      />
      
      <div className="relative z-10 lex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className={`bento-title special-font ${color}`}>{title}</h1>

          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">
              {description}
            </p>
          )} 
        </div>
      </div>
    </div>
  );
};

export default AllodiumCard;
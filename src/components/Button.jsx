
const Button = ({title, id, rightIcon, leftIcon, containerClass, onClick}) => {
  return (
    <button id={id} onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden
        rounded-full bg-violet-50 px-6 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
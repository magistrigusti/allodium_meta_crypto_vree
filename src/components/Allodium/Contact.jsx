import ImageClipBox from './ImageClipBox';
import Button from '../Button';

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-60 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox clipClass="contact-clip-path w-80"
            
            src="allodium/hero-mag.jpg"
          />

          <ImageClipBox clipClass="contact-clip-path-3 lg:translate-y-1 translate-y-60 w-80"
            src="allodium/hero-elf.png"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto 
          md:right-10 lg:top-20 lg:w-80" 
        >
          <ImageClipBox clipClass="absolute md:scale-125" 
            src="allodium/hero-ork.png"
          />

          <ImageClipBox clipClass="sword-man-clip-path md:scale-125" 
            src="allodium/hero-ork.png"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[30px] uppercase">Join Allodium</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            <b>Let's bild the</b> <br/> <b>new ere of</b> <br /> <b>gaming together</b>
          </p>

          <Button containerClass="mt-10 cursor-pointer"
            title="contact us" 
            onClick={() => window.open('https://t.me/AllodiumGame', '_blank')}
          />
        </div>
      </div> 
    </div>
  );
};

export default Contact;
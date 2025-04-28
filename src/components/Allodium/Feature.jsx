import { TiLocationArrowOutline } from "react-icons/ti";
import AllodiumCard from "./AllodiumCard";
import AllodiumTitle from './AllodiumTitle';

const Feature = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Intro the MetaGame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overplay experience 
            on yor world
          </p>
        </div>

        <AllodiumTitle className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]"
        >
          <AllodiumCard src="videos/feature-1.mp4"
            title={<><b>a l l o d i u m</b></>}
            color="text-orange-300"
            description="a cross-platform metagame app, turning yor activities
              across Web2 and Web3 games intro a rewarding adventure." 
            isComingSoon
          />
        </AllodiumTitle>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <AllodiumTitle className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <AllodiumCard 
              src="videos/feature-2.mp4 "
              title={<><b>d om i u m</b></>}
              color="text-blue-700"
              description="An anime and gaming-inspired NFT collection - 
                the IP primed for expansion."
            />
          </AllodiumTitle>

          <AllodiumTitle className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <AllodiumCard 
              src="videos/feature-3.mp4 "
              title={<><b>p o r t a l</b></>}     
              color="text-violet-900"
              description="A gamified social hub, adding a new dimension of play 
                to social interaction for Web3 communities."
            />
          </AllodiumTitle>

          <AllodiumTitle className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <AllodiumCard 
              src="videos/feature-4.mp4"
              title={<><b>a l p h a</b></>}
              color="text-blue-300"
            />
          </AllodiumTitle>

          <AllodiumTitle className="bento-title_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>

              <TiLocationArrowOutline className="m-5 scale-[5] self-end" />
            </div>
          </AllodiumTitle>

          <AllodiumTitle className="bento-title_2">
            <video className="size-full object-cover object-center"
              src="videos/feature-5.mp4"
              autoPlay
              muted
              loop
            />
          </AllodiumTitle>
        </div>
      </div>
    </section>
  );
};

export default Feature;
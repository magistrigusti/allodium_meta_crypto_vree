import AllodiumCard from "./AllodiumCard";


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

        <div className="border-hsla relative mb-7 h-96 w-full overflowh-hidden 
          rounded-md md:h-[65vh]"
        >
          <AllodiumCard src="videos/feature-1.mp4"
            title={<><b>a l l o d i u m</b></>}
            color="text-orange-300"
            description="a cross-platform metagame app, turning yor activities
              across Web2 and Web3 games intro a rewarding adventure." 
            isComingSoon
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-title_1 row-span-1 md;col-span-1 md:row-span-2">
            <AllodiumCard 
              src="videos/feature-2.mp4 "
              title={<><b>d o m i n u m</b></>}
              color="text-blue-700"
              description="An anime and gaming-inspired NFT collection - 
                the IP primed for expansion."
            />
          </div>

          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <AllodiumCard 
              src="videos/feature-3.mp4 "
              title={<><b>p o r t a l</b></>}     
              color="text-violet-900"
              description="A gamified social hub, adding a new dimension of play 
                to social interaction for Web3 communities."
            />
          </div>

          <
        </div>
      </div>
    </section>
  );
};

export default Feature;
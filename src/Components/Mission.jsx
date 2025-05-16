import {Overlay} from './Overlay'

export const Mission = () => {
  const paragraphStyle = "text-gray-800/60 leading-8 text-md sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-2xl  2xl:w-200";
  return (
    <>
      <div className="relative bg-[var(--warm-sand)]   justify-items-center 2xl:h-screen">
        <div className=" relative z-1 w-screen px-10 py-7 tracking-wider h-full text-justify md:w-6/7 ">
          <div className="my-10 ">
            <span className="text-[var(--soft-purple)] text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-3xl">
              Our Story
            </span>
          </div>
          <p className={paragraphStyle}>
            Love, Pets was founded in 2010 by passionate animal lovers, Bonney and
            Clyde, who met while volunteering at a local animal shelter. After
            witnessing firsthand the joy that pets bring to people's lives, they
            decided to create a company that would help pet owners give their
            furry friends the best possible care. Today, Love, Pets is a
            thriving online community and store, dedicated to providing
            top-notch products, expert advice, and heartfelt support to pet
            owners everywhere.
          </p>
          <div className="my-10">
            <span className="text-[var(--mint-green)] text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-3xl">
              Our Mission
            </span>
          </div> 
          <p className={paragraphStyle}>
            At Love, Pets, our mission is to enhance the lives of pets and their
            humans by delivering high-quality products, expert advice, and a
            community that shares our passion for animal welfare and
            companionship. We believe that every pet deserves love, care, and
            attention, and we're committed to helping pet owners provide just
            that.
          </p>
        </div>
         <Overlay />
      </div>
    </>
  );
};

import {Overlay} from './Overlay'

export const Mission = () => {
  return (
    <>
      <div className=" relative bg-[var(--warm-sand)] size-full  p-10 tracking-wider">
        <div className=" relative z-1 size-screen">
          <div className="my-3">
            <span className="text-[var(--soft-purple)] text-4xl  font-bold">
              Our Story
            </span>
          </div>
          <p className='text-gray-800/60'>
            Love, Pets was founded in 2010 by passionate animal lovers, Bonney and
            Clyde, who met while volunteering at a local animal shelter. After
            witnessing firsthand the joy that pets bring to people's lives, they
            decided to create a company that would help pet owners give their
            furry friends the best possible care. Today, Love, Pets is a
            thriving online community and store, dedicated to providing
            top-notch products, expert advice, and heartfelt support to pet
            owners everywhere.
          </p>
          <div className="my-3">
            <span className="text-[var(--mint-green)] text-4xl font-bold">
              Our Mission
            </span>
          </div>
          <p className='text-gray-800/60'>
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

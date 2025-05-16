import Card1Img from '/src/assets/Grocery.jpg';
import Card2Img from '/src/assets/Puppy Groom.jpg';
import Card3Img from '/src/assets/Cat Playing.jpg';


export const useCardContGen = () => {
  const imgArray = [
    { imgSrc: Card1Img, alt: "Grocery 1", caption: "Playful but Safe: Our cat toys are designed with your kitty's safety in mind. Non-toxic materials and durable construction ensure hours of fun without worry." },
    { imgSrc: Card2Img, alt: "Puppy Groom", caption: "Gentle grooming for a happy, healthy coat. Our grooming tools are designed for comfort and care, making bath time a breeze for you and your furry friend." },
    { imgSrc: Card3Img, alt: "Cat Playing", caption: "Playtime Made Easy: Our pet toys are designed for convenience and fun. Durable, easy to clean, and always entertaining, so you can focus on bonding with your best friend!" },
  ];
  return imgArray;
};

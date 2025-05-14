import pet1 from '/src/assets/Cat with chick.jpg';
import pet2 from '/src/assets/Cat Playing.jpg';
import pet3 from '/src/assets/Puppy Groom.jpg';
import { useState, useEffect } from 'react';


export const useSliderImages = () => {
 return  [pet1, pet2, pet3]
}
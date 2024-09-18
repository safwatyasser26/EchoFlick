'use client';

import {useState, useRef, useEffect} from 'react';


    
import {motion} from 'framer-motion';
const Carousel = ({data}) => {

  console.log(data);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  
  useEffect(() => {

    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  
  return (   
    <motion.div ref={carouselRef} className=" carousel overflow-hidden cursor-grab" whileTap={{cursor: 'grabbing'}}>
    <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="w-full inner-carousel flex" >
      {data.map((item) => (
        <motion.div className="card w-1/6 m-5" style={{flex: '1 0 auto'}} key={item.id}>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
        </motion.div>
      ))}
    </motion.div>
    </motion.div>
  )
}

export default Carousel
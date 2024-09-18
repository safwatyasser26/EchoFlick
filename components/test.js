import {useState, useEffect, useRef} from 'react'
import {motion} from 'framer-motion';
import images from './images';
import './App.css';
const App2 = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  
  useEffect(() => {

    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={carouselRef} className="carousel">
      <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="inner-carousel">
        {images.map(img => (
          <motion.div className='item'>
            <img src={img} width={240} height={400} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
'use client';
import Slider from 'react-slick';
import Link from 'next/link';

const Carousel2 = ({data, type}) => {
  
    

    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
    };
    
    console.log(data)




    
  
  
    
  return (
    <div className=' m-5'>
    <Slider {...setting} className=''>
      {data.map((item) => (
        <Link href="#" className=''>
        <div key={item.id} className="text-center m-5 p-2  flex flex-col items-between transition-transform duration-300 ease-in-out transform hover:scale-110">
          <img src={item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} className='w-full h-70' alt="hello" width={240} height={400}/>
          {<span>{item.title || item.name} ({item.release_date?.substring(0, 4) || item.first_air_date?.substring(0,4)}) </span> }
        </div>
        </Link>
        
      ))}
    </Slider>
    </div>
  )
}

export default Carousel2


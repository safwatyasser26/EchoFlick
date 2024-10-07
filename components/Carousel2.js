'use client';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';

const Carousel2 = ({data, type}) => {
  
    

    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    
    console.log(data)
    




    
  
  
    
  return (
    <div className='m-5 p-2'>
    <Slider {...setting} className=''>
      {data.map((item) => (
        <Link href={`/${type}/${item.id}`} className='' key={`${item.id}`}>
        <div key={item.id} className="m-4 transition-transform duration-300 ease-in-out transform hover:scale-110 relative">
          <Image src={item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}` : null} className='' alt="no Image" width={500} height={500} />
          {/* {<span>{item.title || item.name} ({item.release_date?.substring(0, 4) || item.first_air_date?.substring(0,4)}) </span> } */}
          <h2 className='text-xl font-semibold p-2 text-center bg-gray-800/60 absolute bottom-0 w-full'>{item.title || item.name}</h2>
          <span className="bg-gray-800/50 absolute top-0 right-0 font-bold text-xl p-1">{item.release_date?.substring(0,4) || item.first_air_date?.substring(0,4)}</span>
            
        </div>
        </Link>
        
      ))}
    </Slider>
    </div>
  )
}

export default Carousel2


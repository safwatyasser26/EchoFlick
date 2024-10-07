'use client';
import {usePathname} from 'next/navigation';
import { useEffect, useState } from 'react';
import Info from '@components/Info';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjM2MjVjOGEzNWY0Mzk5MTZiZTQzODdlM2RmNDA0NiIsIm5iZiI6MTcyNjMyNzE4NS41NDM1MTksInN1YiI6IjY1MDJmY2Y5MWJmMjY2MDBhYzc1ZTg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4oprD_5L4SHXfDMLnvcMJ92eHGM-Ozjgn6xuazI40Ao'
  }
};

const page = () => {
    const pathname = usePathname();
    const [movieId, setMovieId] = useState(null);
    const [item, setItem] = useState(null);
    
    useEffect(() => {
      const id = pathname.split('/')[2];
      setMovieId(id);
      
      if (id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
          .then(response => response.json())
          .then(data => {
            setItem(data);
          })
          .catch(err => console.error(err));
      }
    }, [pathname]);

    const backgroundImage = item?.backdrop_path 
      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
      : '';

    console.log(item);
    return (
      <div>
        <div 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className='fixed top-0 left-0 right-0 w-full h-full -z-10'
        >
          
        </div>
        <div>
          {item && <Info item={item} />}
        </div>
      </div>
    );
}

export default page
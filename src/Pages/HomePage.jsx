import { useEffect } from 'react'
import { GifState } from '../Context/gif-context'
import Gif from '../Component/Gif';
import FilterGif from '../Component/FilterGif';

const HomePage = () => {
  const {gf, gifs, setGifs, filter}= GifState();

  const fetchTrendingGifs = async ()=>{
    const {data} = await gf.trending({
      limit: 20,
      type: filter,
      rating:'g'
    });

    setGifs(data)
  }
  useEffect(()=>{
    fetchTrendingGifs();
  },[filter])
  return (
    <div>
     <h1 
     className='font-bold text-3xl text-center gradient py-4 font-mono mt-2 w-full'>
      MOST IMPORTANT TIME TO CHEER UP WITH YOUR LOVED ONES</h1>

      <FilterGif showTrending/>

      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2'>
        {gifs.map((gif)=>{
          return <Gif gif={gif} key={gif?.title}/>
        })}
      </div>
    </div>
  )
}

export default HomePage

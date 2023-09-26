import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';


const CardList = ({apiPath}) => {

  const [page, setPage] = useState(1);
  const { data:parsedData, totalPages} = useFetch(apiPath, "", page, );
  const location = useLocation();

  useEffect(() => {
    setPage(1)
  }, [location.pathname])

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };



  return (
    <main className='h-full bg-white dark:bg-slate-800'> 
      <section className='py-5 mx-auto'>
        <div className='flex flex-wrap justify-center p-4 gap-6'>
        {parsedData.map((news) => {
          return <CardItem key={news.publishedAt} news={news}/>
        })}
        </div>
        <div className='flex items-center justify-evenly py-10'>
        <button onClick={handlePrev} disabled={page === 1} type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Previous</button>
        <span className="text-lg font-semibold mx-4">
            Page {page} of {totalPages}
          </span>
        <button onClick={handleNext} disabled={page === totalPages} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
        </div>
        </section>
    </main>
  )
}

export default CardList

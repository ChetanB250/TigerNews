import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CardItem from './CardItem';





function Search({apiPath}) {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");


    const { data:parsedData } = useFetch(apiPath, queryTerm);

    useEffect(()=>{
        document.title = `Search Results for ${queryTerm}`
      });
    

  return (
      <main className='bg-white dark:bg-slate-800'>
        <section className='flex flex-wrap justify-start px-12 py-5'>
            <p className='text-3xl text-gray-700 dark:text-white'>{parsedData.length === 0 ? `No-Result Found for "${queryTerm}"`: `Results for "${queryTerm}"` }</p>
        </section>
        <section className="py-8 mx-auto">
          <div className="flex flex-wrap justify-center p-4 gap-6">
            {parsedData.map((news) => {
              return <CardItem key={news.publishedAt} news={news} />;
            })}
          </div>
        </section>
      </main>
  );
}

export default Search;

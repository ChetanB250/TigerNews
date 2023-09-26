import { useEffect, useState } from 'react'

const useFetch = (apiPath, queryTerm="", page = 1, pageSize=9) => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${apiPath}&q=${queryTerm}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${pageSize}`;
    
    useEffect(()=> {
        async function fetchNews() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.articles);
            setTotalPages(Math.ceil(json.totalResults / pageSize));
        }
        fetchNews();
    }, [url, pageSize]);


  return { data, totalPages }
}

export default useFetch

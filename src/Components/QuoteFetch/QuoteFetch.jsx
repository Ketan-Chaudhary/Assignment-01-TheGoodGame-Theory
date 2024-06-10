import React, { useEffect } from 'react'
import axios from 'axios'

const QuoteFetch = () => {
    const fetchQuote =async ()=>{
        try {
            const res= await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
            console.log(res.data);
        } catch (error) {
            console.log('Error occured :' ,error);
        }
    }
    useEffect(()=>{
        fetchQuote();
    },[])
  return (
    <div>QuoteFetch</div>
  )
}

export default QuoteFetch
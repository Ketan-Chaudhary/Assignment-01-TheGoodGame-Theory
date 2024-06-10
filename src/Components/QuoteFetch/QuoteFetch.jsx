import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardQuote from '../Card/CardQuote';



const QuoteFetch = ({savedQuotes, onSaveQuote}) => {
    const [quote, setQuote]= useState(null);
    
    const fetchQuote =async ()=>{
        try {
            const res= await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
            console.log(res.data);
            setQuote(res.data[0])
        } catch (error) {
            console.log('Error occured :' ,error);
        }
    }
    useEffect(()=>{
        fetchQuote();
    },[])
  return (
    <section className='flex justify-center p-5'>
        <div className='flex flex-col gap-5 ' >
        <button onClick={fetchQuote} className='btn btn-warning btn-square w-full cursor-pointer '>Get new Quotes</button>
        { quote && (<CardQuote quote={quote} onSave={()=>onSaveQuote(quote)} />) }
        </div>
    </section>
  )
}

export default QuoteFetch


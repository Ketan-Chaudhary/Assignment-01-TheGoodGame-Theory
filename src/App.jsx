import React, { useEffect, useState } from "react";
import QuoteFetch from "./Components/QuoteFetch/QuoteFetch";
import QuoteList from "./Components/QuoteList/QuoteList";
import CardStorage from "./Components/CardStorage/CardStorage";
import toast, { Toaster } from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [savedQuotes, setSavedQuotes] = useState(new Set());
  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
    setSavedQuotes(new Set(storedQuotes));
  }, []);
  const handleSave = (quote) => {
    if (!savedQuotes.has(quote)) {
      const newQuotes = new Set(savedQuotes);
      newQuotes.add(quote);
      setSavedQuotes(newQuotes);

      localStorage.setItem("savedQuotes", JSON.stringify([...newQuotes]));
      toast.success('Successfully Saved!');
      // alert("saved successfully");
    } else {
      toast.error('Already Saved')
      // alert("already saved");
     
    }
  };
  const handleDeleteQuotes=(quote)=>{
    const newQuotes = new Set(savedQuotes)
      newQuotes.delete(quote)
      setSavedQuotes(newQuotes)
    
      localStorage.setItem('savedQuotes',JSON.stringify([...newQuotes]))
      toast.success('Successfully Deleted!');
      // alert("delete successfully")
  }
  return (
    <div>
      <div className="flex justify-end pt-4 pr-6">

   <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>My Cart</button>
      </div>
  
      <QuoteFetch savedQuotes={savedQuotes} onSaveQuote={handleSave} />
      <QuoteList quotes={[...savedQuotes]} onDeleteQuotes={handleDeleteQuotes} />
    </div>
  );
};

export default App;

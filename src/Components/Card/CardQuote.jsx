import React from "react";

const CardQuote = ({quote , onSave}) => {
  
  return (
    <section>
      <div className="card w-96 max-h-88 bg-base-100  shadow-2xl outline-dotted">
        <div className="card-body">
          <h2 className="card-title justify-center">Quotes</h2>
          <p className="my-8 h-[10rem] w-full shadow-md"> {quote} </p>
          <div className="card-actions justify-center">
             <button className="btn btn-primary"  onClick={onSave} >Save</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardQuote;

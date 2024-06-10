import React from "react";
import toast from "react-hot-toast";

const CardStorage = ({ quotes, onDeleteQuotes }) => {
    
  return (
    <section>
      <dialog id="my_modal_3" className="modal w-full">
        <div className="modal-box max-w-6xl modal-top">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="grid grid-col grid-cols-3 gap-3 w-full">
              {quotes.length === 0 ? (
                <p>No saved quotes yet.</p>
              ) : (
                quotes.map((quote, index) => (
                  <div
                    key={index}
                    className="card w-80 bg-base-100 m-2 shadow-2xl"
                  >
                    <div className="card-body">
                      <p className="my-4 px-2 min-h-[7rem] w-full shadow-md">
                       {index+1} . {quote}
                      </p>
                      <div className="card-actions justify-center">
                        <button
                          onClick={() =>{ onDeleteQuotes(quote);}}
                          className="btn btn-sm btn-error"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default CardStorage;

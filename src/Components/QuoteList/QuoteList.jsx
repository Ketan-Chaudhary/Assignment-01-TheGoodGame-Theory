import React from "react";
import CardStorage from "../CardStorage/CardStorage";

const QuoteList = ({ quotes, onDeleteQuotes }) => {
  const index = 1;
  return (
    <section>
      <div className="grid grid-flow-col gap-4 w-[12rem]">
        {quotes.length === 0 ? (
          <CardStorage quotes={[]} />
        ) : (
          quotes.map((quote, index) => (
            <CardStorage
              quotes={quotes}
              onDeleteQuotes={ onDeleteQuotes}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default QuoteList;

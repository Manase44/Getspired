import Header from "../../components/Header/Header";
import "./Home.css";
import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const [quotesArray, setQuotesArray] = useState(null);
  const [paraMessage, setParaMessage] = useState(
    "Your Quote will be displayed here"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchAdvice = () => {
    fetch(``)
    .then(res => {
      if (res.ok) {
        returnres.json()
      }
    })
    .then(data => {
      setQuotesArray(data)
    })
    .catch(error => {
      console.log(error)
    })
  };

  const handleRandomAdvice = () => {
    setIsLoading(true);
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("The resourse is not available");
        }
      })
      .then((data) => {
        // setAdvice(data.slip.advice);
        setParaMessage(data.slip.advice);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(`Something went wrong`);
        console.log(err);
        setIsLoading(false)
        setParaMessage("We can't get the quote, something went wrong!")
      });
  };
  console.log(paraMessage)
  
  return (
    <div className="Home-wrapper">
      <Header />
      <div className="header-buttons">
        <button onClick={handleRandomAdvice} disabled={isLoading} >Get random quotes</button>
        <button onClick={handleSearchAdvice}>Get x quotes</button>
      </div>
      <div className="quote-display">
      <p>
          {isLoading ? (
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#028494"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ): paraMessage}
        </p>
      </div>
    </div>
  );
};

export default Home;

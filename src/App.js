
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTwitter } from 'react-icons/bs'
import { SiTumblr } from 'react-icons/si'
import { FaQuoteLeft } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';

const QUOTES = [
  {
    text: "Website without visitors is like a ship lost in the horizon.",
    author: "Dr. Christopher Dayagdag"
  },
  {
    text: "SEO is an investment just like a tree that needs effort, patience and time to grow before you can see the result.",
    author: "Dr. Chris Dayagdag"
  },
  {
    text: "A website without SEO is like a car with no gas.",
    author: "Paul Cookson"
  },
  {
    text: "Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.",
    author: "Deep Immersion"
  },
  {
    text: "Web design is not just about creating pretty layouts. It’s about understanding the marketing challenge behind your business.",
    author: "Mohamed Saad"
  },
]

function App() {
  let quote = QUOTES[Math.floor(Math.random()*QUOTES.length)]
  const quoteText = useRef(null)
  const quoteAuthor = useRef(null)
  const [txt, setTxt] = useState(quote.text);
  const [ath, setAth] = useState(quote.author);

  useEffect(() => {
    setTxt(quoteText.current.innerText)
    setAth(quoteAuthor.current.innerText)
  }, [])

  const changeQuote = () => {
    let i = QUOTES.indexOf(quote)+1;
    i = (i===QUOTES.length)? 1:i;
    quote = QUOTES[i]
    setTxt(quote.text)
    setAth(quote.author) 
    //console.log(author)


  }

  return (
    <div className="container-fluid bg-color">
      <div className='row d-flex vh-100 justify-content-center align-content-center'>
        <div id="quote-box" className='col-4 bg-light d-flex flex-column p-5'>
          <div id="text" ref={quoteText} className='mx-auto h-50 text-center'>
            <span className='me-2'><FaQuoteLeft size={25} /></span>
            <span className="fs-4">{txt}</span></div>
          <div id="author" ref={quoteAuthor} className='ms-auto mt-1'>- {ath}</div>
          <div id="actions" className='d-flex mt-auto'>
            {/* eslint-disable-next-line */}
            <a
              id="tweet-quote"
              className="btn me-2"
              target="_blank"
              href={`https://twitter.com/intent/tweet?text="${txt}" ${ath}`}>
              <BsTwitter />
            </a>
            <span className="btn me-2"><SiTumblr /></span>
            <span id="new-quote" className="btn ms-auto" onClick={changeQuote}>New Quote</span>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

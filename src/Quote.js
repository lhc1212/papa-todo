import { useEffect, useState } from "react"
import "./Quote.css"

const Quote = () => {

    const [quote, setQuote] = useState({});

    useEffect(() => {
        const fetchQuote = async () => (
            await fetch("https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((data) => (
                    setQuote(data[Math.floor(Math.random() * (data.length))])
                ))
        )

        fetchQuote();
    }, [])

    return (
        <div className="quote">
            <h2><i>"{quote.text}"</i></h2>
            <h3>- {quote.author}</h3>
        </div>
    )
}

export default Quote

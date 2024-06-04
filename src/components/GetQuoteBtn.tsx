import { Link } from "gatsby"
import React from "react"

import '../styles/GetQuoteBtn.css';

const GetQuoteBtn: React.FC = () => {
  return (
    <Link hidden to="/get-quote-form" className="get-quote-btn">
      <h2>Get a Free Quote</h2>
    </Link>
  )
}

export default GetQuoteBtn;
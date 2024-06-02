import { Link } from "gatsby"
import React from "react"

import '../styles/GetQuoteBtn.css';

const GetQuoteBtn: React.FC = () => {
  return (
    <Link to="/get-quote-form">
      <h3>Get a Free Quote</h3>
    </Link>
  )
}

export default GetQuoteBtn;
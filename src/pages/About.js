import React from "react"

const About = (props) => {
    return <div className="aboutText">
    <h5>Welcome to the GA Stocks App Info Page!</h5> 
    <h5>The purpose of this app is to allow users to navigate top stocks data. Click on the "Dashboard" link in the top right to start browsing stocks, or check out the resources below for more details on the project.</h5>
    <ul>
       <li><a href="https://ringo.mycohort.download/react-fundamentals/week-14/day-2/lab/">Assignment Details</a></li> 
       <li><a href="https://www.investopedia.com/articles/basics/06/invest1000.asp">Learn More About Stocks</a></li> 
       <li><a href="https://www.nasdaq.com/">Stock Market News</a></li> 
       <li><a href="/">Go Home</a></li> 
    </ul>
    </div>
}

export default About
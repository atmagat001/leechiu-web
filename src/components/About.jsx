import React from 'react'

function About() {
  return (
    <div className="about cont-row">
     <div className='About-us cont-column' id='AboutUs'>
        <h1>About Us</h1>
        <p>Leechiu Property Consultants, Inc. (LPC) is a privately held professional real estate brokerage company founded by David Leechiu, the country’s top real estate adviser. LPC’s mission is to deliver profitable real estate solutions to its clients and partners. Since our establishment in 2016, we have leased more than one (1) million square meters of office space and have sold thirty-two (32) billion pesos worth of real estate.</p>
        <p> Our experienced brokers have leased more than two (2) million square meters of office space and have sold more than one hundred (100) billion pesos of real estate throughout their careers. Our expertise covers Tenant and Landlord Representations, Investment Sales, General Brokerage, Research and Consultancy, Data Analytics and Property Valuation.</p>
        <button className='btn-std'>Schedule a Consultation</button>

    </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZH7RIkAmtp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div >
   
  )
}

export default About
import React from "react";
import { Component } from "react";


class Hero extends Component {

   render() {
    return (
       <>
        <div className="hero-container">
            <div className="">
                <h1>How can we help you?</h1>
                <form className="search-div" action="">
                    <input type="text" placeholder="Im Looking for a Property" />
                    <button className="btn-std">For Rent</button>
                    <button className="btn-std">For Sale</button>

                </form>

              

            </div>
           
           


        </div>
       </>

    )
   }
    }


export default Hero;
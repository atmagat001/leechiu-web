import React from "react";
import { Component } from "react";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false
        }
    
    }

    handleMobileMenu = () => {
        this.setState({
            mobileMenu: !this.state.mobileMenu
        })
    }


    render() {
        return (
            <div className="header">
                <header>
                    <div className="logo-container">
                        <img src="https://leechiu.com/wp-content/uploads/2018/03/logo.png" alt="Leechiu Logo" />
                        
                    </div>

                    <div className={this.state.mobileMenu ? "mobile-menu" : "mobile-menu-hide"}>
                        <ul className={this.state.mobileMenu ? "mobile-ul" : ""}>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Our Services</a></li>
                            <li><a href="">Office Spaces For Lease</a></li>
                            <li><a href="">Properties for Sale</a></li>
                            <li><a href="">Contact us</a></li>

                        </ul>

                    </div>

                    <button onClick={this.handleMobileMenu}><i class="fa-solid fa-bars"></i></button>

                </header>
            </div>
        );
    }
}


export default Header;
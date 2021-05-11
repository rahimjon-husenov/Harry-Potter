import React from 'react'

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <h1 className="Elec">Electronic Shop</h1>
                <h1 className="Product">Products</h1>
                <h1 className="About">About</h1>
                <div>
                  <label for="rahim" className="search">Search</label>
                  <input id="rahim" className="rahim" type="text"></input>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

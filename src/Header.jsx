import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src="/icon/wp.png" alt="" />
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
                <img src="/icon/Search-icon.svg" alt="" />
            </div>
            <div className="add-f">
                <img src="/icon/add-icon.svg" alt="" />
            </div>
        </header>
    )
}

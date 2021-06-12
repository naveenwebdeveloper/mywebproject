import React from 'react'

export default function RightSide() {
    return (
        <div>
            <section id="right_side-bar">
            <div className="had_friend">
              <div className="side_dots">
                <h4 className="hed_titel">FRIENDS</h4>
                <div className="dots_inner"></div>
              </div>
              <div className="search search1">
                <input type="text" placeholder="Search" />
                <img src="/icon/Search-icon.svg" alt="" />
              </div>
            </div>

            <div className="friend">
              <img src="/profile_pic/pic1.jfif" alt="" />
              <div>
                <a href="index" >Mohit Sharma</a>
                <a href="index"  className="follower">25k followers</a>
              </div>
            </div>

            <div className="friend">
              <img src="/profile_pic/pic2.jpg" alt="" />
              <div>
                <a href="index.html" >Rohit Varma</a>
                <a href="index.html"  className="follower">25k followers</a>
              </div>
            </div>

            <div className="friend">
              <img src="/profile_pic/pic3.jfif" alt="" />
              <div>
                <a href="index.html" >Sohan Vats</a>
                <a href="index.html"  className="follower">25k followers</a>
              </div>
            </div>

            <div className="friend">
              <img src="/profile_pic/pic4.jfif" alt="" />
              <div>
                <a href="index.html" >Kapil Sharma</a>
                <a href="index.html"  className="follower">25k followers</a>
              </div>
            </div>

            <div className="friend">
              <img src="/profile_pic/pic5.jpg" alt="" />
              <div>
                <a href="index.html" >Parkash Mann</a>
                <a href="index.html"  className="follower">25k followers</a>
              </div>
            </div>
          </section>
        </div>
    )
}

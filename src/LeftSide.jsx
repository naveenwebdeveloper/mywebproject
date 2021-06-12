import React from 'react'

export default function LeftSide() {
    return (
        <div>
            <section id="left_side-bar">
            <div className="user_profile left_div">
              <img src="/profile_pic/pic2.jpg" alt="" />
              <h4>Naveen Sharma</h4>
              <h5><span>25k</span>folowers</h5>
              <div className="edit">
                <img src="/icon/edit-icon.svg" alt="" />
                <a href="index.html" >Edit Profile</a>
              </div>
            </div>
            <div className="manu left_div">
              <h4 className="hed_titel">MENUS</h4>
              <ul>
                <li>
                  <a href="index.html" ><img src="/icon/News-icon.svg" alt="" />Home</a>
                </li>
                <li><img src="/icon/Messages-icon.svg" alt="" />
                  <a href="index.html" >Messages</a>
                </li>
                <li><img src="/icon/Notification-icon.svg" alt="" />
                  <a href="index.html" >Notification</a>
                </li>
                <li><img src="/icon/Location-icon.svg" alt="" />
                  <a href="index.html" >Location</a>
                </li>
                <li><img src="/icon/privecy-icon.svg" alt="" />
                  <a href="index.html" >Privecy</a>
                </li>
                <li><img src="/icon/Setting-icon.svg" alt="" />
                  <a href="index.html" >Setting</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
    )
}


import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Header from './Header'
import LeftSide from './LeftSide'
import Content from './Content'
import RightSide from './RightSide'

class Apps extends React.Component {


  render() {
    return (
      <>
        {/* <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<   HEADER PART  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

        <Header />

        {/* <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MAIN PART   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

        <div className="main-div">


          {/* <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   LAFT SIDE BAR  -  PROFILE AND MANUE >>>>>>>>>>>>>>>> --> */}


          <LeftSide />


          {/* <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     CONTENT PART   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}




          <Content />




          {/* <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     RIGHT SIDE BAR PART OF FRIENDS >>>>>>>>>>>>>>>>>>>>>>>>> --> */}

           <RightSide />
          
        </div>
      </>
    )
  }
}

export default Apps;

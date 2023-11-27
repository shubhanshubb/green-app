import React from 'react'
import "./Home.css";
import customCare from "../assets/ccLarge.png";
import customC from "../assets/ccsmall.png";
import motor from "../assets/moptro.png";
import motorSmall from "../assets/moptroSmall.png";

function Home() {

  const data = [
    { title: "Productivity on Monday", percent: "4%" },
    { title: "Productivity on Tueday", percent: "92%" },
    { title: "Productivity on Wednesday", percent: "122%" },
    { title: "Productivity on Thrusday", percent: "93%" },
    { title: "Productivity on Friday", percent: "89%" },
    { title: "Productivity on Saturday", percent: "98%" },
  ];

  return (
    <div className="container">
      <div className='logoConatiner'>
      <div className="logo">
        <img src={customCare} alt="Logo" />
      </div>
      <div className="logo-small">
        <img src={customC} alt="Small Logo" />
      </div>
      </div>

      <div className="companyLogo">
        <div className="motorLogo">
          <img src={motor} alt="Moptro" />
        </div>
        <div className="motorsmallLogo">
          <img src={motorSmall} alt="Moptro" />
        </div>
      </div>

      <div className="weeklyContainer">
        <div className="dashboard">
          <div className="text">Employee Productivity Dashboard</div>
        </div>
        <div className="productContainer">
          {data.map((item, index) => (
            <div key={index} className="productBox">
              <div className="styleBox">
                <div className="title">{item.title}</div>
                <div className="percent">{item.percent}</div>
              </div>
              <div class="silver">
                <div className="green" style={{ width: item.percent }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

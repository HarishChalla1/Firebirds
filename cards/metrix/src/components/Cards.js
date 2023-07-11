import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Cards.css';
import { RiAddCircleLine, RiArrowRightCircleLine } from "react-icons/ri";

const Cards = () => {
    const currentDate = new Date();
  const options = { weekday: 'short', month: '2-digit', day: '2-digit' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
  const currentTime = currentDate.toLocaleTimeString([], optionsTime);

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  const handleNewProjectClick = () => {
    // Handle the onClick event for the New Project button
    console.log("New Project button clicked!");
  };

  return (
    <>
    <div className="container">
      <div className="row">

        <div className="col-md-1"></div>
        <div className="col-md-9">
        <h6 style={{cursor: "pointer"}}>
            Recent Projects <RiArrowRightCircleLine />
            </h6>
          <div className="row">
            <div className="col-sm-3">
              <div className="card" >
                <img src="/images/62c59a962359ce081937da1344688fb5--landscape-wallpapers-auto-detailing.jpg" className="card-img-top"  style={{ width: '100%',cursor: "pointer", }} />
                {/* <div className="card-body"> */}
                <p className="card-title">{truncateString("Aqwertyuioop", 9)}</p>
                  <p style={{ textAlign: "right",marginTop:'-25px' }}>{currentTime}</p> {/* Display the current time */}
                  <p style={{ textAlign: "right",marginTop:'-18px' }}>{formattedDate}</p>
                {/* </div> */}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card"  >
                <img src="/images/abstract-soft-focus-sunset-field-landscape-of-yellow-flowers-and-grass-meadow-warm-golden-hour-sunset-sunrise-time-tranquil-spring-summer-nature-closeup-and-blurred-forest-background-idyllic-nat.jpg" className="card-img-top"  style={{ width: '100%',cursor: "pointer", }} />
                {/* <div className="card-body"> */}
                <p className="card-title">{truncateString("Sqwedfghjklopi", 9)}</p>
                  <p style={{ textAlign: "right",marginTop:'-25px' }}>{currentTime}</p> {/* Display the current time */}
                  <p style={{ textAlign: "right",marginTop:'-18px' }}>{formattedDate}</p>
                {/* </div> */}
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card"  >
                <img src="/images/ocean-3605547_1280.jpg" className="card-img-top"  style={{ width: '100%',cursor: "pointer", }} />
                {/* <div className="card-body"> */}
                  
                  <p className="card-title">{truncateString("nbcvxfsgsysywuwuwyw", 9)}</p>
                  <p style={{ textAlign: "right",marginTop:'-25px' }}>{currentTime}</p> {/* Display the current time */}
                  <p style={{ textAlign: "right",marginTop:'-18px' }}>{formattedDate}</p>
                {/* </div> */}
              </div>
            </div>
            <div className="col-sm-3" >
              <div className="card"  >
                <img src="/images/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg" className="card-img-top"  style={{ width: '100%',cursor: "pointer" }} />
                {/* <div className="card-body"> */}
                  <p className="card-title">{truncateString("BkedwDWefewygebwyxgfb", 9)}</p>
                  <p style={{ textAlign: "right",marginTop:'-25px' }}>{currentTime}</p> {/* Display the current time */}
                  <p style={{ textAlign: "right",marginTop:'-18px' }}>{formattedDate}</p>
                  
                  
                {/* </div> */}
                
              </div>
            </div>
            
            
            
          </div>
        </div>
        <div className="col-md-2">
              <div
                className="card"
                style={{
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    // padding: "25px",
                    textAlign: "center",
                    backgroundColor: "navy",
                    color: "white",
                    height: "50%", // Specify the desired height
                    width: "160px", // Specifythe desired width
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    marginTop:'50px'
                }}
                onClick={handleNewProjectClick}
              >
                <p style={{ color: 'white', fontSize: '20px',margintop:'100%' }}>New Project <RiAddCircleLine /></p>
              </div>
            </div>
        </div>
        </div>
    

   
    </>
  );
};

export default Cards;

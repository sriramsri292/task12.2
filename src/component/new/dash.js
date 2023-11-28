import React from "react";
;

export default function Dash() {
   
    return (
     
            <div>
              <section>
                <div>
                  <h1 className="fst-italic" style={{ textAlign: "center", padding: "20px" }}>
                    Event 1
                  </h1>
                  <h4 className="fst-italic" style={{ textAlign: "center" }}>
                    Number of available seats: 23
                  </h4>
                </div>
              </section>
        
              <style>
                {`
                  .container {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 50vh;
                      padding: auto;
                  }
                  
                  .in {
                      border: 1px solid black;
                      padding: 10px;
                      text-align: center;
                  }
                  
                  .image-container {
                      margin-right: 70%;
                      margin-top: 15%;
                  }
                `}
              </style>
        
              <section>
                <div className="container">
                  <form className="in">
                    <div className="image-container">
                      <img src="https://via.placeholder.com/150" alt="bus" />
                    </div>
                    <div style={{ padding: "10px" }}>
                      <label>
                        Name: <input type="text" size="50" placeholder="Enter your name" />
                      </label>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <label>
                        Email ID: <input type="email" size="50" placeholder="Enter your email id" />
                      </label>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <label>
                        Phone Number: <input type="tel" size="50" placeholder="Phone number" />
                      </label>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <label>
                        Number of Seats: <input type="number" size="30" placeholder="Seats" />
                      </label>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <label>
                        Address: <input type="text" size="50" placeholder="Address" />
                      </label>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <button style={{ marginRight: "10px" }}>submit</button>
                      <button style={{ marginLeft: "10px" }}>cancel</button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          );
    
}

import React from "react";




export default function Home() {

  
    return (
      <div>
        <form className="col">
          <label style={{ display: "block" }}> <h3>Name</h3> </label>
          <input style={{ width: "150px" }} type="text" placeholder="First name" />
          <input style={{ width: "150px" }} type="text" placeholder="Last name" />
          <label style={{ display: "block" }}> <h3>Email</h3> </label>
          <input style={{ width: "450px" }} type="email" placeholder="Email id" />
          <div>
            <h3 style={{ display: "block" }}>Your experience</h3>
            <span style={{ color: "rgb(152, 8, 8)" }} className="fa fa-star checked"></span>
            <span style={{ color: "rgb(152, 8, 8)" }} className="fa fa-star checked"></span>
            <span style={{ color: "rgb(152, 8, 8)" }} className="fa fa-star checked"></span>
            <span style={{ color: "rgb(152, 8, 8)" }} className="fa fa-star checked"></span>
            <span style={{ color: "rgb(152, 8, 8)" }} className="fa fa-star checked"></span>
          </div>
          <div>
            <h3>How satisfied are you with:</h3>
          </div>
          <section>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Unsatisfied</th>
                  <th scope="col">Very satisfied</th>
                  <th scope="col">Neutral</th>
                  <th scope="col">Satisfied</th>
                  <th scope="col">Neutral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Purchase</th>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                </tr>
                <tr>
                  <th scope="row">Service</th>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                </tr>
                <tr>
                  <th scope="row">Company</th>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                </tr>
              </tbody>
            </table>
          </section>
          <div>
            <h3>How likely you are to:</h3>
          </div>
          <section>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">very unlikely</th>
                  <th scope="col">unlikely</th>
                  <th scope="col">Neutral</th>
                  <th scope="col">likely</th>
                  <th scope="col">very likely</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">buy again</th>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                </tr>
                <tr>
                  <th scope="row">recommend others</th>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                </tr>
                <tr>
                  <th scope="row">Recommend our Company</th>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                  <td>O</td>
                </tr>
              </tbody>
            </table>
          </section>
          <div>
            <h3>Additional suggestions</h3>
            <input style={{ width: "900px", height: "200px" }} type="text" />
          </div>
        </form>
      </div>
    );
  
  }
  

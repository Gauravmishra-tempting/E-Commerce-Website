import React from 'react';
import Navbar from '../BasicComponents/Navbar';
import ShirtImage from '../../../src/assets/img/dashhead1.jpg'


const Dashboard = () => {
  return (
   <div>
    <Navbar/>
    <div className="container-fluid">
     <div className="d-flex justify-content-center pagecolor">
      <div className="row">
        <div className="col-md">
          <img src={ShirtImage}
          className="img-fluid " 
          height={10}
            alt="" 
          />
          <h1>Welcome to your Dashboard</h1>
        </div>
        <div className="col-md">
          <img src={ShirtImage}
          className="img-fluid " 
          height={10}
            alt="" 
          />
          <h1>Welcome to your Dashboard</h1>
        </div>
        <div className="col-md">
          <img src={ShirtImage}
          className="img-fluid " 
          height={10}
            alt="" 
          />
          <h1>Welcome to your Dashboard</h1>
        </div>
        <div className="col-md">
          <img src={ShirtImage}
          className="img-fluid " 
          height={10}
            alt="" 
          />
          <h1>Welcome to your Dashboard</h1>
        </div>
        <div className="col-md">
          <img src={ShirtImage}
          className="img-fluid " 
          height={10}
            alt="" 
          />
          <h1>Welcome to your Dashboard</h1>
        </div>
      </div>
     </div>
    </div>
   </div>
  )
}

export default Dashboard;

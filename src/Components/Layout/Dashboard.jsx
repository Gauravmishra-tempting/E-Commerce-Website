import React from 'react';
import Navbar from '../BasicComponents/Navbar';
import tshirts from '../../../src/assets/img/tshirt_15197861.png'
import shirtimage1 from '../../../src/assets/img/shirt_2405655.png'
import sneakers from '../../../src/assets/img/sneakers_1692750.png'


const Dashboard = () => {
  return (
   <div>
    <Navbar/>
    <div className="container-fluid">
     <div className="d-flex justify-content-center pagecolor">
      <div className="row">
        <div className="col-md text-center mt-5 me-5">
          <img src={shirtimage1}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5">
          <img src={tshirts}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5">
          <img src={sneakers}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5">
          <img src={shirtimage1}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5">
          <img src={shirtimage1}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5">
          <img src={shirtimage1}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5">
          <img src={shirtimage1}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5">
          <img src={shirtimage1}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
        <div className="col-md text-center mt-5 me-5 mb-3">
          <img src={shirtimage1}
          className="img-fluid mb-2" 
          width={50}
            alt="" 
          />
          <h5>Shirts</h5>
        </div>
      </div>
     </div>
    </div>
   </div>
  )
}

export default Dashboard;

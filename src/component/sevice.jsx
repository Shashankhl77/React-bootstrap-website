function Sevice() {
  return ( 
    <div className="main-sevice-container">
      <strong>OUR SERVICES</strong>
      <div className="service-body">
      <div className="card" style={{ width: "18rem" }}>
  <img src="./src/images/s1.jpg" className="card-img-top" alt="services" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    
  </div>
</div>
      <div className="card" style={{ width: "18rem" }}>
  <img src="./src/images/s2.jpg" className="card-img-top" alt="services" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  
  </div>
</div>
      <div className="card" style={{ width: "18rem" }}>
  <img src="./src/images/s3.jpg" className="card-img-top" alt="services" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>

      </div>
<button className="btn">See More</button>
    </div>
   );
}

export default Sevice;
import React from "react";

const AboutSection = () => (
  <div className="container py-5">
    <div className="row g-4">
      <div className="col-lg-6 col-md-12">
        <div className="left-section abt-bg">
          <img src="/images/about-img.png" alt="Power Plant" className="img-fluida rounded shadow" />
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="right-section mt-4">
          <h6 className="text-warning fw-bold">⚡ About us</h6>
          <h5 className="text-dangerh">
            The West Bengal Power <br /> Development Corporation Limited (WBPDCL)
          </h5>
          <p className="text-muted1">
            The West Bengal Power Development Corporation Limited (WBPDCL) is the state-owned power
            company of West Bengal. It was established in 1985 to meet the electricity needs of the
            state. WBPDCL operates major thermal power plants like Kolaghat, Bakreswar, Sagardighi,
            and Santaldih.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default AboutSection;

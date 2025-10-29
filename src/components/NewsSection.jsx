import React from "react";

const NewsSection = () => (
  <div className="container py-5">
    <div className="row g-4">
      <div className="col-lg-6 col-md-12">
        <h6 className="mb-3 nutxt">News & Updates</h6>
        {[1, 2, 3].map((i) => (
          <div key={i} className="d-flex mb-3 align-items-center">
            <img src="/images/news1.png" alt="news" className="news-thumb me-3" />
            <div>
              <p className="mb-1 fw-semibold ntext">The challenges of the sowing campaign</p>
              <small className="text-muted">January 04, 2024</small>
            </div>
          </div>
        ))}
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="row g-3">
          {[1, 2].map((i) => (
            <div className="col-md-6" key={i}>
              <div className="card h-100 border-0 shadow-sm">
                <img src={`/images/news${i}.png`} className="card-img-top" alt="news" />
                <div className="card-body">
                  <h6 className="card-title fw-semibold">The challenges of the sowing campaign</h6>
                  <small className="text-muted d-block mb-2">January 04, 2024</small>
                  <a href="#" className="text-danger fw-bold small">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default NewsSection;

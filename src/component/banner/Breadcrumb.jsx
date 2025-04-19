// components/Breadcrumb.js
import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <div className="breadcrumb-area-bg bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bread-crumb-area-inner">
              <div className="bottom-title">
                <h1 className="title">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

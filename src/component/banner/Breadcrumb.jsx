// components/Breadcrumb.js
import React from 'react';

const Breadcrumb = ({ title, activeLink }) => {
    return (
        <div className="breadcrumb-area-bg bg_image">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bread-crumb-area-inner">
                            <div className="breadcrumb-top">
                                <a href="#">Home</a> /
                                <a className="active" href="#">{activeLink}</a>
                            </div>
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

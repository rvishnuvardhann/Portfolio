import React, { Fragment } from 'react'
import { SiHackerrank ,SiLeetcode} from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Rayarakula Vishnuvardhan</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                    <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">B.Tech - Computer Science and Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2020 - 2024</h6>
                                <p className="m-0">CVR College of Engineering</p>
                                <p>CGPA: 9.09</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2020</h6>
                                <p className="m-0">narayana Junior College</p>
                                <p>Percentage: 97.3 %</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2018</h6>
                                <p className="m-0">Sri Sai Vignan Bharathi</p>
                                <p>GPA: 9.8</p>
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
    
                            <a href="https://www.hackerrank.com/rvishnuvardhan01" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                            <a href="https://leetcode.com/rvishnuvardhann/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiLeetcode className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume
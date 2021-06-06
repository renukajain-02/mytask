import './Landing.css';
import Contact from './Contact';
import { useState } from 'react';

const Landing = () => {
    const[isSidebarOpen,setIsSidebarOpen]=useState(false);

    const openContact = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <>
            <div className="container mt-5 div-center">
                <div className="row text-light">
                    <div className="col-md-6 col-sm-12 top-left">
                        <div className="row mt-5 px-3">
                            <h4>COMING SOON</h4>
                        </div>
                        <div className="row mt-3 px-1">
                            <span className="padding-time">10
                            <span className="padding-time">:</span>
                            <span className="padding-time">23</span>
                            <span className="padding-time">:</span>
                            <span className="padding-time">22</span>
                            <span className="padding-time">:</span>
                            <span className="padding-time">18</span></span>
                        </div>
                        <div className="row mt-3 text-muted px-1">
                            <span className="padding-time-name">DAYS
                            <span className="padding-time-name">HOURS</span>
                            <span className="padding-time-name">MINUTES</span>
                            <span className="padding-time-name">SECONDS</span></span>
                        </div>
                       <div className="row my-5 px-1">
                           <div className="col-md-4 col-sm-12">
                               <input className="input-email" type="text" placeholder="Email Address" />
                           </div>
                           <div className="col-md-3 col-sm-12">
                               <button className="btn-notify">NOTIFY ME</button>
                           </div>
                           <div className="col-md-5 col-sm-12">
                           </div>
                       </div>
                         
                    </div>
               
                    <div className="col-md-6 col-sm-12 my-5">
                        <div className="row my-5">
                            <div className="col-sm-12">
                                <ul className="list-one zoom">
                                    <li className="">
                                        There is an experience design studio speaciallizing in UX, UI and service design.We convert game changing ideas to user-friendly interfaces and services.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-sm-12 my-5">
                                <div className="col-sm-6">
                                    <Contact isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                                </div>
                                <ul className="list-two">
                                    <li>
                                        Want to Talk?<br/>
                                        <button className="btn-contact" onClick= {openContact}>Contact us</button>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 mt-5">
                                <ul className="list-three zoom">
                                    <li>
                                        Want to Work with us?<br/>
                                        <a href="#">careers@jayvardhanchanney</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Landing
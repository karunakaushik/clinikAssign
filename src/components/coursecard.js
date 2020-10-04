import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './coursecard.css'
export default class CourseCard extends Component{
    render(){
        const cousredetails = this.props.ccousredetail;
        return(
            // <div className=>
                <div className="courseouterbox">
                             <div className="imgbox">
                                 <img src={cousredetails.image} alt="icons" />
                             </div>
                             <div className="coursedetail">
                                <p><b>{cousredetails.topic}</b></p>
                                 <p>{cousredetails.auth}</p>
                             </div>
                             <div className="duration">
                                 <img src={cousredetails.timerIcon} />
                                 <p>{cousredetails.duration}</p>
                             </div>
                             <div className="rate">
                                <img src={cousredetails.ratingicon} />
                                <p>{cousredetails.rating}</p>
                             </div>
                              <button><a href={cousredetails.video} target="blank" style={{textDecoration:"none", color:"black"}}>
                                  View Course </a> </button>
                        </div>
            // </div>
        )
    
    }
}
import React, { Component } from 'react'
import './home.css'
import helloboy from '../src/img/helloboy.png'
import colorball from '../src/img/colorball.png'
import Backward from '../src/img/backwardarrow.png'
import Forward from '../src/img/forwardarrow.png'
import Figma from '../src/img/Frame.png'
import Blackball from '../src/img/Group.png'
import Insta from '../src/img/insta.png'
import Pencil from '../src/img/pencil.png'
import PS from '../src/img/ps.png'
import Timer from '../src/img/time.png'
import Rate from '../src/img/fire.png'
import Drop from '../src/img/drop.png'
import User from '../src/img/user.png'
import Notice from '../src/img/Group 34.png'
import Search from '../src/img/search.png'
import Status from '../src/img/graph.png'
import BookBrain from '../src/img/bookbrain.png'
import CourseCard from '../coursecard'

export default class HomePage extends Component{
    render(){
        const course=[
            {
                id:0,
                image: Figma,
                topic: "Learn Figma",
                auth: "by Christopher Morgan",
                timerIcon: Timer,
                duration: "6h 30min",
                ratingicon: Rate,
                rating: "4.9",
                video: "https://www.youtube.com/watch?v=qZ5zayHSH2g&list=PL_z_8CaSLPWfxJPz2-YKqL9gXWdgrhvdn"
                // const embedUrl = "https://www.youtube.com/embed/Rq5SEhs9lws"

            },
            {
                id:1,
                image: Blackball,
                topic: "Analog photography",
                auth: "by Gordon Norman",
                timerIcon: Timer,
                duration: "3h 15min",
                ratingicon: Rate,
                rating: "4.7",
                video:"https://www.youtube.com/watch?v=4zTY-Porfmw"

            },
            {
                id:2,
                image: Insta,
                topic: "Master Instagram",
                auth: "by Sophie Gill",
                timerIcon: Timer,
                duration: "7h 40min",
                ratingicon: Rate,
                rating: "4.6",
                video:"https://www.youtube.com/watch?v=f5bK6ZlG68I"

            },
            {
                id:3,
                image: Pencil,
                topic: "Basics of drawing",
                auth: "by Jean Tate ",
                timerIcon: Timer,
                duration: "11h 30min",
                ratingicon: Rate,
                rating: "4.8",
                video:"https://www.youtube.com/watch?v=f5bK6ZlG68I"

            },

            {
                id:4,
                image: PS,
                topic: "Photoshop - Essence",
                auth: "by David Green",
                timerIcon: Timer,
                duration: "5h 35min",
                ratingicon: Rate,
                rating: "4.7",
                video:"https://www.youtube.com/watch?v=LDepN5nMQv0&list=PLM4iv3icap3fqolYiV3fXw4APYfKcRUYl"

            }

        ]
        return(
            <React.Fragment>
            <div className="outerContainer">
                 <div className="outerbox1">
                    <div className="helloboyDiv">
                        <div className="hello">
                            <h1>Hello Josh!</h1>
                            <p>it's good to see you again.</p>
                        </div>
                        <div className="hijosh">
                            <img src={helloboy} alt="boy" />
                        </div>
                    </div>

                    <div className="contiBox">
                        <div className="continnerbox">
                             <div>
                                 <img src={colorball} alt="ball" />
                             </div>
                             <div className="text1">
                                 <p><b>Spanish B2</b></p>
                                 <p>by Alejandro Velazquez</p>
                             </div>
                             <div className="text2">
                                 <p>83%</p>
                             </div>
                              <button> Continue</button>
                        </div>
                        <div className="arrow">
                            <img src={Backward}  alt="Backward" />
                            <img src={Forward} alt="forward" />
                        </div>
                    </div>
                    <h1 className="courseheading">Courses</h1>
                    <div className="courserating">
                        <p><b>All Courses</b></p>
                        <p style={{opacity:".3"}}>The Newest</p>
                        <p style={{opacity:".3"}}>Top Rated</p>
                        <p style={{opacity:".3"}}>Most Popular</p>
                    </div>
                    <div className="coursebox">
                      {course.map((courses, index)=>{
                          return(
                              <div key= {index} className="innercoursebox">
                                <CourseCard ccousredetail={courses} />
                                </div>
                          )
                      })}
                    </div>

                 </div>



                 <div className="outerbox2">
                     <div className="searchcontainer">
                         <div className="search">
                             <img src={Search} alt="search" />
                         </div>
                         <div className="infouser">
                             <img src={Notice} alt="notice" />
                          {/* </div> */}
                          <div>
                              <img src={User} alt="user" />
                          </div>
                          <img src={Drop} alt="drop" />
                     </div>
                     </div>
                    <br />
                     <div className="coursecount">
                         <div className="compcourse">
                             <h1>11</h1>&nbsp;
                             <p>Courses <br /> completed</p>
                         </div>
                         <div className="progcourse">
                            <h1>4</h1>&nbsp;&nbsp;
                             <p>Courses <br /> in progress</p>
                         </div>
                     </div>
                    <h1 className="status">Your Statistics</h1>
                     <div className="statusGraph">
                        <div className="hourstatus">
                            <p><b>Learning Hours</b></p>
                            <p style={{opacity:"0.3"}}><b>My Courses</b></p>
                        </div>
                         <select className="statusstudy" id="cars" name="cars">
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="Daily">Daily</option>
                            {/* <option value="audi">Audi</option> */}
                        </select>
                     </div>
                     <br />
                     <div className="statusgraphpic">
                        <img src={Status} alt="Status" />
                     </div>
                     <br />
                     <br />
                     <br />
                    <div className="learnMoreBox">
                        <div className="learntextbox">
                            <h1><b>Learn even more!</b></h1>
                            <p>Unlock premium features <br />only for $9.99 per month.</p>
                            <button> Go Premium</button>
                        </div>
                        <div>
                            <img src={BookBrain} alt="BookBrain" />
                        </div>

                    </div>
                 </div>
            </div>
            </React.Fragment>

        )
    }
}
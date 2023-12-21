import React from "react";
import "./WorkProcess.css";
import WorkProcessVid from "../../assets/videos/video.mp4";
import {ControlBar, Player, PlayToggle} from 'video-react';
import 'video-react/dist/video-react.css';

const WorkProcess = () => {
    return (
        <section class="process" id="process">
        <div className="workprocess section__padding">
            <div className="container">
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap">Our work process</h2>
                    <p className="para__text">
                    Discover Courses: Explore our tailored HTML and CSS learning paths.
                    Enroll and Code: Join interactive lessons with hands-on exercises.
                    Create Real Websites: Apply skills through practical, guided projects.
                    Community Connection: Engage with peers in forums and discussions.
                    Advance and Achieve: Stay updated, graduate, and excel in web development.</p>

                    <div className="vid__container">
                        <Player autoPlay loop src = {WorkProcessVid}>
                            <ControlBar autoHide = {false} disableDefaultControls = {true}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default WorkProcess;
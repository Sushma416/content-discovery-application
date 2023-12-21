import React from 'react';
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
    <section class="about" id="about">
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h2 className='section__title text__cap'>about us</h2>
                <p className='para__text text__grey'>Dev Point is powered by a passionate team of experienced developers and educators dedicated to making your learning journey enjoyable and rewarding. We believe in fostering a supportive learning environment where everyone feels welcome.

                Ready to dive into the world of HTML and CSS with us? Let's code together and turn your ideas into reality! Start your learning journey at Dev Point today.
                
                Happy coding!</p>
                <img src = {images.signature} alt = "" />
            </div>
        </div>
    </div>
    </section>
)

export default AboutUs;
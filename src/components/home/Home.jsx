import React from 'react';
import './Home.css';
import Me from '../../assets/linkedIn_profile_pic.jpeg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Akash Mohanasundaram</h1>
                <span className="home__education">I'm a Software Engineer</span>

                <HeaderSocials />
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home
import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import cookit from '../images/cookit.png';
import nestySvg1 from '../images/nestySvg1.svg';
import nestySvg2 from '../images/nestySvg2.svg';
import nestySvg3 from '../images/nestySvg3.svg';
import homepageimg from '../images/homepageimg.jpg';
import {Link} from 'react-router-dom';
import WeekMealCard from './WeekMealCard';
import Swiper from 'react-id-swiper';
import '../css/Nesty.css';
import 'swiper/css/swiper.css';

const params = {
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    mousewheel: true,
    scrollbar: {
        draggable: true
      }
  }

const MobileCTA = () => {
    return (
        <Col md="auto" className="m-auto text-center">
            <Button className="signupCTA text-light m-auto" size="lg">Order now</Button>
        </Col>
    );
}

const Nesty = () => {
    const isMobile = window.innerWidth < 700;
    return (
        <>
        <Row className="nestyContainer">
            <Col md="auto" className="m-auto">
                <h1 className="headline">We deliver, you cook.</h1>
                <p className="nestyInfo text-muted">Order our top-rated recipes today.</p>
                {window.innerWidth > 700 && <Button as={Link} to="/users/signup" className="signupCTA text-light" size="lg">Order now</Button>}
            </Col>
            <Col md="auto" className="m-auto nestyImgContainer">
                <Image className="nestyImg" src={cookit} />
            </Col>
            {window.innerWidth < 700 && <MobileCTA />}
        </Row>
        <Row className="d-flex justify-content-center align-items-center m-0">
            <Col className="text-center m-4" md={4}>
                <Image className="nestyImg" src={nestySvg1}/>
            </Col>
            <Col className={isMobile ? "m-3" : "m-4"} md={4}>
                <h3 className="nestyStep font-weight-bold">Choose your meals</h3>
                <p className="nestyInfo text-muted">Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners, and top-rated customer favorites.</p>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center flex-wrap-reverse align-items-center m-0">
            <Col className={isMobile ? "m-3" : "m-4"} md={4}>
                <h3 className="nestyStep font-weight-bold">Unpack your box</h3>
                <p className="nestyInfo text-muted">We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door.</p>
            </Col>
            <Col className="text-center m-4" md={4}>
                <Image className="nestyImg" src={nestySvg2}/>
            </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center m-0">
            <Col className="text-center m-4" md={4}>
                <Image className="nestyImg" src={nestySvg3}/>
            </Col>
            <Col className={isMobile ? "m-3" : "m-4"} md={4}>
                <h3 className="nestyStep font-weight-bold">Create magic</h3>
                <p className="nestyInfo text-muted">Following our step-by-step instructions you’ll experience the magic of cooking recipes that our chefs create with your family’s tastes in mind.</p>
            </Col>
        </Row>
        <Row className="m-0">
            <Row className="d-flex justify-content-center align-items-center m-auto">
                <h3 className="nestyStep font-weight-bold mt-5 mb-5">Week of may 11th</h3>
            </Row>
            <Swiper {...params}>
                <WeekMealCard />
                <WeekMealCard />
                <WeekMealCard />
                <WeekMealCard />
                <WeekMealCard />
                <WeekMealCard />
                <WeekMealCard />
            </Swiper>
        </Row>
        <Row className="d-flex justify-content-center align-items-center ml-auto mr-auto mt-5 content-container">
            <Image className="homepageimg" src={homepageimg} />
            <Col md={7} className="d-flex justify-content-center align-items-center flex-column m-auto position-absolute content">
                <Row className="mt-0 mb-4 mr-auto ml-auto text-center content-title">WHAT'S INSIDE A PURPLE COOKIT BOX</Row>
                <Row className="mt-0 mb-0 mr-auto ml-auto d-flex justify-content-center align-items-center">
                    <Row className="d-flex justify-content-around m-3"> 
                        <Col md={5} className="m-0 mt-4 mb-4 d-flex flex-column">
                            <Row className="m-0 mb-4 text-center"><p className="m-auto"><span><i className="fas fa-bread-slice homeFontVector"></i></span></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-info"><strong>Delicious, chef-designed recipes</strong></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-description text-muted">With step-by-step instructions so you never miss a beat (or beet)</p></Row>
                        </Col>
                        <Col md={5} className="m-0 mt-4 mb-4 d-flex flex-column">
                            <Row className="m-0 mb-4 text-center"><p className="m-auto content-title"><span><i className="fas fa-carrot homeFontVector"></i></span></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-info"><strong>Responsibly-sourced, quality ingredients</strong></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-description text-muted">Like fresh produce, sustainable seafood and exclusive spice blends</p></Row>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-around m-3"> 
                        <Col md={5} className="m-0 mt-4 mb-4 d-flex flex-column">
                            <Row className="m-0 mb-4 text-center"><p className="m-auto content-title"><span><i className="fas fa-balance-scale-right homeFontVector"></i></span></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-info"><strong>Perfectly-portioned amounts</strong></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-description text-muted">So no morsels or dollops go to waste</p></Row>
                        </Col>
                        <Col md={5} className="m-0 mt-4 mb-4 d-flex flex-column">
                            <Row className="m-0 mb-4 text-center"><p className="m-auto content-title"><i className="fas fa-recycle homeFontVector"></i></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-info"><strong>Recyclable ice packs and packaging</strong></p></Row>
                            <Row className="m-0"><p className="m-auto text-center content-description text-muted">To ensure your ingredients stay fresh until you’re home and ready</p></Row>
                        </Col>
                    </Row>
                </Row>
                <Row className="mt-0 mb-4 mr-auto ml-auto text-center"><Button as={Link} to="/users/signup" className="signupCTA text-light" size="lg">Choose your plan</Button></Row>
            </Col>
        </Row>
        </>
    );
}

export default Nesty;
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/WeekMealCard.css';
import meal from '../images/meal.jpg';


const WeekMealCard = () => {
    return (
        <>
            <Card className="swiper-slide">
                <Card.Img className="img-fluid" variant="top" src={meal} />
                <Card.Body>
                    <Card.Title>Pesto Bowl</Card.Title>
                    <Card.Text>
                        filet de poulet, lentilles vertes, épeautre et légumes.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </>
    )
}

export default WeekMealCard;

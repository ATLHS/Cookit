import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/WeekMealCard.css';

const WeekMealCard = () => {
    return (
        <>
            <Card className="swiper-slide">
                <Card.Img className="img-fluid" variant="top" src="https://d22xiosjihvnzy.cloudfront.net/eyJidWNrZXQiOiJkaXNoLWJ1Y2tldCIsImtleSI6IjVkNGMyYjM3ODQyY2M3NDA1MzEzZGRhOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3Njh9LCJ3ZWJwIjp7InF1YWxpdHkiOjEwMH19fQ==" />
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

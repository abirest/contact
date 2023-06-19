import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselComponent.css"
const CarouselComponent = () => {
  return (
    <Carousel className='caro' slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImg"
          src="https://images.hindustantimes.com/img/2022/08/29/550x309/d915e55c-279a-11ed-9b13-2e13773bcef4_1661778195979.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImg"
          src="https://img.freepik.com/photos-premium/contactez-nous-icone-affaires-clavier-ordinateur-globe_117856-2468.jpg?w=360"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8qG7D2PuNOxgix-51Z2HbXoPi-eEsjNV9q9YTcSMb0OQ9APIOGroOWPdQe26XeAaFoU&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent

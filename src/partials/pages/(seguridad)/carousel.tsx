'use client';
import React, { Component } from "react";
import Slider from "react-slick";
import parse from 'html-react-parser';
import '@/assets/styles/scss/pages/(seguridad)/carousel.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Props {
  height?: string ,
  src?: string[]
}

function SamplePrevArrow() {
  return (
    <div
      style={{display: "none" }}
    />
  );
}


export const Carousel = (Props) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const carousel = () => {
    let listDefault = [
      {
        'img': '/assets/images/carousel/carrusel-registro-1.jpg',
        'title': parse('Ya muchas empresas se están sumando<br> recibiendo los beneficios que<br> tanto esperaban.')
      },
      {
        'img': '/assets/images/carousel/carrusel-registro-2.jpg',
        'title': parse('Tenemos los productos y<br> servicio ideal para ti.')
      },
      {
        'img': '/assets/images/carousel/carrusel-registro-3.jpg',
        'title': parse('Aceptamos todas las tarjetas.')
      }
    ]
    return listDefault
  }


  return (
    <div>
      <Slider {...settings}>
        {
          carousel().map((item) => (
            <div className="carousel-segurity_content" key={item.img}>
            <div className='bg-cover bg-no-repeat bg-center bg-clip-border bg-origin-border h-dvh' style={{ backgroundImage: `url(${item.img})` }}>
                <div className="flex justify-center">
                  <h3>{item.title}</h3>
                </div>
            </div>
            </div>
          ))
        }

      </Slider>
    </div>
  )
}

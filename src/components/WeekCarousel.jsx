import React from 'react';
import Slider from 'react-slick';  // Importamos react-slick

const WeekCarousel = ({ data }) => {
  // Obtenemos el día actual de la semana (0 = domingo, 6 = sábado)
  const currentDayIndex = new Date().getDay(); 

  // Calculamos el índice del día anterior
  const previousDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  // Definimos las configuraciones del slider
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3,  // Mostrar 3 elementos a la vez
    slidesToScroll: 1,  // Deslizar 1 elemento a la vez
    arrows: false,
    centerMode: true,  // Habilitar el modo centrado
    centerPadding: "10%",  // Ajusta el padding para permitir que los elementos se deslicen de manera adecuada
    initialSlide: previousDayIndex, // Establecemos el día anterior como el slide inicial
    swipeToSlide: true,  // Permite deslizar cualquier slide sin restricciones
    touchMove: true,  // Aumenta o disminuye el umbral para deslizar en dispositivos táctiles
  };

  const days = [
    'Lun',
    'Mar',
    'Mié',
    'Jue',
    'Vie',
    'Sáb',
    'Dom',
  ];

  return (
    <div id="week-carousel">
      <Slider {...settings}>
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`week-grid-item ${index === previousDayIndex ? 'current-day' : ''}`} // Clase extra para el día anterior
          >
            <span className="day">{day}</span>
            <p className="text">{data[index]}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeekCarousel;

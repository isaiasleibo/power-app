import React from 'react';
import Slider from 'react-slick';
import CarouselGrafic from '../components/CarouselGrafic'; // Asegúrate de importar el nuevo componente
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/Home.scss';
import Header from '../components/Header';
import WeekCarousel from '../components/WeekCarousel';
import Footer from '../components/Footer';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "7%",
    arrows: false
  };

  const weightData = [
    { date: '08-01', weight: 82 },
    { date: '08-15', weight: 81 },
    { date: '09-01', weight: 80 },
    { date: '09-15', weight: 79 },
    { date: '10-01', weight: 78 },
    { date: '10-15', weight: 77 },
    { date: '11-01', weight: 76 },
    { date: '11-15', weight: 75 },
    { date: '12-01', weight: 76 },
    { date: '12-15', weight: 75 },
    { date: '01-01', weight: 74 },
    { date: '01-15', weight: 73 },
    { date: '02-01', weight: 72 },
    { date: '02-15', weight: 71 },
    { date: '03-01', weight: 70 },
    { date: '03-08', weight: 69 },
  ];

  const deadliftData = [
    { date: '01-01', weight: 125 },
    { date: '01-02', weight: 130 },
    { date: '01-03', weight: 128 },
    { date: '01-04', weight: 135 },
    { date: '01-05', weight: 145 },
    { date: '01-06', weight: 140 },
    { date: '01-07', weight: 150 },
  ];

  const benchPressData = [
    { date: '01-01', weight: 130 },
    { date: '01-02', weight: 125 },
    { date: '01-03', weight: 135 },
    { date: '01-04', weight: 140 },
    { date: '01-05', weight: 150 },
    { date: '01-06', weight: 145 },
    { date: '01-07', weight: 155 },
  ];

  const squatData = [
    { date: '01-01', weight: 120 },
    { date: '01-02', weight: 125 },
    { date: '01-03', weight: 130 },
    { date: '01-04', weight: 140 },
    { date: '01-05', weight: 135 },
    { date: '01-06', weight: 145 },
    { date: '01-07', weight: 150 },
  ];

  const weekSplitData = ["Pecho y espalda", "Pierna y hombro", "Biceps y triceps", "Día de descanso", "Espalda y femoral", "pecho y hombro", "Día de descanso"]

  return (
    <div id="home" className='main-content'>
      <Header />
      <Footer home />
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-item">
            <CarouselGrafic data={weightData} name={'Peso Corporal'} />
          </div>
          <div className="carousel-item">
            <CarouselGrafic data={squatData} name={'Sentadilla'} />
          </div>
          <div className="carousel-item">
            <CarouselGrafic data={benchPressData} name={'Press Banca'} />
          </div>
          <div className="carousel-item">
            <CarouselGrafic data={deadliftData} name={'Peso Muerto'} />
          </div>
        </Slider>
      </div>

      <div id="planificationButton">
        <p id='title'>Entrenamiento de hoy</p>
        <div id="data">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z" /></svg>
            <p>Día 1</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" /></svg>
            <p>Semana 1</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z" /></svg>
            <p>Bloque hipertrofia</p>
          </div>
        </div>
      </div>

      <div id="weekSplit">
        <p id="title">Week Split</p>
        <WeekCarousel data={weekSplitData} />
      </div>

      <div id="todayRecords">

        <div className="record notas">
          <div id="main">
            <p className="title">Notas</p>
            <div className="details">
              <div className="detail">
                <ul>
                  <li>Hacer más pausa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="record">
          <div className="main">
            <p className="title">Fatiga hoy</p>
            <div className="details">
              <div className="detail">
                <p>Empujes: 2/5</p>
              </div>
              <div className="detail">
                <p>Pierna: 2/5</p>
              </div>
              <div className="detail">
                <p>Tracciones: 2/5</p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18px" width="24px"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
        </div>

        <div className="record">
          <div id="main">
            <p className="title">Peso corporal</p>
            <div className="details">
              <div className="detail">
                <p>Último peso: 74kg</p>
              </div>
              <div className="detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" /></svg>
                <p> 31/12/24</p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
        </div>
      </div>

    </div>
  );
};

export default Home;

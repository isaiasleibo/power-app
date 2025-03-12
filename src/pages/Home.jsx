import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/Home.scss';
import '../scss/Calendar.scss'
import Header from '../components/Header';
import WeekCarousel from '../components/WeekCarousel';
import Footer from '../components/Footer';
import WeightInput from '../components/WeightInput';

const Home = () => {
  const [wheightInputActive, setWheightInputActive] = useState(false)
  const [date, setDate] = useState(new Date());

  const weekSplitData = ["Pecho y espalda", "Pierna y hombro", "Biceps y triceps", "Día de descanso", "Espalda y femoral", "pecho y hombro", "Día de descanso"]

  const handlePrevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];


  return (
    <div id="home" className='main-content'>
      <Header />
      <Footer home />
      {wheightInputActive && <WeightInput setWheightInputActive={setWheightInputActive} />}

      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>{'<'}</button>
          <h2>{monthNames[date.getMonth()]} {date.getFullYear()}</h2>
          <button onClick={handleNextMonth}>{'>'}</button>
        </div>
        <Calendar 
          onChange={setDate} 
          value={date} 
          showNavigation={false} 
          view="month" 
          maxDetail="month" 
          showFixedNumberOfWeeks={true}
        />
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18px" width="24px"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" /></svg>
        </div>

        <div className="record" onClick={() => setWheightInputActive(true)} >
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

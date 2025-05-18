import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../scss/Planifications.scss'

const planifications = [
  {
    id: 1,
    name: 'Planificacion 3',
    start: "15/11/24",
    end: "15/03/25",
    blocksAmount: 3,
    completed: false
  },
  {
    id: 2,
    name: 'Planificacion 2',
    start: "15/06/24",
    end: "15/11/24",
    blocksAmount: 5,
    completed: true
  },
  {
    id: 3,
    name: 'Planificacion 1',
    start: "15/02/24",
    end: "15/06/24",
    blocksAmount: 4,
    completed: true
  }
]

const Planifications = () => {
  return (
    <div id="planifications" className="main-content">
      <Header />
      <Footer planifications />

      <div id="records">
        {
          planifications.map((p) => {
            return (
              <Link to={`/planifications/blocks/${p.id}`}>
                <div className="record" key={p.id}>
                  <div className="main">
                    <p className="title">{p.name}</p>
                    <div className="details">
                      <div className="detail">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" /></svg>
                        <p>{p.start}</p>
                      </div>
                      <div className="detail">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" /></svg>
                        <p>{p.end}</p>
                      </div>
                      <div className="detail">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z" /></svg>
                        <p>{p.blocksAmount} Blocks</p>
                      </div>
                    </div>
                  </div>
                  {!p.completed ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24px"><path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24px"><path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>}
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Planifications

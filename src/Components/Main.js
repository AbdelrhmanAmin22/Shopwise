import React from 'react'
import SliderElement from './SliderElement'
import FirstImage from '../assets/images/main/1.png'
import SecImage from '../assets/images/main/2.png'
import ThirdImage from '../assets/images/main/3.png'
import './css/Main.module.css'

const Main = () => {
    return (
      <main>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <SliderElement title = 'NEW TRANDING' desc = 'Sofa Collection' src ={FirstImage} bc ='one'/>
                  </div>
                  <div className="carousel-item">
                  <SliderElement title = 'Get up to 50% off Today Only!' desc = 'Wooden Chair Collection' src ={SecImage} bc ='two'/>
                  </div>
                  <div className="carousel-item">
                  <SliderElement title = 'Taking your Viewing Experience to Next Level' desc = 'Living Room Collection' src ={ThirdImage} bc ='three'/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </main>
    )
}

export default Main

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "../public/styles/testimonials.module.css"


export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false
      };
    return (
      <Slider {...settings}>
        <div className={style.item}>
          <div className={style.innerItem}>
          <img src="/images/testclient1.png" alt=""/>
            
            <div className={style.text}>
                <p className={style.testmonial}>Your cells react to engine bacteria and viruses differently than mine. You don't get sick, I doesnt. That's also clear. But for some reason.</p>
                <p className={style.name}>Fatima Mahmoud</p>
                <p className={style.designation}>ABMFR</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.innerItem}>
          <img src="/images/testclient1.png" alt=""/>
            
            <div className={style.text}>
                <p className={style.testmonial}>Your cells react to engine bacteria and viruses differently than mine. You don't get sick, I doesnt. That's also clear. But for some reason.</p>
                <p className={style.name}>Fatima Mahmoud</p>
                <p className={style.designation}>ABMFR</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.innerItem}>
          <img src="/images/testclient1.png" alt=""/>
            
            <div className={style.item}>
                <p className={style.testmonial}>Your cells react to engine bacteria and viruses differently than mine. You don't get sick, I doesnt. That's also clear. But for some reason.</p>
                <p className={style.name}>Fatima Mahmoud</p>
                <p className={style.designation}>ABMFR</p>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.innerItem}>
          <img src="/images/testclient1.png" alt=""/>
            
            <div className={style.text}>
                <p className={style.testmonial}>Your cells react to engine bacteria and viruses differently than mine. You don't get sick, I doesnt. That's also clear. But for some reason.</p>
                <p className={style.name}>Fatima Mahmoud</p>
                <p className={style.designation}>WORKS</p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
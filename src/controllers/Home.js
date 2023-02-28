import styles from "./styles/Home.module.css";
import background from "./assets/background.png";
import heviinBoov from "./assets/heviinboov.jpeg";
import banana from "./assets/banana.jpeg";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export const Home = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className={styles.controller}>
      <div className={styles.light}>
        <img className={styles.background} src={background}></img>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content2Container}>
          <div className={styles.containerBoov}>
            <img src={heviinBoov} className={styles.heviinBoov}></img>
          </div>
          <div className={styles.texts}>
            <div className={styles.today}>ӨНӨӨДӨР</div>
            <div className={styles.med}>МЭДҮҮШГҮЙ</div>
            <div className={styles.name}>
              "ӨГӨӨЖ БООВ" ТА ХЭВИЙН БООВОО ЭНДЭЭС АВНА УУ!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.div}>
          {/* <Carousel
            className={styles.secondCarousel}
            withIndicators
            height={310}
            slideSize="13%"
            slideGap="md"
            breakpoints={[
              { maxWidth: "lg", slideSize: "20%" },
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
            loop
            align="start"
          >
            <Carousel.Slide className={styles.slide}>1</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>2</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>3</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>4</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>5</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>6</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>7</Carousel.Slide>
          </Carousel> */}

          <Carousel
            withIndicators
            className={styles.secondCarousel}
            height={400}
            slideSize="17.45%"
            slideGap="md"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
            loop
            align="start"
          >
            <Carousel.Slide className={styles.slide}>1</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>2</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>3</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>4</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>5</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>6</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>7</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>8</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>9</Carousel.Slide>
            <Carousel.Slide className={styles.slide}>10</Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

import styles from "./styles/Carousel.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
// "style={{transform:`scale(${props.res}%)`}}"
export const Carousell = (props) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.div}>
        <Carousel
          // withIndicators
          // className={styles.secondCarousel}
          // height={400}
          // slideSize="17.3%"
          // plugins={[autoplay.current]}
          // onMouseEnter={autoplay.current.stop}
          // onMouseLeave={autoplay.current.reset}
          // // breakpoints={[
          // //   { maxWidth: "lg", slideSize: "400px" },
          // //   { maxWidth: "lg", slideSize: "400px" },
          // //   { maxWidth: "md", slideSize: "400px" },
          // //   { maxWidth: "sm", slideSize: "550px" },
          // // ]}
          // loop
          // align="start"
          withIndicators
          className={styles.secondCarousel}
          height="400px"
          slideSize="17.111%"
          slideGap="md"
          breakpoints={
            [
              {maxWidth: "1600px", slideSize: "1%"},
              { maxWidth: "md", slideSize: "14%"   },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]
          }
          loop
          align="start"
        >
          <Carousel.Slide className={styles.slide}>1</Carousel.Slide>
          <Carousel.Slide className={styles.slide}>2</Carousel.Slide>
          <Carousel.Slide className={styles.slide}>3</Carousel.Slide>
          <Carousel.Slide className={styles.slide}>4</Carousel.Slide>
          <Carousel.Slide className={styles.slide}>5</Carousel.Slide>
          <Carousel.Slide className={styles.slide}>5</Carousel.Slide>
          <Carousel.Slide className={styles.slide}>5</Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

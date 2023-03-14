import styles from "./styles/Carousel.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import photo1 from "./assets/image1.jpeg";
import axios from "axios";

export const Carousell = (props) => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  const ImgOverlayExample = (props) => {
    useEffect(() => {
      axios
        .get("http://localhost:3100/articles")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
      <Card
        className={`bg-dark text-white ${styles.CardImg}`}
        style={{
          backgroundImage: `url("${photo1}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
        }}
      >
        <Card.ImgOverlay className={`${styles.Card}`}>
          <Card.Text>3 mins ago</Card.Text>
          <div>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is a wider card with supporting text.</Card.Text>
            <div>Techworm</div>
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  };
  return (
    <div className={styles.containerCarousel}>
      <div className={styles.carouselText}>
        <p className="text-white">Редакцын сонголт</p>
        <p />
      </div>
      <Carousel
        height={450}
        slideSize="20%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "33.3333%" },
          { maxWidth: "xs", slideSize: "60%" },
        ]}
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        onClick={autoplay.current.reset}
        style={{ scrollSnapType: "x mandatory" }}
      >
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
        <Carousel.Slide className={styles.slide}>
          {ImgOverlayExample()}
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

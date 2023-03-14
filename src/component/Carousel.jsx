import styles from "./styles/Carousel.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import photo1 from "./assets/image1.jpeg";
import axios from "axios";

export const Carousell = (props) => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3100/articles")
      .then((res) => {
        console.log(res.data);
        const arr=[...res.data]
        const arr2=[]
        for(let i=arr.length-1;i>=0;i--){
          arr2.push(arr[i])

        }
        console.log(arr2)
        setData(arr2);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ImgOverlayExample = (props) => {
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
        height={"fit-content"}
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
        {data &&
          data.map((item, index) => {
            console.log(item);
            return (
              <Carousel.Slide className={styles.slide}>
                <Card
                  className={`text-white ${styles.CardImg}`}
                  style={{
                    backgroundImage: `url("${item.photoUrl}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                  }}
                >
                  <div className={styles.containerFilterCarousel}>
                    <Card.ImgOverlay className={`${styles.Card}`}>
                      <div className={styles.timeCont}>
                        <Card.Text>{item.createdAt.slice(5,7)+" сарын "+item.createdAt.slice(8,10)  }</Card.Text>
                      </div>

                      <div>
                        <Card.Title className={styles.carouselText}>
                          {item.title}
                        </Card.Title>
                        <button className={styles.categoryButton}>
                          {item.category[0].name}
                        </button>
                      </div>
                    </Card.ImgOverlay>
                  </div>
                </Card>
              </Carousel.Slide>
            );
          })}

        {/* <Carousel.Slide className={styles.slide}>
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
        </Carousel.Slide> */}
      </Carousel>
    </div>
  );
};

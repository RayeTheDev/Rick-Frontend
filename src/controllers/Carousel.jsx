import styles from "./styles/Carousel.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useContext, useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/Data.Provider";

export const Carousell = (props) => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const { data } = useContext(DataContext);
  const Navigate = useNavigate();

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
            return (
              <Carousel.Slide
                className={styles.slide}
                onClick={() => Navigate("/news/" + item._id)}
                key={item+index}
              >
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
                        <Card.Text>
                          {item.createdAt.slice(5, 7) +
                            " сарын " +
                            item.createdAt.slice(8, 10)}
                        </Card.Text>
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
      </Carousel>
    </div>
  );
};

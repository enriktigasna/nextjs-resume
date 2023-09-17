'use client'

import React from 'react';
import Container from '../Container/container';
import styles from "./projectsection.module.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function () {
  return (
    <Container>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
        className={styles.mySwiper}
      >
        <div className={styles.item} data-value="1">
          <h1>Robust API for imageboard forum</h1>
          <img src="/screenshot1.png" alt="" />
        </div>
        <div className={styles.item} data-value="2">
          <h1>API for pasting service</h1>
          <img src="/screenshot2.png" alt="" />
        </div>
        <div className={styles.item} data-value="3">
          <h1>General purpose discord bot written in python</h1>
          <img src="/screenshot3.png" alt="" />
        </div>
        <div className={styles.item} data-value="3">
          <h1>AI and Selfbot trained on scraped messages from discord. (Fine tuned on jpg-j6b)</h1>
          <img src="/screenshot4.png" alt="" />
        </div>
      </Carousel>
    </Container>
  );
}
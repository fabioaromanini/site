import React, { useState } from 'react';
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
} from 'reactstrap';
import axios from 'axios';

import Project from './project';

const CarouselAdapter = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  axios
    .get('https://dx4d3c4h60.execute-api.us-east-1.amazonaws.com/dev/get')
    .then(res => {
      setItems(res.data);
    });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      id="carousel"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map(item => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.name}
          >
            <Project
              name={item.name}
              description={item.description}
              bulletPoints={item.bulletPoints}
            />
          </CarouselItem>
        );
      })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselAdapter;

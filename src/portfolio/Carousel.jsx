import React, { useState } from 'react';
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
} from 'reactstrap';
import Project from './project';

const items = [
  {
    key: 1,
    name: 'lorem',
    description: 'asdsadsadsad asd sadsadsa dsada sdasd sadsad',
  },
  {
    key: 2,
    name: 'stock',
    description: 'asdsadsadsad asd sadsadsa dsada sdasd sadsad',
  },
  {
    key: 3,
    name: 'site',
    description: 'asdsadsadsad asd sadsadsa dsada sdasd sadsad',
  },
];

const CarouselAdapter = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <Project name={item.name} description={item.description} />
      </CarouselItem>
    );
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
      {slides}
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

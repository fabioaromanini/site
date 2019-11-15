import React, { Component } from 'react';
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
} from 'reactstrap';
import axios from 'axios';

import Project from './project';

class CarouselAdapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://dx4d3c4h60.execute-api.us-east-1.amazonaws.com/dev/get')
      .then(res => {
        this.setState({ items: res.data });
      });
  }

  next = () => {
    const { animating, activeIndex, items } = this.state;
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    const { animating, activeIndex, items } = this.state;
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    const { animating } = this.state;
    if (animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex, items } = this.state;
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        id="carousel"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {items.map(item => {
          return (
            <CarouselItem
              onExiting={() => this.setState({ animating: true })}
              onExited={() => this.setState({ animating: false })}
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
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CarouselAdapter;

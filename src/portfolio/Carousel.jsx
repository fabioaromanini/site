import React, { Component } from 'react';
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
} from 'reactstrap';

{
  /* <ul id="itens">
    <li>
        <a target="_blank" rel="noopener noreferrer" href="http://lorem.fabioaromanini.com">
        lorem
        </a>
        , a website for generating lorem ipsum texts. Just like this site, it uses react and is
        deployed on AWS.
        <br />
        It's contact system uses AWS Lambda Functions, and emails are sent to a{' '}
        <a href="https://www.mailinator.com/v3/index.jsp?zone=public&query=contactlorem#/#inboxpane">
        mailinator account
        </a>
        </li>
      <li>
      <a
      target="_blank"
      rel="noopener noreferrer"
          href="http://github.com/fabioaromanini/stock-prices-etl"
          >
          stock-prices-etl
        </a>
        , a serverless etl developed in Google Cloud Platform that extracts stock prices from
        alphavantage API and loads them into Google BigQuery. If you're interested in this pipeline,
        contact me using linkedin and I can show you the project!
        </li>
      </ul> */
}
class MyCarousel extends Component {
  render() {
    const activeIndex = 'lorem';
    return (
      <Carousel activeIndex={activeIndex}>
        <CarouselIndicators
          items={['lorem', 'stock-prices-etl']}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        <CarouselItem key={'eae'}>
          <CarouselCaption captionText={'eae'} captionHeader={'eae'} />
        </CarouselItem>
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

export default MyCarousel;

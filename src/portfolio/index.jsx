/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';

import './portfolio.css';

export default () => (
  <div id="portfolio">
    <h2>portfolio</h2>
    <div id="container">
      <ul id="itens">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://lorem.fabioaromanini.com"
          >
            lorem
          </a>
          , a website for generating lorem ipsum texts. Just like this site, it
          uses react and is deployed on AWS.
          <br />
          It's contact system uses AWS Lambda Functions, and emails are sent to
          a{' '}
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
          , a serverless etl developed in Google Cloud Platform that extracts
          stock prices from alphavantage API and loads them into Google
          BigQuery. If you're interested in this pipeline, contact me using
          linkedin and I can show you the project!
        </li>
      </ul>
    </div>
    <div className="links">
      <a
        href="https://github.com/fabioaromanini/site"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gitIcon} alt="github repository icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/fabioaromanini/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="linkedin icon" />
      </a>
    </div>
  </div>
);

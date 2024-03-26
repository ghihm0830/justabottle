import React from 'react';
import NewsSlider from './NewsSlider';
import NEWS_CONTENTS from '../../newsContents';

export default function News() {
  return (
    <>
      {NEWS_CONTENTS.map(({title, reporter, summary, para1, para2, para3, para4, footer}, index) => (
        <div key={index}>
          <div className='newsSlider-header'>
            <NewsSlider />

            <div className='newsSlider-title'>
              <div>
                  <h1>{title}</h1>
                  <h2>{reporter}</h2>
              </div>

              <p><sup>Summary.</sup> {summary}</p>
            </div>
          </div>

          <div className='newSlider-contents'>
            <div className='newsSlider-paras'>
              <p>{para1}</p>
              <p>{para2}</p>
              <p>{para3}</p>
              <p>{para4}</p>
            </div>
            <h3>{footer}</h3>
          </div>

        </div>
      ))}
    </>
  );
}
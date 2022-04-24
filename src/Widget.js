import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Widget() {

  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
        <div className="widget_articleLeft">
          <FiberManualRecordIcon/>
        </div>
        <div className="widget_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>

        {newsArticle ('Airstrikes hit Western Ukraine','Top news 1,783,595 readers')}
        {newsArticle('Consumer goods to get expensive','3d ago')}
        {newsArticle('How to get promoted at work','4h ago' )}
        {newsArticle('The top voices in gender equity','3h ago')}
        {newsArticle('Is crypto talent leaving Inida?','2h ago')}  

      <p>Show more <KeyboardArrowDownIcon/>
      </p>          
    </div>
  );
}

export default Widget
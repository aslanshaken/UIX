import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import * as React from 'react';

export default function Slider() {
  const [value, setValue] = React.useState<number>(15000)

  const monthValue = React.useMemo(() => {
    let val = 499;
    if (value >= 30000 && value <60000) val = 559;
    else if (value >= 60000 && value <100000) val = 639;
    else if (value >= 100000 && value <150000) val = 739;
    else if (value >= 150000 && value < 200000) val = 839;

    return val.toLocaleString('en-US')
  }, [value])

  return (
    <div className="pricing-details-wrap">
      <div className="price-display-container">
         <Box
          component={'div'}
          display='block'
          id="core-plan-cost-container" className="plan-pricing-price"
        >
          {
            value >= 200000 ?
              <span className="cost-display">Plus</span> :
              <span>
                <span className="pricing-price-discount dollar">$</span><span id="core-cost-display" className="pricing-price-discount">0</span><span className="cost-display">$</span><span id="core-plan-cost-display" className="cost-display">{monthValue}</span><span className="plan-unit">/mo billed annually</span>
              </span>
          }
        </Box>
      </div>
      <div className="price-core-range-container">
        <div className="track-container">
          <div className="w-embed"><input type="range" id="core-plan-expenses" min="0" max="200000" step="250" value={value} onChange={(e) => {
            setValue(parseFloat(e.target.value))
          }} /></div>
          <div className="price-range-tick _1"></div>
          <div className="price-range-tick _2"></div>
          <div className="price-range-tick _3"></div>
          <div className="price-range-tick _4"></div>
          <div className="price-range-tick _5"></div>
        </div>
      </div>
      <div id="plan-pricing-core-expenses-display-container" className="expenses-wrap">
        <div><span id="core-plan-expenses-display">${value.toLocaleString('en-US')}{ value >= 200000 && '+'}</span>&nbsp;<span className="plan-pricing-unit">in monthly expenses</span></div>
      </div>
    </div>
  );
}

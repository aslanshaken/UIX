import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import * as React from 'react';

export default function Slider() {
  const [value, setValue] = React.useState<number>(499)

  const monthValue = React.useMemo(() => {
    return (value / 10).toLocaleString('en-US')
  }, [value])

  return (
    <div className="pricing-details-wrap">
      <div className="price-display-container">
        <Box
          component={'div'}
          display='none'
          id="get-core-container"
          className="pilot-plus-wrap"
        >
          <div>Pilot Plus</div>
        </Box>
         <Box
          component={'div'}
          display='block'
          id="core-plan-cost-container" className="plan-pricing-price"
        >
          <span className="pricing-price-discount dollar">$</span><span id="core-cost-display" className="pricing-price-discount">0</span><span className="cost-display">$</span><span id="core-plan-cost-display" className="cost-display">{monthValue}</span><span className="plan-unit">/mo billed annually<sup>1</sup></span>
        </Box>
      </div>
      <div className="price-core-range-container">
        <div className="track-container">
          <div className="w-embed"><input type="range" id="core-plan-expenses" min="0" max="50000" step="50" value={value} onChange={(e) => {
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
        <div><span id="core-plan-expenses-display">${value.toLocaleString('en-US')}</span>&nbsp;<span className="plan-pricing-unit">in monthly expenses</span></div>
      </div>
    </div>
  );
}

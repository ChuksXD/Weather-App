import React from 'react';
import { AreaClosed } from '@vx/shape';

import { scaleTime, scaleLinear } from '@vx/scale';

import { max, extent } from 'd3-array';
import {Group} from '@vx/group'

import { AxisLeft, AxisBottom } from '@vx/axis';

function DayGraph({forecast}) {
   const  data =forecast.daily.map((Daily,i) =>
   ({"day":Daily.dt,"temp":Daily.temp.max}));console.log(data.day);
    // We'll use some mock data from `@vx/mock-data` for this.
    const width = 750;
    const height = 400;
    const margin = {
        top: 60,
        bottom: 60,
        left: 80,
        right: 80,
      };
      const xMax = width - margin.left - margin.right;
      const yMax = height - margin.top - margin.bottom;
      const x = d => new Date(d.day); // d.date is unix timestamps
const y = d => d.temp;


return (
    <div></div>
)

}

export default DayGraph;
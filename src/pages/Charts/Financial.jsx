import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } 
from '@syncfusion/ej2-react-charts'

import { Header } from '../../components';
import { financialChartData, FinancialPrimaryYAxis, FinancialPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const date1 = new Date('2017, 1, 1')

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial" title="AAPLE Historical" />
      <ChartComponent
      id="charts"
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      chartBar={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]}/>
      <SeriesCollectionDirective>
        <SeriesDirective 
          dataSource={returnValue} 
          xName="x"
          yName="low"
          name="Apple Inc"
          type="Hilo"
          low="low"
          high="high" />
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    
  )
}

export default Financial
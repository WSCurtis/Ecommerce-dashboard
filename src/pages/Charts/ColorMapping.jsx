import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, Tooltip, Legend, RangeColorSettingsDirective } 
from '@syncfusion/ej2-react-charts'

import { Header } from '../../components';
import { colorMappingData, ColorMappingPrimaryYAxis, ColorMappingPrimaryXAxis, rangeColorMapping } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
      <ChartComponent
      id="charts"
      height="420px"
      primaryXAxis={ColorMappingPrimaryXAxis}
      primaryYAxis={ColorMappingPrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      legendSettings={{ mode: 'Range', background: 'white' }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[Category, ColumnSeries, Tooltip, Legend]}/>
      <SeriesCollectionDirective>
        <SeriesDirective 
          dataSource={colorMappingData[0]}
          name="USA"
          xName="x"
          yName="y"
          type="Column"
          conerRadius={{
            topLeft: 10, 
            topRight: 10, 
          }} />
      </SeriesCollectionDirective>
      <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => <RangeColorSettingsDirective key={index} {...item} />)}
      </RangeColorSettingsDirective>
    </ChartComponent>
    </div>
    
  )
}

export default ColorMapping
import { LineChart } from '@mui/x-charts/LineChart';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { calculateEndOfWeekTimestamp, calculateStartOfWeekTimestamp } from '../../util/calculateWeeksAndMonths';
import { useWeekAnalytics } from './hooks/useWeekAnalytics';

const Graph = ({currentWeek}: {currentWeek: number} ) => {

  const { data, isLoading} = useWeekAnalytics(calculateStartOfWeekTimestamp(currentWeek), calculateEndOfWeekTimestamp(currentWeek));
  return (
        <LineChart
                xAxis={[{ data: Object.keys(data ? data: {}), tickSize: 0, scaleType: "point" }]}      
                series={[
                {
                    curve: "linear",
                    data: Object.values(data ? data: {}),
                    color: "#3C1CFD"
                },
                ]}
                margin = {{left: 100, right: 100}}
                slotProps={
                  {
                    loadingOverlay: {message: "Loading"}
                  }
                }
                sx={{
                [`.${axisClasses.root}`]: {
                    [`.${axisClasses.line}`]: {
                      stroke: 'gray',
                      strokeWidth: 0,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                         fill: 'gray',
                         fontSize: '12px', 
                         paddingRight: '10px'
                    },
                },
                [`& .${chartsGridClasses.line}`]: { 
                    stroke: 'rgba(128, 128, 128, 0.2)', 
                    strokeWidth: 1.3
                },
                
                }}
                grid={{ vertical: true, horizontal: true }}
                loading={isLoading}
            />
  )
}

export default Graph

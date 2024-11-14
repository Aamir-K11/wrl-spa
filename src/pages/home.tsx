import Graph from "../components/graph/graph";
import Card from "../components/ui/card"
import WeekSelector from "../components/week-selector/week-selector"
import Error from "../error";
import useWeekSelector from "./hooks/useWeekSelector";
import { ErrorBoundary } from "react-error-boundary";

const Home = () => {
  const { currentWeek, currentMonth, toggleWeek } = useWeekSelector();

  
  return (
    <Card header='Number of Contacts Per Day'>
        <div className='column'> 
            <WeekSelector currentWeek={currentWeek} currentMonth={currentMonth} toggleWeek={toggleWeek}/>
            <ErrorBoundary FallbackComponent={Error}>
               <Graph currentWeek={currentWeek}/> 
            </ErrorBoundary>
        </div>
    </Card>
  )
}

export default Home

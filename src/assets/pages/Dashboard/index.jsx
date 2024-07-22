import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './../../components/Sidebar';
import DailyActivityChart from './../../components/Charts/DailyActivityChart';
import AverageSessionChart from './../../components/Charts/AverageSessionChart';
import GoalChart from './../../components/Charts/GoalChart';
import RadarChartPerformance from './../../components/Charts/RadarChart';
import NutrimentCardGroup from './../../components/NutrimentCardGroup';

const Dashboard = () => {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        const userData = jsonData.USER_MAIN_DATA.find(user => user.id === parseInt(userId));
        const userActivity = jsonData.USER_ACTIVITY.find(activity => activity.userId === parseInt(userId));
        const userAverageSessions = jsonData.USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === parseInt(userId));
        const userPerformance = jsonData.USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId));

        setData({
          ...userData,
          activity: userActivity ? userActivity.sessions : [],
          averageSession: userAverageSessions ? userAverageSessions.sessions : [],
          performance: userPerformance ? userPerformance.data : [],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error: No data found</div>;
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__panel">
        <div className="dashboard__title">
          <h1>
            Bonjour <span className="dashboard__title__name">{data.userInfos.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__charts">
            <DailyActivityChart data={data.activity} />
            <div className="dashboard__charts__wrapper">
              <AverageSessionChart data={data.averageSession} />
              <RadarChartPerformance data={data.performance} />
              <GoalChart data={data.todayScore || data.score} />
            </div>
          </div>
          <div className="dashboard__nutriments">
            <NutrimentCardGroup nutriments={data.keyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

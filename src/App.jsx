import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './components/styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faTachometerAlt, 
  faHistory, 
  faCalendarAlt,
  faClipboardList,
  faChartBar,
  faCommentDots,
  faHeadset,
  faCog
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faTachometerAlt, 
  faHistory, 
  faCalendarAlt,
  faClipboardList,
  faChartBar,
  faCommentDots,
  faHeadset,
  faCog
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar sidebarOpen={sidebarOpen} />
        </div>
        <div className="dashboard-main">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;

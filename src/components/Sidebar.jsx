import React from 'react';
import './styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3>General</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
              <span className="menu-text">Dashboard</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faHistory} className="icon" />
              <span className="menu-text">History</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <span className="menu-text">Calendar</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faClipboardList} className="icon" />
              <span className="menu-text">Appointments</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartBar} className="icon" />
              <span className="menu-text">Statistics</span>
            </li>
          </ul>
        </div>
        
        <div className="sidebar-section">
          <h3>Tools</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCommentDots} className="icon" />
              <span className="menu-text">Chat</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeadset} className="icon" />
              <span className="menu-text">Support</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-section setting">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCog} className="icon" />
              <span className="menu-text">Setting</span>
            </li>
          </ul>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
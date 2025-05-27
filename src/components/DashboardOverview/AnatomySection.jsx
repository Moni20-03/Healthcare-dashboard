import React from 'react';
import HumanBody from '../../assets/human body.jpg';
import HealthStatusCard from './HealthStatusCard';
import LungsIcon from '../../assets/lungs.svg';
import TeethIcon from '../../assets/teeth.svg';
import BoneIcon from '../../assets/bone.svg';
import '../styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="dashboard-container">
      <div className="anatomy-section">
        <div className="human-body-container">
          <div className="human-body">
            <img src={HumanBody} alt="Human Body" />
            <div className="body-card heart-card">
              <span className="card-title">❤️Healthy Heart</span>
            </div>
            <div className="body-card leg-card">
              <span className="card-title">🦵Healthy Leg</span>
            </div>
          </div>
        </div>
        <div className="health-cards">
          <HealthStatusCard 
            organ="Lungs" 
            date="26 Oct 2021" 
            statusColor="#922021" 
            icon={<img src={LungsIcon} alt="Lungs" className="health-icon" />} 
          />
          <HealthStatusCard 
            organ="Teeth" 
            date="26 Oct 2021" 
            statusColor="#00F0FF" 
            icon={<img src={TeethIcon} alt="Teeth" className="health-icon" />} 
          />
          <HealthStatusCard 
            organ="Bone" 
            date="26 Oct 2021" 
            statusColor="#FF4D4F" 
            icon={<img src={BoneIcon} alt="Bone" className="health-icon" />} 
          />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
import { useState } from 'react';
import css from './Tabs.module.css';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';

export const Tabs = ({ camper }) => {
  const [activeTab, setActiveTab] = useState('features');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={css.container}>
      <div className={css.tabs}>
        <button
          className={`${css.tab} ${
            activeTab === 'features' ? `${css.active}` : ''
          }`}
          onClick={() => handleTabClick('features')}
        >
          Features
        </button>
        <button
          className={`${css.tab} ${
            activeTab === 'reviews' ? `${css.active}` : ''
          }`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className={css.tabWrapper}>
        {activeTab === 'features' && <Features />}
        {activeTab === 'reviews' && <Reviews />}
      </div>
    </div>
  );
};

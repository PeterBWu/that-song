import React from 'react';
import './style.css';

const ProfileTab = props => {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  )
}

export default ProfileTab;
import React from "react";

type LocationAndTimeProps = {
  icon: React.ReactElement;
  text: string;
  classes: string;
};

const LocationAndTime = ({ icon, text, classes }: LocationAndTimeProps) => {
  return (
    <div className={classes}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default LocationAndTime;

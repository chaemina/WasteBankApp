import React from 'react';
import OrangeIcon from "../assets/Imgaes/OrangeIcon.svg"
import GreenIcon from "../assets/Imgaes/GreenIcon.svg"
import RedIcon from "../assets/Imgaes/RedIcon.svg"
import GrayIcon from "../assets/Imgaes/GrayIcon.svg"

export const getIcon = (daysSinceRegistration: number) => {
  if (daysSinceRegistration === 0) {
    return <GreenIcon width={35} height={35} />
  } else if (daysSinceRegistration === 1) {
    return <OrangeIcon width={35} height={35} />
  } else if (daysSinceRegistration >= 2) {
    return <RedIcon width={35} height={35} />
  } else {
    return <GrayIcon width={35} height={35} />
  }
};

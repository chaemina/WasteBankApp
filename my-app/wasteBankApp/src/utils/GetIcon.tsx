import React from 'react';
import OrangeIcon from "../assets/Imgaes/OrangeIcon.svg"
import GreenIcon from "../assets/Imgaes/GreenIcon.svg"
import RedIcon from "../assets/Imgaes/RedIcon.svg"
import GrayIcon from "../assets/Imgaes/GrayIcon.svg"
import CollectorIcon from "../assets/Imgaes/CollectorIcon.svg"

// 매치 여부로 아이콘 혹은 버튼 출력
export const getIcon = (daysSinceRegistration: number) => {
  if (daysSinceRegistration === 0) {
    return <GreenIcon width={35} height={35} />
  } else if (daysSinceRegistration === 1) {
    return <OrangeIcon width={35} height={35} />
  } else if (daysSinceRegistration >= 2) {
    return <RedIcon width={35} height={35} />
  } else {
    return <CollectorIcon width={35} height={35} />
  }
};

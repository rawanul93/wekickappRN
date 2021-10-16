import React from 'react';
import Svg, { Path } from "react-native-svg"

export const CreateIcon = () => {
    return (
      <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.2 6h-2.4v4.8H6v2.4h4.8V18h2.4v-4.8H18v-2.4h-4.8V6z"
        fill="#6A6A6A"
      />
      <Path
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 21.6c-5.293 0-9.6-4.307-9.6-9.6 0-5.293 4.307-9.6 9.6-9.6 5.293 0 9.6 4.307 9.6 9.6 0 5.293-4.307 9.6-9.6 9.6z"
        fill="#6A6A6A"
      />
    </Svg>
    );

};

export const CreateIconActive = () => {
    return (
        <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6 13.2h-4.8V18h-2.4v-4.8H6v-2.4h4.8V6h2.4v4.8H18v2.4z"
          fill="#00A355"
        />
      </Svg>
    );

};


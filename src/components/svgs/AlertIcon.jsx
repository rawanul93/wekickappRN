import React from 'react';
import Svg, { Path } from "react-native-svg"

export const AlertIcon = () => {
    return (
        <Svg
        width={22}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.556 13.903V9.6c0-3.86-2.671-7.112-6.289-8.09A2.432 2.432 0 0011 0C9.966 0 9.09.624 8.733 1.51c-3.618.979-6.289 4.23-6.289 8.09v4.303L.358 15.952A1.194 1.194 0 000 16.8v2.4c0 .318.129.623.358.849.23.225.54.351.864.351h19.556c.324 0 .635-.126.864-.351.23-.226.358-.53.358-.849v-2.4a1.178 1.178 0 00-.358-.848l-2.086-2.049zm0 4.097H2.444v-.703l2.087-2.049a1.194 1.194 0 00.358-.848V9.6c0-3.308 2.741-6 6.111-6 3.37 0 6.111 2.692 6.111 6v4.8c0 .32.128.624.358.848l2.087 2.049V18zM11 24a3.69 3.69 0 002.113-.66 3.583 3.583 0 001.331-1.74H7.556c.249.702.714 1.31 1.331 1.74A3.69 3.69 0 0011 24z"
          fill="#6A6A6A"
        />
      </Svg>
    );

};

export const AlertIconActive = () => {
    return (
        <Svg
            width={22}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <Path
                d="M11 24a3.69 3.69 0 002.113-.66 3.583 3.583 0 001.331-1.74H7.556c.249.702.714 1.31 1.331 1.74A3.69 3.69 0 0011 24zm8.556-8.897V9.6c0-3.86-2.671-7.112-6.289-8.09A2.432 2.432 0 0011 0C9.966 0 9.09.624 8.733 1.51c-3.618.979-6.289 4.23-6.289 8.09v5.503L.358 17.152A1.194 1.194 0 000 18v1.2c0 .318.129.623.358.849.23.225.54.351.864.351h19.556c.324 0 .635-.126.864-.351.23-.226.358-.53.358-.849V18a1.178 1.178 0 00-.358-.848l-2.086-2.049z"
                fill="#00A355"
            />
        </Svg>
    );

};


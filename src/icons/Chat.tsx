import * as React from "react";
import { SVGProps } from "react";
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <defs>
      <path id="chat_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g opacity={0.8}>
      <mask id="chat_svg__b" fill="#fff">
        <use xlinkHref="#chat_svg__a" />
      </mask>
      <g mask="url(#chat_svg__b)">
        <path
          d="M6.67 0C2.98 0 0 2.98 0 6.67v6.66h6.67c3.68 0 6.66-2.98 6.66-6.66A6.66 6.66 0 0 0 6.67 0Z"
          style={{
            stroke: "#a6a6a6",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.333 1.333)"
        />
        <path
          d="M0 0h6"
          style={{
            stroke: "#a6a6a6",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(4.667 6)"
        />
        <path
          d="M0 0h6"
          style={{
            stroke: "#a6a6a6",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(4.667 8.667)"
        />
        <path
          d="M0 0h3.33"
          style={{
            stroke: "#a6a6a6",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(4.667 11.333)"
        />
      </g>
    </g>
  </svg>
);
export default SvgChat;

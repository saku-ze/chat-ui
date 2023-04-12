import * as React from "react";
import { SVGProps } from "react";
const SvgSendWhite = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="send-white_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="send-white_svg__b" fill="#fff">
        <use xlinkHref="#send-white_svg__a" />
      </mask>
      <g mask="url(#send-white_svg__b)">
        <path
          d="M0 4.71 6.67 6l1.67 6.67L12.67 0 0 4.71Z"
          style={{
            stroke: "#fff",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.333 2)"
        />
        <path
          d="M0 1.89 1.89 0"
          style={{
            stroke: "#fff",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(8.003 6.117)"
        />
      </g>
    </g>
  </svg>
);
export default SvgSendWhite;

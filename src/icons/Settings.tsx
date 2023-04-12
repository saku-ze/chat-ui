import * as React from "react";
import { SVGProps } from "react";
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="settings_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="settings_svg__b" fill="#fff">
        <use xlinkHref="#settings_svg__a" />
      </mask>
      <g mask="url(#settings_svg__b)">
        <path
          d="M13.33 5.67 10 0H3.33L0 5.67l3.33 5.66H10l3.33-5.66Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.333 2.333)"
        />
        <path
          d="M3.33 1.67C3.33.75 2.59 0 1.67 0 .75 0 0 .75 0 1.67c0 .92.75 1.66 1.67 1.66.92 0 1.66-.74 1.66-1.66Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(6.333 6.333)"
        />
      </g>
    </g>
  </svg>
);
export default SvgSettings;

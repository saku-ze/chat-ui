import * as React from "react";
import { SVGProps } from "react";
const SvgReturn = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="return_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="return_svg__b" fill="#fff">
        <use xlinkHref="#return_svg__a" />
      </mask>
      <g mask="url(#return_svg__b)">
        <path
          d="M2.33 0 0 2l2.33 2.33"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 2.667)"
        />
        <path
          d="M0 0h7.66c2.3 0 4.25 1.87 4.34 4.17.09 2.42-1.91 4.5-4.34 4.5H2"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 4.667)"
        />
      </g>
    </g>
  </svg>
);
export default SvgReturn;

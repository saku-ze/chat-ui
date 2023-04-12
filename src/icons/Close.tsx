import * as React from "react";
import { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="close_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="close_svg__b" fill="#fff">
        <use xlinkHref="#close_svg__a" />
      </mask>
      <g mask="url(#close_svg__b)">
        <path
          d="m0 0 10.67 10.67M0 10.67 10.67 0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2.667 2.667)"
        />
      </g>
    </g>
  </svg>
);
export default SvgClose;

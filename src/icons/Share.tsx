import * as React from "react";
import { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="share_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="share_svg__b" fill="#fff">
        <use xlinkHref="#share_svg__a" />
      </mask>
      <g mask="url(#share_svg__b)">
        <path
          d="M6.67 3.67C1.67 3.67 0 7.33 0 13c0 0 2-5 6.67-5v3.67l6-5.67-6-6v3.67Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 1.333)"
        />
      </g>
    </g>
  </svg>
);
export default SvgShare;

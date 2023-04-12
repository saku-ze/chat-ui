import * as React from "react";
import { SVGProps } from "react";
const SvgReload = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="reload_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="reload_svg__b" fill="#fff">
        <use xlinkHref="#reload_svg__a" />
      </mask>
      <g mask="url(#reload_svg__b)">
        <path
          d="M0 0v5.33"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(14 2.667)"
        />
        <path
          d="M0 0v5.33"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 8)"
        />
        <path
          d="M12.003 6a6.005 6.005 0 0 0-10.32-4.17M0 6a6.005 6.005 0 0 0 10.17 4.32"
          style={{
            stroke: "#333",
            strokeWidth: 1.333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 2)"
        />
      </g>
    </g>
  </svg>
);
export default SvgReload;

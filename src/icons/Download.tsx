import * as React from "react";
import { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="download_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="download_svg__b" fill="#fff">
        <use xlinkHref="#download_svg__a" />
      </mask>
      <g mask="url(#download_svg__b)">
        <path
          d="M1 12h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1Z"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 2)"
        />
        <path
          d="M0 0h3.67l.66 1.33H9L9.67 0h3.66"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(1.333 10.333)"
        />
        <path
          d="M0 3.33V0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(14 8.667)"
        />
        <path
          d="m0 0 2 2 2-2"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(6 7.333)"
        />
        <path
          d="M0 5.33V0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(8 4)"
        />
        <path
          d="M0 3.33V0"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 8.667)"
        />
      </g>
    </g>
  </svg>
);
export default SvgDownload;

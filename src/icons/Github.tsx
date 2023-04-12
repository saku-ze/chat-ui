import * as React from "react";
import { SVGProps } from "react";
const SvgGithub = (props: SVGProps<SVGSVGElement>) => (
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
      <path id="github_svg__a" d="M0 0h16v16H0z" />
    </defs>
    <g>
      <mask id="github_svg__b" fill="#fff">
        <use xlinkHref="#github_svg__a" />
      </mask>
      <g mask="url(#github_svg__b)">
        <path
          d="M7.11 8.51c.81-.16 1.53-.45 2.1-.87.96-.73 1.46-1.85 1.46-2.95 0-.78-.3-1.5-.81-2.11-.28-.34.55-2.89-.19-2.55-.73.34-1.81 1.1-2.38.94C6.68.79 6.02.69 5.33.69c-.6 0-1.17.07-1.71.21-.79.2-1.53-.54-2.29-.87C.58-.29.99 2.34.77 2.62.28 3.22 0 3.93 0 4.69c0 1.1.6 2.22 1.56 2.95.65.48 1.45.78 2.35.94"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2.667 1.645)"
        />
        <path
          d="M.58 0C.19.43 0 .83 0 1.21v2.91"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(6 10.22)"
        />
        <path
          d="M0 0c.37.48.55.91.55 1.29v2.89"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(9.782 10.159)"
        />
        <path
          d="M0 0c.3.04.52.17.67.41C.88.77 1.69 2.1 2.61 2.1H4"
          style={{
            stroke: "#333",
            strokeWidth: 1.3333333333333333,
            strokeOpacity: 1,
            strokeDasharray: "0 0",
          }}
          transform="translate(2 10.405)"
        />
      </g>
    </g>
  </svg>
);
export default SvgGithub;

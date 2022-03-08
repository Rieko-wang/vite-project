import React from "react";
import PropTypes from "prop-types";
import svgManifest from "@/components/assets-json/svg.json";

interface IProps {
  className: string;
  hash: string;
  attributes: any;
  name: "account-modal" | "app-download" | "global";
}

const Svg = (props: IProps) => (
  // <img
  //   src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0827%2Fc0c92bd51bb72e6d12d5b877dce338e8.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649315375&t=f743ae7986a5df64536af6f06119bd8d"
  //   alt=""
  // />
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    {...props.attributes}
  >
    {/* <use xlinkHref={`${svgManifest[props.name].svg}#${props.hash}`} /> */}
    <use xlinkHref={`${svgManifest[props.name].svg}#${props.hash}`} />
  </svg>
);

Svg.defaultProps = {
  name: "global",
  attributes: {},
};

export default Svg;

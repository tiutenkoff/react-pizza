import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="280" rx="6" ry="6" width="260" height="26" /> 
    <rect x="-1" y="415" rx="5" ry="5" width="86" height="31" /> 
    <rect x="0" y="315" rx="6" ry="6" width="260" height="84" /> 
    <rect x="116" y="408" rx="20" ry="20" width="144" height="38" />
  </ContentLoader>
)

export default LoadingBlock;
import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props:any) => (
<ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    
    <rect x="4" y="8" rx="3" ry="3" width="80" height="120" /> 
    <rect x="95" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="95" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="95" y="56" rx="3" ry="3" width="210" height="6" /> 
    <rect x="95" y="72" rx="3" ry="3" width="280" height="6" /> 
    <rect x="95" y="88" rx="3" ry="3" width="178" height="6" />
    <rect x="95" y="104" rx="3" ry="3" width="150" height="6" /> 
    
    
  </ContentLoader>
  


)

export default MyLoader
import React from "react";
import { useEffect } from "react";


function Error404() {
  useEffect(()=>{
    document.title = "404 | Error"
  },['title'])
  return (
    <div>404 ERROR PAGE NOT FOUND</div>
  )
}

export default Error404
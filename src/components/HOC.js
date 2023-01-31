import React from "react";

const HOC = (Component) => {

  const SampleObject = {
    name: "shshs",
    role: "hshsh",
    company: "shshu"
  }
  return () =><Component value={SampleObject} />

}
export default HOC
import React from "react";

function InputLogin(props, ref) {
  return <input ref={ref} {...props} className="w-full border-0 outline-0 " />;
}
export default React.forwardRef(InputLogin);

import React, { useState } from "react";
import quiz from "./data";

const AppAccordian = () => {
  const [data, setdata] = useState(quiz);

  const [loading, setloading] = useState(false);

  const handleOnClick = (id) => {

    setloading(id === loading ? null : id);
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="mt-10">
            <div key={item.id}>
              <div className="cursor-pointer" onClick={()=>handleOnClick(item.id)}>{item.question}</div>
              {loading === item.id ? <div>{item.answer }</div>:null }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppAccordian;

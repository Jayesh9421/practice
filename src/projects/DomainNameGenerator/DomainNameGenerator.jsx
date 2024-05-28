import React, { useState } from "react";

const DomainNameGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const [domain, setDomain] = useState("");

  const createDomain = () => {
    const newName = `${keyword}.com`;
    setDomain(newName);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div>
          <h1 className="font-semibold text-lg mb-4 text-center text-yellow-800">Create Domain Name</h1>
        </div>
        <div className="space-x-4">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter the name"
            className="py-2 bg-gray-200 outline-none pl-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={createDomain}
          >
            Click
          </button>
          <div>{domain}</div>
        </div>
      </div>
    </div>
  );
};

export default DomainNameGenerator;

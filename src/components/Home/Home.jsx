import React from "react";

const Home = () => {
  return (
    <div className="mt-20">
      <form id="password-form" className="space-x-4">
        <label for="password-input">Password:</label>
        <input className="border" type="text" id="password-input" readonly />
        <button type="submit" className="">
          Generate Password
        </button>
      </form>
    </div>
  );
};

export default Home;

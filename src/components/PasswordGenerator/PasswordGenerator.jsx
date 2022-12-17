/* Define some custom styles for the button and password display */

import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);

  console.log("passLength-->", passLength);

  function generatePassword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = '!"#$%&*+-/:;<=>?@^[\\]^_`{|}~';

    let allChars = lowerCase + upperCase + numbers + symbols;
    let password = "";

    for (let i = 0; i < passLength; i++) {
      const index = Math.floor(Math.random() * allChars.length);
      password += allChars[index];
    }

    setPassword(password);
  }

  useEffect(() => {
    generatePassword();
  }, [passLength]);

  let passwordStrength;

  if (passLength == 0) {
    passwordStrength = <span>{""}</span>;
  }
  if (passLength >= 4) {
    passwordStrength = (
      <span className="rounded bg-red-400 p-2 text-white">VERY WEAK</span>
    );
  }
  if (passLength >= 5) {
    passwordStrength = (
      <span className="rounded bg-red-400 p-2 text-white">WEAK</span>
    );
  }
  if (passLength >= 8) {
    passwordStrength = (
      <span className="rounded bg-[#F1C80B] p-2 text-white">GOOD</span>
    );
  }
  if (passLength >= 10) {
    passwordStrength = (
      <span className="rounded bg-[#43ed9c] p-2 text-white">STRONG</span>
    );
  }
  if (passLength >= 12) {
    passwordStrength = (
      <span className="rounded bg-[#0070f6] p-2 text-white">VERY STRONG</span>
    );
  }

  return (
    <div className="mt-20 text-center">
      <div className="space-y-16 py-4">
        <h1 className="text-6xl font-extrabold">Random Password Generator</h1>
        <p className="text-lg font-medium">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>

      <div className="mt-20 flex items-center justify-center space-x-4">
        <p className="password">
          {password} {passwordStrength}
        </p>
        <div>
          <button className="button">Copy</button>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-12">
        <p className="text-lg font-normal">
          Password length: <span className="font-medium">{passLength}</span>{" "}
        </p>
        <div className="w-52">
          <Slider value={passLength} max={20} onChange={setPassLength} />
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
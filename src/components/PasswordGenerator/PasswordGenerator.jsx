/* Define some custom styles for the button and password display */

import React, { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);

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

  if (passLength >= 12) {
    passwordStrength = (
      <span className="whitespace-nowrap rounded bg-[#0070f6] p-2 font-medium text-white">
        VERY STRONG
      </span>
    );
  } else if (passLength >= 10) {
    passwordStrength = (
      <span className="rounded bg-[#43ed9c] p-2 font-medium text-white">
        STRONG
      </span>
    );
  } else if (passLength >= 8) {
    passwordStrength = (
      <span className="rounded bg-[#F1C80B] p-2 font-medium text-white">
        GOOD
      </span>
    );
  } else if (passLength >= 5) {
    passwordStrength = (
      <span className="rounded bg-red-400 p-2 font-medium text-white">
        WEAK
      </span>
    );
  } else if (passLength >= 1) {
    passwordStrength = (
      <span className="rounded bg-red-400 p-2 font-medium text-white">
        VERY WEAK
      </span>
    );
  } else {
    passwordStrength = <span>{""}</span>;
  }

  const passwordRef = useRef(null);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(passwordRef.current.innerText);
  };

  const Modal = (
    <div className="text-left">
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label
            htmlFor="my-modal-4"
            className="btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Password copied to clipboard ✔️</h3>
          <p className="py-4">
            To paste the password someplace else, press{" "}
            <span className="font-medium">CTRL + V</span> on your keyboard.
          </p>
        </label>
      </label>
    </div>
  );

  return (
    <div className="py-20 text-center">
      <div className="space-y-16 py-4">
        <h1 className="text-6xl font-extrabold">Random Password Generator</h1>
        <p className="text-lg font-medium">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>

      {/* <div className="mx-auto mt-20 w-fit items-center space-y-4 space-x-4 lg:flex lg:space-y-0">
        <div className="flex w-fit items-center  space-x-4 rounded-full border border-solid border-[#d4d2e6] p-4">
          <p className="password test" ref={passwordRef}>
            {password}
          </p>
          <span>{passwordStrength}</span>
        </div>
        <label
          htmlFor="my-modal-4"
          className="btn rounded-full border-none bg-[#0070f6] px-8 shadow-md hover:scale-110 hover:bg-[#0070f6]"
          onClick={handleCopyToClipboard}
        >
          Copy
        </label>

        {Modal}
      </div> */}
      <section className="mx-auto w-full grid-cols-2 gap-4 sm:w-1/2 lg:grid">
        <div className="">
          <p>{passwordStrength}</p>
          <p className="password overflow-hidden rounded-full border border-solid border-[#d4d2e6] p-3">
            {password}
          </p>

          {/* <input
            className="password rounded-full border border-solid border-[#d4d2e6]"
            type="text "
            value={password}
          /> */}
        </div>
        <div>
          <label
            htmlFor="my-modal-4"
            className="btn rounded-full border-none bg-[#0070f6] px-8 shadow-md hover:scale-110 hover:bg-[#0070f6]"
            onClick={handleCopyToClipboard}
          >
            Copy
          </label>
          {Modal}
        </div>
      </section>

      <section className="mt-8 items-center justify-center space-y-4 px-8 lg:flex lg:space-y-0 lg:space-x-12">
        <p className="text-lg font-normal">
          Password length: <span className="font-medium">{passLength}</span>{" "}
        </p>
        <div className="lg:w-52">
          <Slider
            value={passLength}
            max={50}
            min={1}
            onChange={setPassLength}
          />
        </div>
      </section>
    </div>
  );
};

export default PasswordGenerator;

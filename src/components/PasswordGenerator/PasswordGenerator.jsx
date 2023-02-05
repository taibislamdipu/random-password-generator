/* Define some custom styles for the button and password display */

import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useMediaQuery } from "react-responsive";
import ConfirmationModal from "./ConfirmationModal";
import CopyToClipboard from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);
  const [copied, setCopied] = useState(false);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1224px)" });

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

  return (
    <div className="py-20 text-center">
      <div className="space-y-8 py-4 lg:space-y-16">
        <h1 className="text-4xl font-extrabold lg:text-6xl">
          Random Password Generator
        </h1>
        <p className="text-xl font-medium lg:text-lg">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>

      {isSmallScreen ? (
        <section className="mx-auto mt-8 space-y-4">
          <p>{passwordStrength}</p>
          <p className="password mx-4 overflow-hidden rounded-lg border border-solid border-[#d4d2e6] bg-white p-3">
            {password}
          </p>

          <div>
            <CopyToClipboard text={password} onCopy={() => setCopied(true)}>
              <label
                htmlFor="my-modal-4"
                className="btn mx-auto flex w-fit gap-2 rounded-full border-none bg-[#0070f6] px-8 hover:scale-110 hover:bg-[#0070f6]"
              >
                COPY <AiOutlineCopy size={23} />
              </label>
            </CopyToClipboard>
            <ConfirmationModal />
          </div>
        </section>
      ) : (
        <section className="mx-auto mt-20 w-fit items-center space-y-4 space-x-4 lg:flex lg:space-y-0">
          <div className="flex w-fit items-center space-x-4 rounded-full border border-solid border-[#d4d2e6] bg-white p-4">
            <p className="password ">{password}</p>
            <span>{passwordStrength}</span>
          </div>

          <CopyToClipboard text={password} onCopy={() => setCopied(true)}>
            <label
              htmlFor="my-modal-4"
              className="btn flex gap-2 rounded-full border-none bg-[#0070f6] px-8 hover:scale-110 hover:bg-[#0070f6]"
            >
              COPY <AiOutlineCopy size={23} />
            </label>
          </CopyToClipboard>
          <ConfirmationModal />
        </section>
      )}

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

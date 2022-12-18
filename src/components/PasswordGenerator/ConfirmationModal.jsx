import React from "react";

const ConfirmationModal = () => {
  return (
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
};

export default ConfirmationModal;

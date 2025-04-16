import React from "react";

interface Props {
  children?: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary  alert-dismissible" role="alert">
      {children}
      <button
        aria-label="Close"
        className="btn close"
        data-dismiss="alert"
        type="button"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;

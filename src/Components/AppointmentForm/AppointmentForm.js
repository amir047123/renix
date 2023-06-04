import React from "react";
import { useParams } from "react-router-dom";

const AppointmentForm = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>This is appointment form {id}</h2>
    </div>
  );
};

export default AppointmentForm;

import React, { useState } from "react";

const WeightInput = ({ setWheightInputActive, style }) => {
  const [weight, setWeight] = useState("");

  const handleNumberClick = (num) => {
    if (num === 0 && weight === "") return;

    if (num === "." && !weight.includes(".")) {
      setWeight(weight + num);
      return;
    }

    const [integerPart, decimalPart] = weight.split(".");

    if (!weight.includes(".") && integerPart.length >= 3) return;

    if (decimalPart && decimalPart.length >= 2) return;

    setWeight(weight + num);
  };

  const handleDelete = () => {
    setWeight(weight.slice(0, -1)); // Elimina el último carácter del input
  };

  return (
    <div id="weight-input" style={style}>
      <div id="box">
        <form>
          <div id="input-container">
            <input
              type="text"
              placeholder="Peso (kg)"
              value={weight ? `${weight} kg` : ""}
              readOnly
            />
            <div id="delete-container" onClick={handleDelete} style={{ cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
            </div>
          </div>
          <div id="keyboard">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((num, index) => (
              <p
                key={index}
                className={`number${num === "" ? " hide" : ""}`}
                onClick={() => num !== "" && handleNumberClick(num)}
              >
                {num}
              </p>
            ))}
          </div>
          <div id="options">
            <p onClick={() => setWheightInputActive(false)}>Cancelar</p>
            <p>Aceptar</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WeightInput;

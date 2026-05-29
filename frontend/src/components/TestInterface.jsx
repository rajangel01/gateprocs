import React, { useState } from "react";
import questions from "./Questions/TodayQuestion";

function TestInterface() {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center bg-white shadow p-3 rounded">

        <h3 className="fw-bold text-primary">
          GATE CSE Test Series
        </h3>

        <div className="bg-danger text-white px-4 py-2 rounded">
          Time Left: 03:00:00
        </div>
      </div>

      <div className="row mt-4">

        {/* Left Side Question Panel */}
        <div className="col-lg-8">

          <div className="bg-white shadow rounded p-4">

            <h5 className="fw-bold">
              Question {currentQuestion + 1}
            </h5>

            <p className="mt-3 fs-5">
              {questions[currentQuestion].question}
            </p>

            {/* Options */}
            <div className="mt-4">

              {questions[currentQuestion].options.map((option, index) => (

                <div
                  key={index}
                  className={`border rounded p-3 mb-3 cursor-pointer ${
                    selectedAnswers[currentQuestion] === option
                      ? "border-primary bg-light"
                      : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                  style={{ cursor: "pointer" }}
                >
                  {option}
                </div>

              ))}
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">

              <button
                className="btn btn-secondary"
                disabled={currentQuestion === 0}
                onClick={() =>
                  setCurrentQuestion(currentQuestion - 1)
                }
              >
                Previous
              </button>

              <button className="btn btn-warning">
                Mark For Review
              </button>

              <button
                className="btn btn-primary"
                disabled={currentQuestion === questions.length - 1}
                onClick={() =>
                  setCurrentQuestion(currentQuestion + 1)
                }
              >
                Next
              </button>

            </div>
          </div>
        </div>

        {/* Right Side Question Numbers */}
        <div className="col-lg-4">

          <div className="bg-white shadow rounded p-4">

            <h5 className="fw-bold mb-4">
              Question Palette
            </h5>

            <div className="d-flex flex-wrap gap-3">

              {questions.map((q, index) => (

                <button
                  key={index}
                  className={`btn ${
                    selectedAnswers[index]
                      ? "btn-success"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>

              ))}

            </div>

            
            <button className="btn btn-danger w-100 mt-5">
              Submit Test
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default TestInterface;
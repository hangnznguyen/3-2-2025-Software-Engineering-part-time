import { useState } from "react";

function ReactForms() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    if (firstName === "") {
      setSubmitResult("First name cannot be empty");
    } else if (lastName === "") {
      setSubmitResult("Last name cannot be empty");
    } else if (email === "") {
      setSubmitResult("Email cannot be empty");
    } else {
      setSubmitResult("Form submitted successfully");
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Email ID:
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      {/* Display the result message */}
      <p>{submitResult}</p>
    </>
  );
}

export default ReactForms;
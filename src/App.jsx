
import { useState } from "react";

function App() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  // State for validation and submitted data
  const [error, setError] = useState("");
  const [student, setStudent] = useState(null);

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Validation
    if (!name || !email || !age || !gender || !course) {
      setError("Please fill in all fields.");
      setStudent(null);
      return;
    }

    if (Number(age) <= 0) {
      setError("Age must be greater than 0.");
      setStudent(null);
      return;
    }

    // Save submitted student information
    setStudent({
      name,
      email,
      age,
      gender,
      course,
    });

    setError("");
  }

  return (
    <div>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Student Name */}
        <label>Student Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="Enter your name"
        />

        <br /><br />

        {/* Student Email */}
        <label>Student Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          placeholder="Enter your email"
        />

        <br /><br />

        {/* Student Age */}
        <label>Student Age:</label>
        <input
          type="number"
          value={age}
          onChange={(event) =>
            setAge(event.target.value)
          }
          placeholder="Enter your age"
        />

        <br /><br />

        {/* Gender */}
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(event) =>
            setGender(event.target.value)
          }
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <br /><br />

        {/* Course */}
        <label>Course:</label>
        <select
          value={course}
          onChange={(event) =>
            setCourse(event.target.value)
          }
        >
          <option value="">Select Course</option>
          <option value="ReactJS">ReactJS</option>
          <option value="Python">Python</option>
          <option value="PHP">PHP</option>
          <option value="Node.js">Node.js</option>
        </select>

        <br /><br />

        {/* Submit Button */}
        <button type="submit">
          Register Student
        </button>
      </form>

      {/* Display Validation Error */}
      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {/* Display Submitted Information */}
      {student && (
        <div>
          <h2>Registration Successful!</h2>

          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <p>Gender: {student.gender}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;

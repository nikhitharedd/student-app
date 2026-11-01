import React, { useState } from 'react';

function StudentForm() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !rollNo.trim()) {
      alert('Please fill in all fields');
      return;
    }

    alert(`Student Registered!\nName: ${name}\nRoll No: ${rollNo}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Roll Number: </label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;
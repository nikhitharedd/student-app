import React from 'react';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Student App</h1>
      <StudentForm />
    </div>
  );
}

export default App;
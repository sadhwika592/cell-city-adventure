import React, { useEffect, useState } from 'react';

function App() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetch('https://cell-city-api.onrender.com/api/quiz')
      .then((res) => res.json())
      .then((data) => setQuiz(data))
      .catch((err) => console.error('Error fetching quiz:', err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🧬 Cell City Adventure</h1>
      <p>Explore cell structures and test your knowledge!</p>

      <h2>📚 Quiz Time</h2>
      {quiz.length > 0 ? (
        <ul>
          {quiz.map((q, index) => (
            <li key={index}>
              <strong>Q:</strong> {q.question} <br />
              <strong>A:</strong> {q.answer}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading quiz...</p>
      )}
    </div>
  );
}

export default App;

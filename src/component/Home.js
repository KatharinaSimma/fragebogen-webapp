import { useEffect, useState } from 'react';
import IterationCard from './IterationCard';

const iterationsExample = [
  {
    iterationName: 'First Iteration',
    iterationDate: '2021-01-01',
    iterationState: 'abgeschlossen',
    iterationAnswers: [
      { questionText: 'How do you feel right now?', answer: 'Good' },
      { questionText: 'How is the weather today?', answer: 'Sunny' },
      { questionText: 'How did you sleep last night?', answer: 'Meh' },
    ],
  },
  {
    iterationName: 'Second Iteration',
    iterationDate: '2021-01-01',
    iterationState: 'abgeschlossen',
    iterationAnswers: [
      { questionText: 'How do you feel right now?', answer: 'Good' },
      { questionText: 'How is the weather today?', answer: 'Sunny' },
      { questionText: 'How did you sleep last night?', answer: 'Meh' },
    ],
  },
  {
    iterationName: 'Third Iteration',
    iterationDate: '2021-01-01',
    iterationState: 'abgeschlossen',
    iterationAnswers: [
      { questionText: 'How do you feel right now?', answer: 'Good' },
      { questionText: 'How is the weather today?', answer: 'Sunny' },
      { questionText: 'How did you sleep last night?', answer: 'Meh' },
    ],
  },
];

function Home() {
  const [iterations, setIterations] = useState([]);

  useEffect(() => {
    const iterationsFromStorage = JSON.parse(
      localStorage.getItem('iterations'),
    );
    if (iterationsFromStorage) {
      setIterations(iterationsFromStorage);
    }
  }, []);

  console.log('iterations', iterations);
  return (
    <div>
      <h1>Dashboard</h1>
      {iterations.map((iteration) => {
        return (
          <IterationCard
            key={`iteration-${iteration.iterationName}`}
            iteration={iteration}
          />
        );
      })}
    </div>
  );
}

export default Home;

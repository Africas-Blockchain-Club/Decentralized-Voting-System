import React, { useState } from 'react';
import Layout from '../components/layout';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Candidate {
  id: number;
  name: string;
}

const candidates: Candidate[] = [
  { id: 1, name: 'Candidate A' },
  { id: 2, name: 'Candidate B' },
  { id: 3, name: 'Candidate C' },
];

const CastVote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCandidateSelect = (candidateId: number) => {
    setSelectedCandidate(candidateId);
  };

  const handleSubmitVote = () => {
    if (selectedCandidate !== null) {
      // Here you can implement the logic to submit the vote, e.g., sending a request to a server
      console.log(`Voted for candidate ${selectedCandidate}`);
      setSubmitted(true);
    } else {
      alert('Please select a candidate before submitting your vote.');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mx-auto h-screen">
        <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="mb-4 text-2xl font-semibold text-gray-900">Cast Your Vote</h1>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {candidates.map(candidate => (
              <div key={candidate.id} className="flex items-center">
                <input
                  type="radio"
                  id={`candidate-${candidate.id}`}
                  name="candidate"
                  value={candidate.id}
                  checked={selectedCandidate === candidate.id}
                  onChange={() => handleCandidateSelect(candidate.id)}
                />
                <label htmlFor={`candidate-${candidate.id}`} className="ml-2">{candidate.name}</label>
              </div>
            ))}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              onClick={handleSubmitVote}
              disabled={submitted}
            >
              {submitted ? 'Vote Submitted' : 'Submit Vote'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CastVote;

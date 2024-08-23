'use client'

import { useState } from 'react'
import WinnerGenerator from './WinnerGenerator'
import { WinnerDetails } from '../types/types'

export default function Giveaway() {
  // State to hold the winner details. This will update when a winner is determined.
  const [winner, setWinner] = useState<WinnerDetails | null>(null)

  // Function to handle the button click event. It fetches the winner details.
  const handleButtonClick = async () => {
    // Replace 'grouped_comments.json' with the path to your comments file
    const winnerDetails = await WinnerGenerator('grouped_comments.json')
    setWinner(winnerDetails)
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 bg-main bg-cover bg-no-repeat bg-center'>
      <div className='max-w-2xl w-full bg-green shadow-lg rounded-lg p-8'>
        <h1 className='text-2xl font-bold text-white mb-8 text-body'>
          Example of the Giveaway Algorithm Usage
        </h1>
        <div className='flex flex-col justify-center-center gap-4'>
          <p className='text-2xl text-white '>
            {/* Display the winner's username if available */}
            {winner ? `Winner - ${winner.username}` : 'Winner: '}
          </p>
          <p className='text-2xl text-white '>
            {/* Show the winner's comment if available */}
            {winner
              ? `Comment - ${winner.comment}`
              : 'Click the button to determine the winner.'}
          </p>
          <p className='text-2xl text-white'>
            {/* Display the winning probability if available */}
            {winner ? `Number of Comments - ${winner.comments}` : ''}
          </p>
          <p className='text-2xl text-white'>
            {/* Display the winning probability if available */}
            {winner
              ? `Winning Probability - ${winner.probability.toFixed(2)}%`
              : ''}
          </p>
        </div>

        <button
          onClick={handleButtonClick}
          className='mt-6 px-4 py-2 bg-white text-green font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors'
        >
          {/* Button to trigger the winner determination */}
          Determine Winner
        </button>
      </div>
    </main>
  )
}

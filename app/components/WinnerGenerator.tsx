import type { WinnerDetails } from '../types/types'

/**
 * Determines a winner from a list of comments based on their chances.
 *
 * @param filePath - The path to the JSON file containing the comments data.
 * @returns A promise that resolves to the details of the winning entry.
 */
export default async function WinnerGenerator(
  filePath: string
): Promise<WinnerDetails> {
  try {
    // Fetch the JSON data from the API route with the file path as a query parameter
    const response = await fetch(
      `/api/getComments?file=${encodeURIComponent(filePath)}`
    )
    const commentsData: Record<string, string[]> = await response.json()

    // Convert the fetched data into an array of users with their comment counts
    const users = Object.keys(commentsData)
    const userChances = users.map((user) => ({
      username: user,
      commentCount: new Set(commentsData[user]).size // Number of unique comments
    }))

    // Calculate the total number of unique comments across all users
    const totalComments = userChances.reduce(
      (total, user) => total + user.commentCount,
      0
    )

    // Generate a random number between 0 and the total number of comments
    const random = Math.random() * totalComments

    // Determine the winner based on the random number
    let cumulative = 0
    let winner: WinnerDetails = {
      username: '',
      comment: '',
      probability: 0,
      comments: 0
    }

    for (const userChance of userChances) {
      cumulative += userChance.commentCount

      if (random <= cumulative) {
        // Randomly pick one of the user's unique comments
        const userComments = Array.from(
          new Set(commentsData[userChance.username])
        )
        const randomCommentIndex = Math.floor(
          Math.random() * userComments.length
        )
        const comment = userComments[randomCommentIndex]

        winner = {
          username: userChance.username,
          comment: comment,
          probability: (userChance.commentCount / totalComments) * 100, // Probability in percentage
          comments: userChance.commentCount // Number of unique comments for this user
        }
        break
      }
    }

    return winner
  } catch (error) {
    console.error('Error fetching or processing comments:', error)
    return {
      username: '',
      comment: '',
      probability: 0,
      comments: 0
    }
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

/**
 * API Route to fetch comments from a JSON file.
 *
 * @param req - The request object containing the query parameters.
 * @returns A JSON response with the comments data or an error message.
 */
export const GET = async (req: NextRequest) => {
  // Get the 'file' query parameter from the request URL
  const fileName = req.nextUrl.searchParams.get('file')

  // Check if the 'file' parameter is provided
  if (!fileName) {
    return NextResponse.json({
      message: 'Error: file parameter is missing in the request.',
      status: 400
    })
  }

  try {
    // Construct the full file path
    const filePath = path.join(process.cwd(), 'public', fileName)

    // Read the JSON file from the file system
    const file = await fs.readFile(filePath, 'utf8')

    // Parse the JSON file content
    const data = JSON.parse(file)

    // Return the JSON data as a response
    return NextResponse.json(data)
  } catch (error) {
    // Log any errors that occur
    console.error(error)

    // Return an error message if reading or parsing the file fails
    return NextResponse.json({
      message: 'Error: Failed to read or parse file.',
      status: 500
    })
  }
}

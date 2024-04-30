Project README

Overview

This project is a Next.js application that provides a platform to search and explore developer jobs in Japan. It utilizes the LinkedIn API to fetch job data and offers features such as filtering by job type and location, as well as a search functionality.

Project Structure
The project structure consists of the following main components:

1. Pages

Home Page : This page displays the main landing page of the application. It showcases a hero section with information about Japanese work culture and a button to navigate to the jobs page.
Jobs Page : This page allows users to search for developer jobs in Japan. It displays job listings fetched from the LinkedIn API, along with filtering options by job type and location.

2. Components

AuroraHero (/components/AuroHero.jsx): This component renders the hero section displayed on both the home page and jobs page.
JobCard (/components/JobCard.jsx): This component represents a single job listing card displayed on the jobs page.
Spinner (/components/Spinner.jsx): This component displays a loading spinner while job data is being fetched.

3. API

Job Fetch API (/app/api/jobFetch/route.js): This API endpoint fetches job data from the LinkedIn API. It is used by the jobs page to populate the list of available jobs.
Technical Details
The project is built using Next.js, a React framework for building server-side rendered applications. It uses React hooks for state management and context API for managing language preferences. The application fetches job data from the LinkedIn API using the fetch function and displays it dynamically based on user interactions.

Running the Project
To run the project locally, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install project dependencies.
Create a .env.local file in the root directory and add your LinkedIn API key as LINKEDIN_API_KEY=your_api_key.
Run npm run dev to start the development server.
Access the application in your web browser at http://localhost:3000.
Contributing
Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

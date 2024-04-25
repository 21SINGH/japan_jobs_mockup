// pages/api/jobFetch.js
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e37913f6camsh9c2bdefd8ee3ad2p1aa3a9jsn2453b255770d",
        "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
      },
    };

    const response = await fetch(
      "https://linkedin-api8.p.rapidapi.com/search-jobs-v2?keywords=japan&locationId=101355337&datePosted=anyTime&sort=mostRelevant",
      options
    );
    const data = await response.json();

    return new NextResponse(
      JSON.stringify({ message: "job fetched successfully", jobData: data}),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse(
      JSON.stringify({ message: "error occured", error }),
      {
        status: 401,
      }
    );
  }
};

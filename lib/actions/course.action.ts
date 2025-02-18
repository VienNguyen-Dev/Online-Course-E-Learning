import { Query } from "node-appwrite";
import { createAdminClient } from "../server/appwrite-config";

const { DATABASE_ID, COURSE_COLLECTION_ID } = process.env;

//get all course from backend
export const courseDetails = [
  {
    id: "course_001",
    title: "Web Design Fundamentals",
    description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    image: ["web-1.png", "web-2.png", "web-3.png"],
    courseDuration: "4 Weeks",
    courseLevel: "Beginner",
    author: "By John Smith",
    curriculum: [
      {
        number: "01",
        description: "Introduction to HTML",
      },
      {
        number: "02",
        description: "Styling with CSS",
      },
      {
        number: "03",
        description: "Introduction to Responsive Design",
      },
      {
        number: "04",
        description: "Design Principles for Web",
      },
      {
        number: "05",
        description: "Building a Basic Website",
      },
    ],
  },
  {
    id: "course_002",
    title: "UI/UX Design",
    description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    image: ["ui-design-1.png", "ui-design-2.png", "ui-design-3.png"],
    courseDuration: "6 Weeks",
    courseLevel: "Intermediate",
    author: "By Emily Johnson",
    curriculum: [
      {
        number: "01",
        description: "Introduction to UI/UX Design",
      },
      {
        number: "02",
        description: "User Research and Personas",
      },
      {
        number: "03",
        description: "Wireframing and Prototyping",
      },
      {
        number: "04",
        description: "Visual Design and Branding",
      },
      {
        number: "05",
        description: "Usability Testing and Iteration",
      },
    ],
  },
  {
    id: "course_003",
    title: "Mobile App Development",
    description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    image: ["mobile-1.png", "mobile-2.png", "mobile-3.png"],
    courseDuration: "8 Weeks",
    courseLevel: "Intermediate",
    author: "By David Brown",
    curriculum: [
      {
        number: "01",
        description: "Introduction to Mobile App Development",
      },
      {
        number: "02",
        description: "Fundamentals of Swift Programming (iOS)",
      },
      {
        number: "03",
        description: "Fundamentals of Kotlin Programming (Android)",
      },
      {
        number: "04",
        description: "Building User Interfaces",
      },
      {
        number: "05",
        description: "App Deployment and Testing",
      },
    ],
  },
  {
    id: "course_004",
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    image: ["graphic-1.png", "graphic-2.png", "graphic-3.png"],
    courseDuration: "10 Weeks",
    courseLevel: "Beginner",
    author: "By Sarah Thompson",
    curriculum: [
      {
        number: "01",
        description: "Introduction to Graphic Design",
      },
      {
        number: "02",
        description: "Typography and Color Theory",
      },
      {
        number: "03",
        description: "Layout Design and Composition",
      },
      {
        number: "04",
        description: "Image Editing and Manipulation",
      },
      {
        number: "05",
        description: "Designing for Print and Digital Media",
      },
    ],
  },
  {
    id: "course_005",
    title: "Front-End Web Development",
    description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    image: ["front-end-1.png", "front-end-2.png", "front-end-3.png"],
    courseDuration: "10 Weeks",
    courseLevel: "Intermediate",
    author: "By Michael Adams",
    curriculum: [
      {
        number: "01",
        description: "HTML Fundamentals",
      },
      {
        number: "02",
        description: "CSS Styling and Layouts",
      },
      {
        number: "03",
        description: "JavaScript Basics",
      },
      {
        number: "04",
        description: "Building Responsive Websites",
      },
      {
        number: "05",
        description: "Introduction to Bootstrap and React",
      },
    ],
  },

  {
    id: "course_006",
    title: "Advanced JavaScript",
    description:
      "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    image: ["advanced-Js.png"],
    courseDuration: "6 Weeks",
    courseLevel: "Advance",
    author: "By Jennifer Wilson",
    curriculum: [
      {
        number: "01",
        description: "Advanced JavaScript (ES6+ Features & Best Practices)",
      },
      {
        number: "02",
        description: "Asynchronous JavaScript: Promises & Async/Await",
      },
      {
        number: "03",
        description: "JavaScript Design Patterns & Performance Optimization",
      },
      {
        number: "04",
        description: "Working with APIs: Fetch, Axios & RESTful Services",
      },
      {
        number: "05",
        description: "Building Scalable Applications with Modern JavaScript",
      },
    ],
  },
];

export async function getAllCourses() {
  try {
    const { database } = await createAdminClient();
    const courses = await database.listDocuments(DATABASE_ID!, COURSE_COLLECTION_ID!);
    if (courses.total === 0) {
      return null;
    }
    return courses.documents;
  } catch (error: any) {
    console.log(error.message);
    throw new Error("Error while get all courses");
  }
}

export async function getCourseById(courseId: string) {
  try {
    const { database } = await createAdminClient();
    const courses = await database.listDocuments(DATABASE_ID!, COURSE_COLLECTION_ID!, [Query.equal("courseId", courseId)]);
    return courses.documents[0];
  } catch (error: any) {
    console.log(error.message);
    throw new Error("Error occur while getting course by id");
  }
}

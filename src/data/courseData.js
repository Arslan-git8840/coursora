export const sqlCourse = {
  title: "Introduction to SQL for Beginners",
  description: "This course provides a comprehensive introduction to the Structured Query Language (SQL), a standard language used to interact with relational databases. You'll learn the essential SQL commands and concepts for querying, manipulating, and managing data. Whether you're a aspiring data analyst, a software developer, or just curious about working with databases, this course will equip you with the fundamental SQL skills to get started.",
  category: "Programming",
  image: "/course-sql.png",
  skillLevel: "Beginner",
  duration: "1 hour",
  chapters: 5,
  hasVideo: true,
  chaptersList: [
    {
      id: 1,
      title: "What is SQL and Relational Databases?",
      description: "This chapter introduces SQL as a language for interacting with databases and explains the concept of relational databases, focusing on their structure and key components.",
      duration: "15 minutes",
      completed: true
    },
    {
      id: 2,
      title: "Basic SQL Commands: SELECT, WHERE, ORDER BY",
      description: "This chapter dives into essential SQL commands for selecting data, filtering results with WHERE clauses, and sorting data using ORDER BY.",
      duration: "25 minutes"
    },
    {
      id: 3,
      title: "Data Manipulation: INSERT, UPDATE, DELETE",
      description: "You'll learn how to add new data using INSERT, modify existing data with UPDATE, and remove data with DELETE commands.",
      duration: "20 minutes"
    },
    {
      id: 4,
      title: "Joins and Aggregations",
      description: "This chapter covers essential SQL concepts like joins to combine data from multiple tables and aggregation functions for calculating summaries and statistics.",
      duration: "15 minutes"
    },
    {
      id: 5,
      title: "Practice Exercises and Project",
      description: "This chapter provides hands-on practice exercises to solidify your understanding of SQL, followed by a simple database project that uses the concepts you've learned.",
      duration: "15 minutes"
    }
  ]
};

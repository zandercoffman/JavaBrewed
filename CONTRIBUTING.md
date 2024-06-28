# Contributing to making Java Lessons

Thank you for considering contributing to our Java learning platform! By contributing, you help make Java learning more accessible and engaging. Follow the guidelines below to get started.

## Getting Started

1. **Fork the repository** to your own GitHub account.
2. **Clone the repository** to your local machine.
3. **Create a new branch** for your changes.
   git checkout -b feature/your-feature-name

## Creating a Lesson

To create a lesson, you must define a lesson object following the structure below. Each lesson must include specific fields and adhere to the format provided.
File path: ```/public/lessons/Lessons.ts```.

You must also add your lesson to the [```Lessons```](public/lessons/Lessons.ts) object found near the bottom.

### Lesson Structure

```js
const lessonTitle = {
  name: "", // The name of the lesson
  description: "", // A brief description of the lesson
  icon: "", // URL or path to an icon representing the lesson
  unit: "", // The AP Unit the lesson belongs to
  goals: [""], // An array of goals for the lesson
  filters: [""], // An array of filters applicable to the lesson
  passage: "", // Text passage related to the lesson
  vocab: {
    1: { name: "", desc: "" } // Vocabulary terms related to the lesson
  },
  steps: {
    Step[x]: {
      QuestionType: "default", // Type of questions in this step
      Boxes: {
        Box[x]: {
          id: "", // Unique identifier for the box
          position: { x: 0, y: 0 }, // Position of the box on the canvas
          data: { label: "" } // Data label for the box
        }
      },
      Edges: {
        Edge[x]: {
          id: '', // Unique identifier for the edge
          source: "", // ID of the source box
          target: "", // ID of the target box
          animated: true // Animation state of the edge
        }
      },
      Title: "", // Title displayed on the page
      SubTitle: "", // Subtitle displayed on the step
      Overview: "", // Overview of the step
      Content: {
        1: {
          type: "", // Type of content (e.g., text, image, video)
          content: "" // The actual content
        }
      },
      Teach: {
        good: [""], // Good practices or hints
        bad: [""], // Common mistakes or misconceptions
        title: "" // Title for the teaching section
      }
    }
  }
}
```

### Example Lesson

Here's an example of a completed lesson object:

```js
const lesson = {
  name: "Introduction to Variables",
  description: "Learn about variables in Java.",
  icon: "path/to/icon.png",
  unit: "Unit 1",
  goals: ["Understand variables", "Learn about data types"],
  filters: ["beginner", "variables"],
  passage: "In Java, a variable is a container that holds data...",
  vocab: {
    1: { name: "Variable", desc: "A storage location in programming." },
    2: { name: "Data Type", desc: "Specifies the type of data a variable can hold." }
  },
  steps: {
    Step1: {
      QuestionType: "multiple-choice",
      Boxes: {
        Box1: {
          id: "box1",
          position: { x: 100, y: 150 },
          data: { label: "What is a variable?" }
        }
      },
      Edges: {
        Edge1: {
          id: 'edge1',
          source: "box1",
          target: "box2",
          animated: false
        }
      },
      Title: "Introduction to Variables",
      SubTitle: "Step 1: Understanding Variables",
      Overview: "In this step, you will learn what variables are...",
      Content: {
        1: {
          type: "text",
          content: "A variable in Java is a container..."
        }
      },
      Teach: {
        good: ["Use meaningful names for variables", "Understand the scope of variables"],
        bad: ["Don't use single-letter variable names", "Avoid using global variables"],
        title: "Best Practices for Using Variables"
      }
    }
  }
}
```

## Submitting Your Contribution

1. **Commit your changes** with a clear message describing your addition.
   git commit -m "Add lesson on variables"
2. **Push your changes** to your forked repository.
   git push origin feature/your-feature-name
3. **Create a pull request** from your branch to the main repository.

## Review Process

Your pull request will be reviewed. Changes or improvements may be requested before merging. Thank you for your contribution!

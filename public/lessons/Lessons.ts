import { Code, Package, Database, Terminal, Eye, GitMerge, List, Box, RefreshCw, AlertCircle, FileText, Search, Layers, WrapText, CircleDashed, SquareTerminal, ArrowLeftRight, ListMinus, Plus, Coffee, CopyPlus, BadgeInfo } from 'lucide-react'; // Import icons as needed

export const filters = [
    "Basics",
    "Data Types",
    "Variables",
    "Operators",
    "String Manipulation",
    "Control Statements",
    "Loops",
    "Functions",
    "Boolean Logic",
    "Collections",
    "Data Structures",
    "Intermediate Concepts",
    "Object-Oriented Programming",
    "Classes and Objects",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Algorithms",
    "Exception Handling"
];

export const filterUnits: number[] = [
    1,  // Basics
    1,  // Data Types
    1,  // Variables
    1,  // Operators
    1,  // String Manipulation
    3,  // Control Statements
    4,  // Loops
    5,  // Functions
    3,  // Boolean Logic
    6,  // Collections
    6,  // Data Structures
    6,  // Intermediate Concepts
    2,  // Object-Oriented Programming
    2,  // Classes and Objects
    9,  // Inheritance
    9,  // Polymorphism
    9,  // Encapsulation
    6,  // Algorithms
    3   // Exception Handling
];

export const combinedFilters = filters.map((filter, index) => ({
    name: filter,
    value: filterUnits[index]
}));

export const filterButtons = {
    1: {title: "Level",options: ["Basics", "Intermediate Concepts"],},
    2: {title: "AP Unit",options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    3: {title: "Lesson Type", options: filters}
}

export const WhatIsJava = {
    name: "Java Introduction",
    description: "Learn a basic introduction to the programming language Java and what makes it unique.",
    icon: "Coffee",
    unit: 1,
    goals: ["Understand the history of Java", "Learn the basic syntax of Java", "Identify the key features that make Java unique"],
    filters: ["Basics"],

    passage: "provides a foundational exploration of the Java programming language, focusing on its essential syntax, object-oriented principles, and platform-independent nature through the Java Virtual Machine (JVM). This course guides learners through understanding the history and significance of Java, mastering basic programming constructs like classes, objects, methods, and variables. By emphasizing practical applications such as setting up development environments and utilizing IDEs, students gain proficiency in writing and executing Java programs across diverse platforms. Whether starting from scratch or aiming to deepen Java knowledge, this course equips learners with the fundamental skills to build robust applications and leverage Java's versatility in real-world scenarios.",

    vocab: {
        1: {"name": "Java","desc": "Java is a high-level, object-oriented programming language known for its platform independence, allowing programs written in Java to run on any device or operating system that supports Java Virtual Machine (JVM)."},
        2: {"name": "Object-Oriented Programming","desc": "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods). Java follows OOP principles."},
        3: {"name": "Syntax","desc": "Syntax in Java refers to the set of rules that defines the combinations of symbols that are considered to be correctly structured programs in Java. It includes rules for declaring classes, methods, variables, and other elements."},
        4: {"name": "JVM (Java Virtual Machine)","desc": "The JVM is an abstract computing machine that enables a computer to run Java programs as well as programs written in other languages that are compiled to Java bytecode."}
    },

    cocode: {
        easy: {
            question: "Create a basic Java class named `HelloWorld` that includes a `main` method and prints `Hello, World!` to the console.",
            expected: `public class HelloWorld {public static void main(String[] args) {System.out.println("Hello, World!");}}`
        },
        medium: {
            question: "Create a Java class named `Person` with two private fields: `name` (String) and `age` (int). Include a constructor to initialize these fields, and a `main` method to create an instance of `Person` and print the details.",
            expected: `public class Person {private String name;private int age;public Person(String name, int age) {this.name = name;this.age = age;}public static void main(String[] args) {Person person = new Person("John Doe", 30);System.out.println("Name: " + person.name + ", Age: " + person.age);}}`
        },
        hard: {
            question: "Create a Java class named `Calculator` that includes methods for addition, subtraction, multiplication, and division. Write a `main` method to demonstrate the use of these methods.",
            expected: `public class Calculator {public int add(int a, int b) {return a + b;}public int subtract(int a, int b) {return a - b;}public int multiply(int a, int b) {return a * b;}public double divide(int a, int b) {if (b == 0) { throw new ArithmeticException("Cannot divide by zero");}return (double) a / b;}public static void main(String[] args) {Calculator calculator = new Calculator();System.out.println("Addition: " + calculator.add(10, 5));System.out.println("Subtraction: " + calculator.subtract(10, 5));System.out.println("Multiplication: " + calculator.multiply(10, 5));System.out.println("Division: " + calculator.divide(10, 5));}}`
        }
    },
    
    

    steps: {
        Step1: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: '1-1', position: {x: 220, y: 150}, data: {label: "Java Code ♨️"} },
                Box2: { id: '1-2', position: {x: 60, y: 0}, data: {label: "macOS ⌘"}},
                Box3: {id: '1-3', position: {x: 10, y: 240}, data: {label: "Windows ⊞"}},
                Box4: {id: '1-4', position: {x: 210, y: 340}, data: {label: "Android 📱"}},
                Box5: {id: '1-5', position: {x: 460, y: 260}, data: {label: "iOS 🤳"}},
                Box6: {id: '1-6', position: {x: 420, y: 10}, data: {label: "ChromeBook 💻"}}
            },
            Edges: {
                Edge1: { id: '1-2-1-1', source: '1-2', target: '1-1', animated: true },
                Edge2: {id: '1-6-1-1', source: '1-6', target: '1-1', animated: true},
                Edge3: {id: '1-1-1-3', source: '1-1', target: '1-3', animated: true},
                Edge4: {id: '1-1-1-4', source: '1-1', target: '1-4', animated: true},
                Edge5: {id: '1-1-1-5', source: '1-1', target: '1-5', animated: true}
            },
            Title: "What is Java?",
            SubTitle: "What is Java?",
            Overview: "Learn about access modifiers and how they control access to variables and methods in Java.",
            Content: {
                1: { type: "text", content: "Java is a high-level (self-memory managing), object-oriented language. An object-oriented language is where code is bundled into a class which can be used as an object for easy data transfer, access, and more." },
                2: { type: "points", content: ["Platform Independance: The motto of Java is \"Write once, run anywhere\", meaning that no matter what code you write, most platforms support it via the Java Virtual Machine (JVM).", "Self-Memory Managing: Java features automatic memory management through garbage collection, enhancing stability by handling memory allocation and deallocation to prevent leaks."] },
            },
            Teach: {
                good: ["Java","high-level","object-oriented"," language","object"],
                bad: ["public", "private", "global"],
                title: "about Java"
            }
        },
        Step2: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: 'S2-1', position: {x: 220, y: 150}, data: {label: "Energy ⚡"} },
                Box2: { id: 'S2-2', position: {x: -30, y: 150}, data: {label: "Programmer 🧑‍💻"} },
                Box3: { id: 'S2-3', position: {x: 380, y: 150}, data: {label: "Code ♨️"} },
            },
            Edges: {
                Edge1: {id: 'S2-[1-2]', source: 'S2-1', target: 'S2-2', animated: true, label: "plus"}, 
                Edge2: {id: 'S2-[1-3]', source: 'S2-1', target: 'S2-3', animated: true, label: "equals"},
            },
            Title: "How to install Java?",
            SubTitle: "How to install?",
            Overview: "Learn about access modifiers and how they control access to variables and methods in Java.",
            Content: {
                1: { type: "text", content: "You can install Java in a couple ways. By installing an IDE, installing the development enviroment, and more." },
                2: {type: "text", content: "Visit the official Oracle website or OpenJDK website to download the JDK version suitable for your operating system (Windows, macOS, Linux)."},
                3: {type: "text", content: "Once downloaded, run the installer and follow the on-screen instructions. This will install both the Java Runtime Environment (JRE) and the development tools (compiler, debugger, etc.) "},
                4: {type: "title", content: "Links:"},
                5: {type: "link", content: {link: "https://www.eclipse.org/downloads/", text: "Eclipse"}},
                6: {type: "link", content: {link: "https://www.java.com/en/", text: "Java Runtime Enviroment"}},
                7: {type: "link", content: {link: "https://code.visualstudio.com/Download", text: "VS Code"}}
            },
            Teach: {
                good: [],
                bad: ["public", "private", "global"],
                title: "to install Java"
            }
        },
        Step3: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: 'S3-1', position: {x: 220, y: 150}, data: {label: "class Car 🚗"} },
                Box2: { id: 'S3-2', position: {x: 380, y: 245}, data: {label: "mileage"} },
                Box3: { id: 'S3-3', position: {x: 220, y: 340}, data: {label: "speed ⏩"} },
            },
            Edges: {
                Edge1: {id: 'S3-[1-2]', source: 'S3-1', target: 'S3-2', animated: true, label: "has"}, 
                Edge2: {id: 'S3-[1-3]', source: 'S3-1', target: 'S3-3', animated: true, label: "has"}, 
            },
            Title: "Object Oriented Programming",
            SubTitle: "Object Oriented",
            Overview: "Learn about access modifiers and how they control access to variables and methods in Java.",
            Content: {
                1: { type: "text", content: "Object-Oriented Programming (OOP) is a programming style based on the concept of \"objects\", which can contain data and code: data in the form of fields (often known as attributes or properties), and code in the form of procedures (often known as methods)." },
                2: { type: "points", content: ["Class: A blueprint for creating objects. It defines a type of object according to the methods and properties.", "Object: An instance of a class. When a class is defined, no memory is allocated until an object of that class is created."]}
            },
            Teach: {
                good: ["fields","attributes","properties"," procedures","Class"," blueprint","instance"],
                bad: [],
                title: "Object Oriented Programming"
            }
        },
        Step4: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: 'S4-1', position: {x: 230, y: 150}, data: {label: "void"} },
                Box2: { id: 'S4-2', position: {x: 170, y: 150}, data: {label: "static"} },
                Box3: { id: 'S4-3', position: {x: 90, y: 150}, data: {label: "public"} },
                Box4: { id: 'S4-4', position: {x: 280, y: 150}, data: {label: "main("} },
                Box5: { id: 'S4-5', position: {x: 340, y: 150}, data: {label: "String[]"} },
                Box6: { id: 'S4-6', position: {x: 430, y: 150}, data: {label: "args) {"} },
                Box7: { id: 'S4-7', position: {x: 170, y: 200}, data: {label: "System.out.println(\"Hello world!\");"} },
                Box8: { id: 'S4-8', position: {x: 90, y: 250}, data: {label: "}"} },
            },
            Edges: {
                Edge1: { id: 'e1-2', source: '1', target: '2', animated: true },
            },
            Title: "Main Method",
            SubTitle: "Main Method",
            Overview: "Learn about access modifiers and how they control access to variables and methods in Java.",
            Content: {
                1: { type: "text", content: "Each Java program is able to be runned by the method main() which is listed in the diagram. Let us analyze each part of this method as an introduction." },
                2: { type: "points", content: ["public: Any class is able to see it (JVM needs to see the class' method to run the program!)", "static: It belongs to the class itself and not an object made from the class.", "void: States that this method doesn't have to return anything (optional)", "main: reserved keyword so the JVM knows which method to start the program", "String[] args: An array of arguments passed in the program to then be used."]}
            },
            Teach: {
                good: ["Main Method","Java program","method","public","static",'void'],
                bad: [],
                title: "Main Method"
            }
        },
        Step5: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: 'S4-1', position: {x: 230, y: 150}, data: {label: "void"} },
                Box2: { id: 'S4-2', position: {x: 170, y: 150}, data: {label: "static"} },
                Box3: { id: 'S4-3', position: {x: 90, y: 150}, data: {label: "public"} },
                Box4: { id: 'S4-4', position: {x: 280, y: 150}, data: {label: "main("} },
                Box5: { id: 'S4-5', position: {x: 340, y: 150}, data: {label: "String[]"} },
                Box6: { id: 'S4-6', position: {x: 430, y: 150}, data: {label: "args) {"} },
                Box7: { id: 'S4-7', position: {x: 170, y: 200}, data: {label: "System.out.println(\"Hello world!\");"} },
                Box8: { id: 'S4-8', position: {x: 90, y: 250}, data: {label: "}"} },
                //public class goes here
                Box9: {id: 'S4-9', position: {x: 30, y: 90}, data: {label: "public"}},
                Box10: {id: 'S4-10', position: {x: 100, y: 90}, data: {label: "class"}},
                Box11: {id: 'S4-11', position: {x: 160, y: 90}, data: {label: "Program {"}},
                Box12: {id: 'S4-12', position: {x: 30, y: 302}, data: {label: "}"}}
            },
            Edges: {
                Edge1: { id: 'e1-2', source: '1', target: '2', animated: true },
            },
            Title: "Syntax",
            SubTitle: "Syntax",
            Overview: "Learn about access modifiers and how they control access to variables and methods in Java.",
            Content: {
                1: { type: "text", content: "Understanding the proper syntax is crucial to writing code. Here is some of the basic syntax in Java:" },
                2: { type: "points", content: ["Parentheses (): Used when calling methods, instantiating an object.", "Curly Braces {}: Traps the code within a certain class, method or control structure.", "Semicolons ';': Used for the end of every statement in Java.", "Square Brackets []: Used when defining an array.", "// This is a single-line comment", "/* This is a multiline comment */", "/** @category This is JavaDocs */"]},
                3: { type: "text", content: "You will learn a lot more in-depth about all of these, but these are the basics."}
            },
            Teach: {
                good: ["Syntax","Java","Parentheses ()","Curly Braces {}","Semicolons ;","Square Brackets []"," comments","single-line comment","multiline comment",'JavaDocs'],
                bad: [],
                title: "Syntax"
            }
        },
        Step6: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: 'S6-1', position: {x: 220, y: 150}, data: {label: "class"} },
                Box2: { id: 'S6-2', position: {x: 270, y: 150}, data: {label: "Dog"} },
                Box3: { id: 'S6-3', position: {x: 320, y: 150}, data: {label: "{"} },
                Box4: { id: 'S6-4', position: {x: 270, y: 215}, data: {label: "void"} },
                Box5: { id: 'S6-5', position: {x: 320, y: 215}, data: {label: "Bark()"} },
                Box6: { id: 'S6-6', position: {x: 220, y: 265}, data: {label: "}"} },
                Box7: { id: 'S6-7', position: {x: 220, y: 340}, data: {label: "Dog"} },
                Box8: { id: 'S6-8', position: {x: 275, y: 340}, data: {label: "Rufus"} },
                Box9: { id: 'S6-9', position: {x: 340, y: 340}, data: {label: "= new"} },
                Box10: { id: 'S6-10', position: {x: 410, y: 340}, data: {label: "Dog();"} },
                Box11: {id: 'S6-11', position: {x: 510, y: 215}, data: {label: "Class"}},
                Box12: {id: "S6-12", position: {x: 510, y: 375}, data: {label: "Object"}},
                Box13: {id: "S6-13", position: {x: 220, y: 410}, data: {label: "Rufus"}},
                Box14: {id: "S6-14", position: {x: 290, y: 410}, data: {label: ".bark();"}},
            },
            Edges: {
                Edge1: { id: 'e11-3', source: 'S6-11', target: 'S6-3', animated: true },
                Edge2: {id: 'e6-11', source: 'S6-6', target: "S6-11", animated: true},
                Edge3: {id: 'e12-10', source: "S6-12", target: "S6-10", animated: true},
                Edge4: {id: 'e13-12', source: "S6-13", target: "S6-12", animated: true}
            },
            Title: "Using Objects and Classes",
            SubTitle: "Using it",
            Overview: "Learn about Using Objects and Classes and how they control access to stuff in Java.",
            Content: {
                1: { type: "text", content: "Objects and classes in Java help organize data and functions. Classes are like templates for creating objects, which are instances of these templates."},
                2: {type: "text", content: "In this example, you can see a class Dog which has the basic properties for a typical dog, it can bark, play and do more stuff."},
                3: {type: "text", content: "Down below, you can see an object, which is an instance of a Dog called Rufus. And then, Rufus barks."},
                4: {type: "text", content: "In this example, Dog defines properties (name and age) and methods (bark() and play()). The object Rufus is an instance of Dog, demonstrating how classes and objects work together in Java to model real-world entities and their behaviors."}
            },
            Teach: {
                good: ["Objects","Classes","Templates",'Instances','Properties',"Methods"],
                bad: [],
                title: "Syntax"
            }
        },
        Step7: {
            Title: "Match the Correct Answer",
            QuestionType: "question",
            Boxes: {
                Q1: {
                    QNode: {label: "A thing that represents a blueprint for creating objects. It defines the properties and behaviors that the objects will have.",id: "q1"},
                    ANode: {"label": "class","id": "a1"}
                },
                Q2: {
                    QNode: {"label": "An instance of a class. It is created based on the blueprint defined by the class and has its own state and behavior.","id": "q2"},
                    ANode: {"label": "object","id": "a2"}
                }
            },
            Edges: {

            },
            Content: {
            }
        }
    }
}

export const AccessModifiers = {
    name: "Access Modifiers",
    icon: "Eye",
    description: "Private? Public? Protected? What are all of those keywords and what do they have to do with coding?!",
    extendedDesc: "Access modifiers in Java are essential tools that define the scope and visibility of classes, methods, and variables. Understanding these modifiers is crucial for managing access control and protecting your data.",

    goals: ["To distinguish the types of access modifiers", "Situations where each type is appropriate", "Ways to memorize the usage of each type"],
    filters: ["Basics","Object-Oriented Programming","Classes and Objects","Encapsulation"],

    unit: 1,

    passage: "Access modifiers in Java control the visibility and accessibility of classes, methods, and variables. The main access modifiers are public, private, protected, and the default (no modifier). Here’s a brief overview of each: public makes a member accessible from any other class, regardless of the package. private restricts access to the member within the same class. It's the most restrictive level. protected allows access within the same package and by subclasses, even in different packages. When no modifier (default) is specified, the member is accessible only within its own package.",

    vocab: {
        1: {"name": "public","desc": "The public access modifier makes the member (class, method, constructor, or field) accessible from any other class. If a class is declared public, it can be accessed from any other class."},
        2: { "name": "private","desc": "The private access modifier restricts the access to the member within the class itself. It cannot be accessed from outside the class. This is the most restrictive access level."},
        3: {"name": "protected","desc": "The protected access modifier allows the member to be accessed within its own package and by subclasses. If a member is declared protected, it can be accessed by any class in the same package and by subclasses even if they are in different packages."},
        4: { "name": "default","desc": "When no access modifier is specified, Java uses the default access level, which makes the member accessible only within its own package. This is also known as package-private access."}
    },

    steps: {
        Step1: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: '1', position: {x: 60, y: 70}, data: {label: "Employee 👤"} },
                Box2: { id: '2', position: {x: 220, y: 150}, data: {label: "Password 🔑"} },
                Box3: { id: '3', position: {x: 100, y: 230}, data: {label: "ID 📛"} },
                Box4: { id: '4', position: {x: 20, y: 0}, data: {label: "Database 📱"} },
                Box5: { id: '5', position: {x: 380, y: 300}, data: {label: "GET request"} },
                Box6: { id: '6', position: {x: 420, y: 190}, data: {label: "Auth 🗝️"} },
                Box7: { id: '7', position: {x: 340, y: 400}, data: {label: "Manager 🧑‍💻"} },
                Box8: { id: '8', position: {x: 500, y: 80}, data: {label: "Fetch 🥎"} }
            },
            Edges: {
                Edge1: { id: 'e1-2', source: '1', target: '2', animated: true },
                Edge2: { id: 'e1-3', source: '1', target: '3' },
                Edge3: { id: 'e4-1', source: '4', target: '1' },
                Edge4: { id: 'e5-7', source: '5', target: '7' },
                Edge5: { id: 'e6-5', source: '6', target: '5' },
                Edge6: { id: 'e8-6', source: '8', target: '6' },
                Edge7: { id: 'e4-8', source: '4', target: '8' }
            },
            Title: "What are Access Modifiers?",
            SubTitle: "What are they?",
            Overview: "Learn about access modifiers and how they control access to variables and methods in Java.",
            Content: {
                1: { type: "text", content: "Access Modifiers control how variables and methods are accessed within a class, by other classes in the same package, or by classes in different packages, ensuring proper data handling, validation, and security." },
                2: { type: "text", content: "The four modifiers are `public`, `default`, `protected`, and `private`." },
                3: { type: "code", content: ["private static int employeeCount = 1020;", "protected Data companyData;", "private ArrayList<Employee> list;", "", "public static void addEmployee(Employee wkr) {", "\tlist.add(wkr);", "\temployeeCount++;", "}", "class Employee {...} //default modifier - no attribute"] }
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "access modifiers"
            }
        },
        Step2: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: 'person', position: {x: 100, y: 50}, data: {label: "You 👤"} },
                NonRelatedPerson1: { id: 'non-related-1', position: {x: 100, y: 300}, data: {label: "The Adams Family 🧑‍🤝‍🧑"} },
                NonRelatedPerson2: { id: 'non-related-2', position: {x: 500, y: 50}, data: {label: "The Baker Family 👨‍👩‍👧‍👦"} },
                RelatedPerson: { id: 'related', position: {x: 300, y: 175}, data: {label: "Your sibling 🧑"} },
            },
            Edges: {
                Edge1: { id: 'e-person-non-related-1', source: 'person', target: 'non-related-1', animated: true, label: "Can see" },
                Edge2: { id: 'e-person-non-related-2', source: 'person', target: 'non-related-2', animated: true, label: "Can see" },
                Edge3: { id: 'e-person-related', source: 'person', target: 'related', animated: true, label: "Can see" },
            },
            Title: "The \"public\" Keyword",
            SubTitle: "Public",
            Overview: "Understand how the public access modifier works and its implications for code accessibility.",
            Content: {
                1: { type: "text", content: "In this diagram, you are able to see both unrelated individuals and related individuals. When a member (class, method, or variable) is declared as public, it means that it can be accessed from any other class in any package." },
                2: { type: "points", content: ["Code that is \"public\" is able to be viewed in any class."] },
                3: { type: "code", content: ["public static void main(String[] args) {", "\tSystem.out.println(\"Hello world!\");", "} //JVM calls Class.main() to start the program", "//The JVM needs access to call the method"] }
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "public keyword"
            }
            
        },
        Step3: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: '3person', position: { x: 120, y: 70 },data: { label: "You 👤" }},
                NonRelatedPerson1: {  id: '3non-related-1', position: { x: 120, y: 310 }, data: { label: "The Adams Family 🧑‍🤝‍🧑" } },
                NonRelatedPerson2: { id: '3non-related-2',position: { x: 510, y: 70 },data: { label: "The Baker Family 👨‍👩‍👧‍👦" }},
                RelatedPerson: { id: '3related',  position: { x: 320, y: 195 },  data: { label: "Your sibling 🧑" }},
            },
            Edges: {
                Edge1: { id: '3e-person-non-related-1', source: '3person', target: '3non-related-1', animated: true, label: "Can NOT see"},
                Edge2: {id: '3e-person-non-related-2',source: '3person',target: '3non-related-2',animated: true,label: "Can NOT see"},
                Edge3: {id: '3e-person-related',  source: '3person',  target: '3related',  animated: true,  label: "Can see"},
            },
            Title: "The default accessor",
            SubTitle: "Default",
            Content: {
                1: {type: "text",content: "In this diagram, you are able to see only related individuals. When a member (class, method, or variable) does not have a modifier, it means that it can be accessed from any other class in the same package."},
                2: {type: "points",content: ["No modifiers is able to be viewed in classes in the SAME package."]},
                3: {type: "remember",content: ["Think of a family house -- people who are related have access to it."]},
                4: {type: "code",content: ["package family;", "Space familyHouse; //Only allowed in 'family'", "package Community;", "public Space communityPark; //Allowed anywhere"]}
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "default keyword"
            },
            Overview: "Understand how the default keyword operates regarding code accessibility."
        },
        Step4: {
            QuestionType: "default",
            Boxes: {
                Box1: {id: 'castle',position: { x: 100, y: 50 },data: { label: "Kingdom 🏰" }},
                RelatedPerson: {id: 'information',position: { x: 200, y: 112 },data: { label: "Information 📜" }},
                King: {id: 'king',position: { x: 90, y: 280 },data: { label: "King 👑" }},
                Queen: {id: 'queen',position: { x: 480, y: 300 },data: { label: "Queen 👑" }},
                Nobles: {id: 'noble',position: { x: 260, y: 360 },data: { label: "Nobles 🧑‍🤝‍🧑" }}
            },
            Edges: {
                Edge1: {id: 'castle-info',source: 'castle',target: 'information',animated: true,},
                Edge2: {id: 'king-info',source: 'information',target: 'king',animated: true,label: "Can access"},
                Edge3: {id: 'info-queen',source: 'information',target: 'queen',animated: true,label: "Can Access"},
                Edge4: {id: 'info-noble',source: 'information',target: 'noble',animated: false,label: "Can NOT Access"}
            },
            Title: "The \"protected\" Keyword [1/2]",
            SubTitle: "Pro..[1/2]",
            Content: {
                1: {type: "text",content: "In this diagram, you are able to see that people who are related to the kingdom are able to see its information. When a structure is declared as protected, classes in the same package can view it."},
                2: {type: "points",content: ["\"protected\" code can be viewed in any class in the SAME package."]},
                3: {type: "remember",content: ["People who are in royalty have information related to its kingdom."]},
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "protected keyword (1/2)"
            },
            Overview: "Understand how the protected keyword influences code accessibility."
        },
        Step5: {
            "QuestionType": "default",
            "Boxes": {
                "Box1": {"id": "bank","position": { "x": 100, "y": 50 },"data": { "label": "Banking 🏦" }},
                "Box2": {"id": "bankacc","position": { "x": 230, "y": 120 },"data": { "label": "Account 💳" }},
                "Box3": {"id": "check","position": { "x": 100, "y": 260 },"data": { "label": "Checking 📃" }},
                "Box4": {id: "checkacc",position: { x: 230, y: 335 },data: { label: "Account ✔️" }},
                Box5: {id: 'info',position: { x: 360, y: 190 },data: { label: "Info ℹ️" }},
                box6: {id: 'info2',position: { x: 360, y: 410 },data: { label: "Info ℹ️" }}
            },
            "Edges": {
                "Edge1": {"id": "bank-info","source": "bank","target": "bankacc","animated": true,},
                Edge2: {id: "check-info",source: "check",target: "checkacc",animated: true},
                edge3: {id: 'acc-acc',source: 'bankacc',target: "checkacc",animated: true,label: "inherits from"},
                edge4: {id: 'acc-info',source: 'bankacc',target: "info",animated: true,label: "protects"},
                edge5: {id: 'acc-info2',source: 'checkacc',target: "info2",label: "can access"}

            },
            "Title": "The \"protected\" Keyword [2/2]",
            "SubTitle": "Pro..[2/2]",
            "Content": {
                "1": {"type": "text","content": "In this diagram, the Checking Account inherits from the Bank Account. The Bank Account has a protected variable (Account Information) that is accessible by the Checking Account."},
                "2": {"type": "points","content": ["Subclasses can inherit and use protected members from their parent classes."]},
                "3": {"type": "remember","content": ["A checking account must have basic information from an original source."]},
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "protected keyword (2/2)"
            },
            Overview: "Understand how the protected keyword has a different case and how that affects visibility."
        },
        Step6: {
            QuestionType: "default",
            Boxes: {
                Box1: {id: 'john',position: { x: 100, y: 50 },data: { label: "John 👨" }},
                Box2: {id: 'johnheight',position: { x: 130, y: 120 },data: { label: "height 📏" }},
                Box3: {id: 'johnmethod',position: { x: 130, y: 190 },data: { label: "getHeight()" }},
                Box4: {id: 'paul',position: { x: 100, y: 270 },data: { label: "Paul 🧔‍♂️" }},
                Box5: {id: 'paulheight',position: { x: 130, y: 345 },data: { label: "height 📏" }},
                Box6: {id: 'paulmethod',position: { x: 130, y: 415 },data: { label: "getHeight()" }},
                Box7: {id: 'if',position: { x: 430, y: 75 },data: { label: "If Paul does.. 🤔" }},
                Box8: {id: 'nowork',position: { x: 430, y: 327.5 },data: { label: "It will NOT work ❌" }}
            },
            Edges: {
                Edge1: {id: 'if-nowork',source: 'if',target: 'nowork',animated: true,label: "John.height = 6'5 inches"},
                Edge2: {id: 'johnheightEDGE',source: 'john',target: "johnheight",animated: true},
                Edge3: {id: 'johnmethodEDGE',source: 'john',target: "johnmethod",animated: true},
                Edge4: {id: 'paulheightEDGE',source: 'paul',target: "paulheight",animated: true},
                Edge5: {id: 'paulmethodEDGE',source: 'paul',target: "paulmethod",animated: true}
            },
            Title: "The \"private\" Keyword",
            SubTitle: "Private",
            Content: {
                1: {type: "text",content: "In this diagram, you see a person trying to change another person's height. This won't work. Why? Because \"height\" is a personal variable."},
                2: {type: "points",content: ["\"private\" code can NOT be viewed in any class regardless of package."]},
                3: {type: "remember",content: ["Genetic-controlled factors cannot be changed by others."]},
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "private keyword"
            },
            Overview: "Understand how the private keyword affects code accessibility."
        },  
        Step7: {
            Title: "Match the Correct Answer",
            QuestionType: "question",
            Boxes: {
                Q1: {
                    QNode: {label: "A method in a class that should only be accessible within the same package and should not be accessible from subclasses in different packages.",id: "q1"},
                    ANode: {"label": "private","id": "a2"}
                },
                Q2: {
                    "QNode": {"label": "A variable that should only be accessible within the class it is declared and not visible to any other class.","id": "q2"},
                    "ANode": {"label": "protected","id": "a4"}
                },
                Q3: {
                    "QNode": {"label": "A method that should be accessible from any other class, regardless of the package it is in.","id": "q3"},
                    "ANode": {"label": "public","id": "a3"}
                },
                Q4: {
                    "QNode": {"label": "A constructor that should be accessible within the same package and also accessible to any subclasses even if they are in different packages.","id": "q4"},
                    "ANode": {label: "default",id: 'a1'}
                }
            },
            Edges: {

            },
            Content: {
            }
        }

    }
};

export const DefiningNumbers = {
    name: "Defining Numbers",
    icon: "Code",
    description: "Learn how to define numbers in Java, and explore their arithmetic operations.",
    filters: ["Basics", "Variables", "Data Types", "Operators"],
    unit: 1,
    passage: "In Java, int handles whole numbers within a range of approximately -2 billion to +2 billion using 32 bits (4 bytes), while double manages high-precision floating-point numbers with 64 bits (8 bytes) and about 15 decimal digits. long extends int to cover a wider range from -9 quintillion to +9 quintillion, using 64 bits, and short conserves memory with 16 bits for smaller integers from -32,768 to +32,767. float provides moderate precision with 32 bits (4 bytes) for single-precision floating-point numbers, approximately 7 decimal digits. byte uses 8 bits (1 byte) for small integers from -128 to +127, optimizing memory usage.",

    vocab: {
        1: {"name": "int", "desc": "A primitive data type in Java used to store whole numbers without decimal points, occupying 32 bits (4 bytes) of memory and accommodating values from -2 billion to +2 billion, making it ideal for most integer calculations."},
        2: {"name": "double", "desc": "A primitive data type in Java used to store double-precision floating-point numbers, occupying 64 bits (8 bytes) of memory and offering higher precision than float, approximately 15 decimal digits, suitable for precise calculations involving decimal values."},
        3: {"name": "long", "desc": "A primitive data type in Java used to store larger integer values than int, occupying 64 bits (8 bytes) of memory and accommodating values from -9 quintillion to +9 quintillion, useful for applications needing extensive numerical range."},
        4: {"name": "short", "desc": "A primitive data type in Java used to store smaller integer values than int, occupying 16 bits (2 bytes) of memory and accommodating values from -32,768 to +32,767, prioritizing memory efficiency."},
        5: {"name": "float", "desc": "A primitive data type in Java used to store single-precision floating-point numbers, occupying 32 bits (4 bytes) of memory and offering moderate precision, approximately 7 decimal digits, suitable for scenarios where memory efficiency and moderate precision are sufficient."},
        6: {"name": "byte", "desc": "A primitive data type in Java used to store small integer values, occupying 8 bits (1 byte) of memory and accommodating values from -128 to +127, optimizing memory usage in applications requiring compact data representation."}
    },
    steps: {
        Step1: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: '1-1', position: {x: 220, y: 150}, data: {label: "Numbers"} },
                Box2: { id: '1-2', position: {x: 60, y: 0}, data: {label: "Integers"}},
                Box3: {id: '1-3', position: {x: 10, y: 240}, data: {label: "Double"}},
                Box4: {id: '1-4', position: {x: 210, y: 340}, data: {label: "Byte"}},
                Box5: {id: '1-5', position: {x: 460, y: 260}, data: {label: "Longs"}},
                Box6: {id: '1-6', position: {x: 420, y: 10}, data: {label: "Shorts"}}
            },
            Edges: {
                Edge1: { id: '1-2-1-1', source: '1-2', target: '1-1', animated: true },
                Edge2: {id: '1-6-1-1', source: '1-6', target: '1-1', animated: true},
                Edge3: {id: '1-1-1-3', source: '1-1', target: '1-3', animated: true},
                Edge4: {id: '1-1-1-4', source: '1-1', target: '1-4', animated: true},
                Edge5: {id: '1-1-1-5', source: '1-1', target: '1-5', animated: true}
            },
            Title: "Introduction to Number Types",
            SubTitle: "Introduction",
            Overview: "Learn about Introduction to Number Types and how they are different to preserve memory in Java.",
            Content: {
                1: { type: "text", content: "In this lesson, we will explore the fundamental concepts of number types in Java. Understanding how different data types manage and preserve memory is crucial for efficient programming. Let's dive into the world of number types!" },
                2: { type: "text", content: "The number types in Java are:byte, short, int, long, float, double" },
                3: {type: "text", content: "The main ones you will be working with are integers and doubles."},
                4: {type: "text", content: "To fully understand numbering systems, you will also need to have a basic understanding of the binary system. It is not required, but highly useful."},
                5: { type: "code", content: ["int integer = 2;", "double a = 2; //yes, this works - is 2.0", "byte b = 1;"] }
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "access modifiers"
            }
        },
        Step2: {
            QuestionType: "default",
            Boxes: {
                Box3: {id: "s1e-3", position: {x: 40, y: 110}, data: {label: "2^0"}},
                Box4: {id: "s1e-4", position: {x: 40, y: 165}, data: {label: "2^1"}},
                Box5: {id: "s1e-5", position: {x: 40, y: 220}, data: {label: "2^2"}},
                Box6: {id: "s1e-6", position: {x: 40, y: 275}, data: {label: "2^3"}},
                Box7: {id: "s1e-7", position: {x: 40, y: 330}, data: {label: "2^4"}},
                Box8: {id: "s1e-8", position: {x: 40, y: 385}, data: {label: "2^5"}},
                Box9: {id: "s1e-9", position: {x: 40, y: 440}, data: {label: "2^6"}},
                Box10: {id: "s1e-10", position: {x: 40, y: 495}, data: {label: "2^7"}},
            },
            Edges: {
                Edge1: { id: '1-2-1-1', source: '1-2', target: '1-1', animated: true },
                Edge2: {id: '1-6-1-1', source: '1-6', target: '1-1', animated: true},
                Edge3: {id: '1-1-1-3', source: '1-1', target: '1-3', animated: true},
                Edge4: {id: '1-1-1-4', source: '1-1', target: '1-4', animated: true},
                Edge5: {id: '1-1-1-5', source: '1-1', target: '1-5', animated: true}
            },
            Title: "Introduction to Binary",
            SubTitle: "Binary",
            Overview: "Learn about Introduction to Binary and how all complex number types stem from it.",
            Content: {
                1: { type: "text", content: "The binary system uses a base-2 system, where numbers are represented using only two digits: 0 and 1. Each digit in this system is called a 'bit'. On its own, a bit can't do much, so bits are usually grouped together into sets of 8, called a 'byte'. With bytes, we can represent a lot more information, especially numbers." },
                2: { type: "text", content: "Because it uses only two digits, a single bit can either be 0 or 1. Understanding this simple concept is very important for learning how numbers work in Java. By grasping the basics of the binary system, you'll have a solid foundation for understanding more complex number types in Java." },
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "access modifiers"
            }
        },
        Step3: {
            QuestionType: "default",
            Boxes: {
                Box1: {id: "s2-1", position: {x: 40, y: 0}, data: {label: "-1.7976931348623157E+308"}},
                Box2: {id: "s2-2", position: {x: 40, y: 55}, data: {label: "-9,223,372,036,854,775,808"}},
                Box3: {id: "s2-3", position: {x: 40, y: 110}, data: {label: "-3.4028235E+38"}},
                Box4: {id: "s2-4", position: {x: 40, y: 165}, data: {label: "-2^31"}},
                Box5: {id: "s2-5", position: {x: 40, y: 220}, data: {label: "-32,768"}},
                Box6: {id: "s2-6", position: {x: 40, y: 275}, data: {label: "-128"}},
                Box7: {id: "s2-7", position: {x: 40, y: 330}, data: {label: "127"}},
                Box8: {id: "s2-8", position: {x: 40, y: 385}, data: {label: "32,767"}},
                Box9: {id: "s2-9", position: {x: 40, y: 440}, data: {label: "2^31 - 1"}},
                Box10: {id: "s2-10", position: {x: 40, y: 495}, data: {label: "3.4028235E+38"}},
                Box11: {id: "s2-11", position: {x: 40, y: 550}, data: {label: "9,223,372,036,854,775,807"}},
                Box12: {id: "s2-12", position: {x: 40, y: 605}, data: {label: "1.7976931348623157E+308"}},

                //Title boxes start here
                Box15: {id: "s2-15", position: {x: 310, y: 302.5}, data: {label: "Integer"}},
                Box18: {id: "s2-18", position: {x: 670, y: 302.5}, data: {label: "Double"}}
            },
            Edges: {
               Edge5: {id: "int-1", source: "s2-15", target: "s2-4"},
               Edge6: {id: "int-2", source: "s2-9", target: "s2-15"},
           
               Edge11: {id: "double-1", source: "s2-18", target: "s2-1"},
               Edge12: {id: "double-2", source: "s2-12", target: "s2-18"}
            },
            Title: "Integers and Doubles",
            SubTitle: "Int & Double",
            Overview: "Understand how the public access modifier works and its implications for code accessibility.",
            Content: {
                1: { type: "text", content: "The most common types of numbers that you will use in Java are Integers and Doubles. Integers represent numbers that do not have any decimal points and take up 32 bits of memory (4 bytes). Doubles can represent Integers and also represent numbers that have a decimal point. They take up 64 bits of memory (8 bytes)." },
                2: { type: "points", content: ["Integers represent whole numbers", "Doubles represent whole numbers (and/or) with decimal places."] },
                3: { type: "code", content: ["int x = 2;", "double a = 4.0;", "//is the same as", "double a = 4;"] }
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "public keyword"
            }
            
        },
        Step4: {
            QuestionType: "default",
            Boxes: {
                Box1: {id: "s2-1", position: {x: 40, y: 0}, data: {label: "-1.7976931348623157E+308"}},
                Box2: {id: "s2-2", position: {x: 40, y: 55}, data: {label: "-9,223,372,036,854,775,808"}},
                Box3: {id: "s2-3", position: {x: 40, y: 110}, data: {label: "-3.4028235E+38"}},
                Box4: {id: "s2-4", position: {x: 40, y: 165}, data: {label: "-2^31"}},
                Box5: {id: "s2-5", position: {x: 40, y: 220}, data: {label: "-32,768"}},
                Box6: {id: "s2-6", position: {x: 40, y: 275}, data: {label: "-128"}},
                Box7: {id: "s2-7", position: {x: 40, y: 330}, data: {label: "127"}},
                Box8: {id: "s2-8", position: {x: 40, y: 385}, data: {label: "32,767"}},
                Box9: {id: "s2-9", position: {x: 40, y: 440}, data: {label: "2^31 - 1"}},
                Box10: {id: "s2-10", position: {x: 40, y: 495}, data: {label: "3.4028235E+38"}},
                Box11: {id: "s2-11", position: {x: 40, y: 550}, data: {label: "9,223,372,036,854,775,807"}},
                Box12: {id: "s2-12", position: {x: 40, y: 605}, data: {label: "1.7976931348623157E+308"}},

                //Title boxes start here
                Box14: {id: "s2-14", position: {x: 200, y: 302.5}, data: {label: "Short"}},
                Box15: {id: "s2-15", position: {x: 310, y: 302.5}, data: {label: "Integer"}},
                Box16: {id: "s2-16", position: {x: 430, y: 302.5}, data: {label: "Long"}},
                Box18: {id: "s2-18", position: {x: 670, y: 302.5}, data: {label: "Double"}}
            },
            Edges: {
                Edge3: {id: "short-1", source: "s2-14", target: "s2-5"},
                Edge4: {id: "short-2", source: "s2-8", target: "s2-14"},

                Edge5: {id: "int-1", source: "s2-15", target: "s2-4"},
                Edge6: {id: "int-2", source: "s2-9", target: "s2-15"},

                Edge7: {id: "long-1", source: "s2-16", target: "s2-3"},
                Edge8: {id: "long-2", source: "s2-10", target: "s2-16"},
            
                Edge11: {id: "double-1", source: "s2-18", target: "s2-1"},
                Edge12: {id: "double-2", source: "s2-12", target: "s2-18"}
            },
            Title: "Long and Short",
            SubTitle: "Long & Short",
            Content: {
                1: {type: "title", content: "Long Data Type"},
                2: {type: "text", content: "The long data type in Java is used to store very large integer values that are larger than what int can handle. It takes up 64 bits (8 bytes) of memory."},
                3: {type: "points", content: ["Memory Usage: Takes up 8 bytes (64 bits).", "Declaration: Add L at the end of the number to specify it as a long."]},
                4: {type: "code", content: ["long bigNumber = 100000L; //'L' indicates a long number"]},
                5: {type: "seperator"},
                6: {type: "title", content: "Short Data Type"},
                7: {type: "text", content: "The short data type in Java is used for storing smaller integer values. It takes up 16 bits (2 bytes) of memory."},
                8: {type: "points", content: ["Memory Usage: Takes up 2 bytes (16 bits)."]},
                9: {type: "code", content: ["short smallNumber = 100; //Does not have an ending"]}
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "default keyword"
            },
            Overview: "Understand how the default keyword operates regarding code accessibility."
        },
        Step5: {
            QuestionType: "default",
            Boxes: {
                Box1: {id: "s2-1", position: {x: 40, y: 0}, data: {label: "-1.7976931348623157E+308"}},
                Box2: {id: "s2-2", position: {x: 40, y: 55}, data: {label: "-9,223,372,036,854,775,808"}},
                Box3: {id: "s2-3", position: {x: 40, y: 110}, data: {label: "-3.4028235E+38"}},
                Box4: {id: "s2-4", position: {x: 40, y: 165}, data: {label: "-2^31"}},
                Box5: {id: "s2-5", position: {x: 40, y: 220}, data: {label: "-32,768"}},
                Box6: {id: "s2-6", position: {x: 40, y: 275}, data: {label: "-128"}},
                Box7: {id: "s2-7", position: {x: 40, y: 330}, data: {label: "127"}},
                Box8: {id: "s2-8", position: {x: 40, y: 385}, data: {label: "32,767"}},
                Box9: {id: "s2-9", position: {x: 40, y: 440}, data: {label: "2^31 - 1"}},
                Box10: {id: "s2-10", position: {x: 40, y: 495}, data: {label: "3.4028235E+38"}},
                Box11: {id: "s2-11", position: {x: 40, y: 550}, data: {label: "9,223,372,036,854,775,807"}},
                Box12: {id: "s2-12", position: {x: 40, y: 605}, data: {label: "1.7976931348623157E+308"}},

                //Title boxes start here
                Box13: {id: "s2-13", position: {x: 110, y: 302.5}, data: {label: "Byte"}},
                Box14: {id: "s2-14", position: {x: 200, y: 302.5}, data: {label: "Short"}},
                Box15: {id: "s2-15", position: {x: 310, y: 302.5}, data: {label: "Integer"}},
                Box16: {id: "s2-16", position: {x: 430, y: 302.5}, data: {label: "Long"}},
                Box18: {id: "s2-18", position: {x: 670, y: 302.5}, data: {label: "Double"}}
            },
            Edges: {
                Edge1: {id: "Byte-1", source: "s2-13", target: "s2-6"},
                Edge2: {id: "Byte-2", source: "s2-7", target: "s2-13"},

                Edge3: {id: "short-1", source: "s2-14", target: "s2-5"},
                Edge4: {id: "short-2", source: "s2-8", target: "s2-14"},

                Edge5: {id: "int-1", source: "s2-15", target: "s2-4"},
                Edge6: {id: "int-2", source: "s2-9", target: "s2-15"},

                Edge7: {id: "long-1", source: "s2-16", target: "s2-3"},
                Edge8: {id: "long-2", source: "s2-10", target: "s2-16"},
            
                Edge11: {id: "double-1", source: "s2-18", target: "s2-1"},
                Edge12: {id: "double-2", source: "s2-12", target: "s2-18"}
            },
            Title: "About Bytes",
            SubTitle: "Byte",
            Content: {
                1: {type: "text",content: "Bytes range from these values based on how the binary system works. The first bit is represented as the sign, and the rest of the bits are able to be expressed as the actual number."},
                2: {type: "remember",content: ["8 bits make up a byte; with the sign it leaves 7 bits which maxes out at 127.", "Bytes have 8 bits which represent powers of two.", "[2^7] [2^6] [2^5] [2^4] [2^3] [2^2] [2^1] [2^0]", "[128] [64] [32] [16] [8] [4] [2] [1]", "0 = positive; 1 = negative "]},
                3: {type: "points", content: ["Bytes are signed integers, which mean they use a bit to represent the sign.", "First digit represents the sign."]},
                4: {type: "code", content: ["byte b = 0b01111111; // Represents 127 in binary", "byte a = (byte) 0b10000000; //Represents 128 in binary", "// Needs explicit casting to byte to interpret as ", "// signed byte, resulting in -128"]}
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "protected keyword (1/2)"
            },
            Overview: "Understand how the protected keyword influences code accessibility."
        },
        Step6: {
            "QuestionType": "default",
            "Boxes": {
                Box1: {id: "s2-1", position: {x: 40, y: 0}, data: {label: "-1.7976931348623157E+308"}},
                Box2: {id: "s2-2", position: {x: 40, y: 55}, data: {label: "-9,223,372,036,854,775,808"}},
                Box3: {id: "s2-3", position: {x: 40, y: 110}, data: {label: "-3.4028235E+38"}},
                Box4: {id: "s2-4", position: {x: 40, y: 165}, data: {label: "-2^31"}},
                Box5: {id: "s2-5", position: {x: 40, y: 220}, data: {label: "-32,768"}},
                Box6: {id: "s2-6", position: {x: 40, y: 275}, data: {label: "-128"}},
                Box7: {id: "s2-7", position: {x: 40, y: 330}, data: {label: "127"}},
                Box8: {id: "s2-8", position: {x: 40, y: 385}, data: {label: "32,767"}},
                Box9: {id: "s2-9", position: {x: 40, y: 440}, data: {label: "2^31 - 1"}},
                Box10: {id: "s2-10", position: {x: 40, y: 495}, data: {label: "3.4028235E+38"}},
                Box11: {id: "s2-11", position: {x: 40, y: 550}, data: {label: "9,223,372,036,854,775,807"}},
                Box12: {id: "s2-12", position: {x: 40, y: 605}, data: {label: "1.7976931348623157E+308"}},

                //Title boxes start here
                Box13: {id: "s2-13", position: {x: 110, y: 302.5}, data: {label: "Byte"}},
                Box14: {id: "s2-14", position: {x: 200, y: 302.5}, data: {label: "Short"}},
                Box15: {id: "s2-15", position: {x: 310, y: 302.5}, data: {label: "Integer"}},
                Box16: {id: "s2-16", position: {x: 430, y: 302.5}, data: {label: "Long"}},
                Box17: {id: "s2-17", position: {x: 550, y: 302.5}, data: {label: "Float"}},
                Box18: {id: "s2-18", position: {x: 670, y: 302.5}, data: {label: "Double"}}
            },
            "Edges": {
                
                Edge1: {id: "Byte-1", source: "s2-13", target: "s2-6"},
                Edge2: {id: "Byte-2", source: "s2-7", target: "s2-13"},

                Edge3: {id: "short-1", source: "s2-14", target: "s2-5"},
                Edge4: {id: "short-2", source: "s2-8", target: "s2-14"},

                Edge5: {id: "int-1", source: "s2-15", target: "s2-4"},
                Edge6: {id: "int-2", source: "s2-9", target: "s2-15"},

                Edge7: {id: "long-1", source: "s2-16", target: "s2-3"},
                Edge8: {id: "long-2", source: "s2-10", target: "s2-16"},

                Edge9: {id: "float-1", source: "s2-17", target: "s2-2"},
                Edge10: {id: "float-2", source: "s2-11", target: "s2-17"},

                Edge11: {id: "double-1", source: "s2-18", target: "s2-1"},
                Edge12: {id: "double-2", source: "s2-12", target: "s2-18"}

            },
            "Title": "About Floats",
            "SubTitle": "Float",
            "Content": {
                "1": {"type": "text","content": "In Java, floating-point numbers are used to represent decimal values with fractions. The float and double data types handle these numbers, with float being single-precision and double being double-precision."},
                "2": {"type": "points","content": ["Memory: Uses 32 bits (4 bytes).","Precision: Less precise than double.","Declaration: Add F at the end of the value."]},
                "3": {"type": "code","content": ["float num = 12.375F; "]},
                4: {type: "title", content: "Three Parts of a Float"},
                5: {type: "points", content: ["Sign bit: 1 bit, indicates the sign of the number (0 for positive, 1 for negative).", "Exponent: 8 bits, represents the exponent of the number in base 2.", "Actual Number: 23 bits, represents the significant digits of the number in base 2."]}
            },
            Teach: {
                good: ["default", "accessor", "no modifiers", "viewed", "same", "package", "is", "is", "a"],
                bad: ["public", "private", "global"],
                title: "protected keyword (2/2)"
            },
            Overview: "Understand how the protected keyword has a different case and how that affects visibility."
        },
        Step7: {
            Title: "Point to the Correct Answer",
            QuestionType: "question",
            GameType: "rotateMatch",

            MainBox: "What does an integer hold?",
            Boxes: {
                Left: {
                    Text: "Integers hold numbers that have a whole number and a decimal number.",
                    Right: false
                },
                Top: {
                    Text: "Integers represent whole numbers, including both positive and negative values.",
                    Right: true
                },
                Right: {
                    Text: "Integers specifically represent only positive numbers within the set of whole numbers.",
                    Right: false
                }
            },
            Content: {
            }
        }

    }
};

export const DefiningCharacters = {
    name: "Defining Characters",
    icon: "Code",
    description: "Learn how to define characters in Java using the char data type, and understand basic operations and conversions involving characters.",
    filters: ["Basics", "Variables", "Data Types"],
    unit: 1,
    steps: {}
};

export const DefiningBooleans = {
    name: "Defining Booleans",
    icon: "Code",
    description: "Learn how to define booleans in Java, and understand boolean logic.",
    filters: ["Basics", "Variables", "Data Types", "Control Statements"],
    unit: 1,
    steps: {}
};

export const DefiningStrings = {
    name: "Defining Strings",
    icon: "Code",
    description: "Learn how to define strings in Java, and use the .substring() method to manipulate string data.",
    filters: ["Basics", "Variables", "Data Types", "String Manipulation"],
    unit: 1,
    steps: {}
};

export const IfStatement = {
    name: "If Statement",
    icon: "Code",
    description: "Learn how to use conditional statements in Java to make decisions based on different conditions.",
    filters: ["Basics", "Control Statements"],
    unit: 3,
    steps: {}
};

export const ForLoop = {
    name: "For Loop",
    icon: "GitMerge",
    description: "Explore the usage of for loops in Java for iterating over arrays and collections or executing a block of code a fixed number of times.",
    filters: ["Basics", "Control Statements", "Loops"],
    unit: 4,
    steps: {}
};

export const WhileLoop = {
    name: "While Loop",
    icon: "GitMerge",
    description: "Understand the syntax and usage of while loops in Java for executing a block of code repeatedly as long as a specified condition is true.",
    filters: ["Basics", "Control Statements", "Loops"],
    unit: 4,
    steps: {}
};

export const DoWhileLoop = {
    name: "Do-While Loop",
    icon: "GitMerge",
    description: "Learn about the do-while loop in Java, which executes a block of code once, and then repeats the loop as long as a specified condition is true.",
    filters: ["Basics", "Control Statements", "Loops"],
    unit: 4,
    steps: {}
};

export const ForEachLoop = {
    name: "For-Each Loop",
    icon: "GitMerge",
    description: "Explore the for-each loop (enhanced for loop) in Java for iterating over elements in arrays or collections.",
    filters: ["Basics", "Control Statements", "Loops", "Collections"],
    unit: 4,
    steps: {}
};

export const SwitchStatement = {
    name: "Switch Statement",
    icon: "GitMerge",
    description: "Understand how to use switch statements in Java for multi-way branching based on the value of an expression.",
    filters: ["Basics", "Control Statements"],
    unit: 3,
    steps: {}
};

export const Methods = {
    name: "Methods",
    icon: "Terminal",
    description: "Explore defining methods, passing arguments, returning values, and method overloading.",
    filters: ["Basics", "Functions"],
    unit: 5,
    steps: {}
};

export const EnumUsage = {
    name: "Enums",
    icon: "CircleDashed",
    description: "Learn how to define and use enums in Java to represent a fixed set of constants.",
    filters: ["Intermediate Concepts", "Variables", "Data Types"],
    unit: "N/A",
    steps: {}
};

export const ArrayUsage = {
    name: "Arrays",
    icon: "List",
    description: "Explore how to declare, initialize, and manipulate one-dimensional arrays in Java.",
    filters: ["Basics", "Data Structures", "Collections"],
    unit: 6,
    steps: {}
};

export const TwoDArrayUsage = {
    name: "2D Arrays",
    icon: "List",
    description: "Learn how to declare, initialize, and work with two-dimensional arrays (arrays of arrays) in Java.",
    filters: ["Intermediate Concepts", "Data Structures", "Collections"],
    unit: 8,
    steps: {}
};

export const ArraysAndArrayLists = {
    name: "Arrays and ArrayLists",
    icon: "List",
    description: "Master the use of arrays and ArrayLists in Java, including common operations and algorithms.",
    filters: ["Intermediate Concepts", "Data Structures", "Collections"],
    unit: "N/A",
    steps: {}
};

export const ArrayListUsage = {
    name: "ArrayLists",
    icon: "List",
    description: "Learn how to use ArrayLists in Java, a resizable array implementation of the List interface.",
    filters: ["Intermediate Concepts", "Data Structures", "Collections"],
    unit: 7,
    steps: {}
};

export const DemorgansLaw = {
    name: "Simplifying Boolean Expressions",
    icon: "WrapText",
    description: "Learn how to simplify Boolean expressions using De Morgan's laws, which state the equivalence between negating logical conjunctions (AND) and disjunctions (OR), and vice versa.",
    filters: ["Intermediate Concepts", "Boolean Logic"],
    unit: 3,
    steps: {}
};

export const ShortCircuitEvaluation = {
    name: "Short-Circuit Evaluation",
    icon: "GitMerge",
    description: "Understand short-circuit evaluation in Java and other programming languages, where the evaluation of Boolean expressions stops as soon as the outcome is determined by the initial conditions, improving efficiency and avoiding unnecessary computations.",
    filters: ["Intermediate Concepts", "Boolean Logic"],
    unit: 3,
    steps: {}
};

export const DeclarationVsInstantiation = {
    name: "Declaration vs Instantiation",
    icon: "SquareTerminal",
    description: "Learn about the difference between declaring and instantiating variables and objects in Java. Declaration refers to specifying the type and name of a variable or object without allocating memory, while instantiation involves creating an instance of a class or allocating memory for an object.",
    filters: ["Basics", "Variables", "Object-Oriented Programming"],
    unit: 2,
    steps: {}
};

export const BasicOOP = {
    name: "Object-Oriented Programming",
    icon: "Box",
    description: "Introduction to classes, objects, and relational hierarchies.",
    filters: ["Basics", "Object-Oriented Programming"],
    unit: 5,
    steps: {}
};

export const WritingClasses = {
    name: "Writing Classes",
    icon: "Box",
    description: "Learn the fundamentals of writing classes in Java, including constructors, fields, methods, and encapsulation.",
    filters: ["Basics", "Object-Oriented Programming", "Classes and Objects"],
    unit: 5,
    steps: {}
};

export const Constructors = {
    name: "Constructors",
    icon: "Box",
    description: "Learn about constructors in Java, including default constructors, parameterized constructors, constructor chaining, and best practices.",
    filters: ["Basics", "Object-Oriented Programming", "Classes and Objects"],
    unit: 5,
    steps: {}
};

export const ThisKeyword = {
    name: "this Keyword",
    icon: "Layers",
    description: "Understand the 'this' keyword in Java, its usage to refer to the current object, and resolving ambiguity between instance variables and parameters.",
    filters: ["Intermediate Concepts", "Object-Oriented Programming"],
    unit: 5,
    steps: {}
};

export const Scope = {
    name: "Scope",
    icon: "Layers",
    description: "Learn about variable scope in Java, including local variables, instance variables, class (static) variables, and block scope.",
    filters: ["Basics", "Variables"],
    unit: 5,
    steps: {}
};

export const UsingClasses = {
    name: "Using Classes",
    icon: "Box",
    description: "Explore how to effectively use classes in Java for creating objects, accessing fields and methods, and implementing inheritance.",
    filters: ["Object-Oriented Programming", "Classes and Objects"],
    unit: 2,
    steps: {}
};

export const AdvancedOOP = {
    name: "Advanced Object-Oriented Programming",
    icon: "Box",
    description: "Introduction to classes, objects, inheritance, polymorphism, and encapsulation in Java.",
    filters: ["Intermediate Concepts", "Object-Oriented Programming", "Inheritance", "Polymorphism", "Encapsulation"],
    unit: 9,
    steps: {}
};

export const RVCTime = {
    name: "Run vs Compile Time",
    icon: "Clock",
    description: "Understand the difference between run time and compile time in software development.",
    filters: ["Basics"],
    unit: 1,
    steps: {}
};

export const Recursion = {
    name: "Recursion",
    icon: "RefreshCw",
    description: "Understand recursive methods, recursion vs. iteration, and solving problems recursively.",
    filters: ["Intermediate Concepts", "Algorithms"],
    unit: 10,
    steps: {}
};

export const Exception = {
    name: "Exceptions and Error Handling",
    icon: "AlertCircle",
    description: "Learn how to handle exceptions using try-catch blocks and understanding checked vs. unchecked exceptions.",
    filters: ["Intermediate Concepts", "Exception Handling"],
    unit: "N/A",
    steps: {}
};

export const WrapperClasses = {
    name: "Wrapper Classes",
    icon: "WrapText",
    description: "Explore Wrapper Classes in Java, which allow you to use primitive data types as objects.",
    filters: ["Intermediate Concepts", "Variables"],
    unit: 7,
    steps: {}
};

export const StaticVsNonStatic = {
    name: "Static vs Non-Static",
    icon: "CircleDashed",
    description: "Learn what the difference is between static and non-static features in Java.",
    filters: ["Intermediate Concepts", "Object-Oriented Programming"],
    unit: 5,
    steps: {}
};

export const InitializationVSDeclaration = {
    name: "Initialization Vs Declaration",
    icon: "SquareTerminal",
    description: "Learn the ins and outs of when to look for Initialization Vs Declaration.",
    filters: ["Basics", "Variables"],
    unit: 1,
    steps: {}
};

export const SuperclassVsSubclass = {
    name: "Superclass Vs Subclass",
    icon: "ArrowLeftRight",
    description: "Learn the difference and the relationship between a superclass and its subclass.",
    filters: ["Intermediate Concepts", "Object-Oriented Programming", "Inheritance"],
    unit: 9,
    steps: {}
};

export const Polymorphism = {
    name: "Polymorphism",
    icon: "ListMinus",
    description: "Learn deeper about the comparison of a parent class to its child class.",
    filters: ["Intermediate Concepts", "Object-Oriented Programming", "Polymorphism"],
    unit: 9,
    steps: {}
};

export const Encapsulation = {
    name: "Encapsulation",
    icon: "Layers",
    description: "Further your knowledge when dealing with parent-child class relationships.",
    filters: ["Intermediate Concepts", "Object-Oriented Programming", "Encapsulation"],
    unit: 9,
    steps: {}
};

export const IPPVSPPI = {
    name: "++i vs i++",
    icon: "CopyPlus",
    description: "Understand the difference between pre-increment and post-increment operations.",
    filters: ["Intermediate Concepts", "Operators", "Boolean Logic"],
    unit: "N/A",
    steps: {}
};


export const Lessons = [
    WhatIsJava,
    AccessModifiers,
    DefiningNumbers,
    DefiningBooleans,
    DefiningStrings,
    DefiningCharacters,
    IfStatement,
    ForLoop,
    WhileLoop,
    DoWhileLoop,
    ForEachLoop,
    SwitchStatement,
    DemorgansLaw,
    ShortCircuitEvaluation,
    DeclarationVsInstantiation,
    Methods,
    ArraysAndArrayLists,
    ArrayListUsage,
    ArrayUsage,
    TwoDArrayUsage,
    BasicOOP,
    WritingClasses,
    Constructors,
    ThisKeyword,
    Scope,
    UsingClasses,
    AdvancedOOP,
    RVCTime,
    Recursion,
    Exception,
    WrapperClasses,
    StaticVsNonStatic,
    InitializationVSDeclaration,
    SuperclassVsSubclass,
    Polymorphism,
    Encapsulation,
    EnumUsage,
    IPPVSPPI
];


// Function to return icon component based on icon name
export const returnIcon = (iconName: string) => {
    switch (iconName) {
        case "Eye":
            return Eye;
        case "Code":
            return Code;
        case "GitMerge":
            return GitMerge;
        case "Terminal":
            return Terminal;
        case "List":
            return List;
        case "Box":
            return Box;
        case "RefreshCw":
            return RefreshCw;
        case "AlertCircle":
            return AlertCircle;
        case "FileText":
            return FileText;
        case "Search":
            return Search;
        case "Layers":
            return Layers;
        case "WrapText":
            return WrapText;
        case "CircleDashed":
            return CircleDashed;
        case "SquareTerminal":
            return SquareTerminal;
        case "ArrowLeftRight":
            return ArrowLeftRight;
        case "ListMinus":
            return ListMinus;
        case "Plus":
            return Plus;
        case "CopyPlus":
            return CopyPlus;
        case "Coffee":
            return Coffee;
        default:
            return BadgeInfo; // Handle other cases or return null if no match
    }

};

export const DefaultLesson = {
    name: "DefaultLesson",
    icon: "CopyPlus",
    description: "DefaultLesson",
    filters: [],
    unit: "N/A",
    passage: "",
    steps: {}
};

export const getLessonByParamName = (finder: string) => {
    return Lessons.find(lesson => lesson.name.trim().replace(/\s+/g, '').toLowerCase() == finder) || DefaultLesson;
}
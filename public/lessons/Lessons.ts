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
                2: { type: "points", content: ["public: Any"]}
            }
        },
        Step5: {
            QuestionType: "default",
            Boxes: {
                Box1: { id: 'S4-1', position: {x: 220, y: 150}, data: {label: "void"} },

            },
            Edges: {
                Edge1: { id: 'e1-2', source: '1', target: '2', animated: true },
            },
            Title: "Syntax",
            SubTitle: "Syntax",
            Overview: "Learn about access modifiers and how they control access to variables and methods in Java.",
            Content: {
                1: { type: "text", content: "Access Modifiers control how variables and methods are accessed within a class, by other classes in the same package, or by classes in different packages, ensuring proper data handling, validation, and security." },
                2: { type: "text", content: "The four modifiers are `public`, `default`, `protected`, and `private`." },
                3: { type: "code", content: ["private static int employeeCount = 1020;", "protected Data companyData;", "private ArrayList<Employee> list;", "", "public static void addEmployee(Employee wkr) {", "\tlist.add(wkr);", "\temployeeCount++;", "}", "class Employee {...} //default modifier - no attribute"] }
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
            }
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
            }
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
            }
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
            }
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
    steps: {}
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
    name: "Simplifying Boolean Expressions (De Morgan's Law)",
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
    filters: ["Intermediate Concepts", "Object-Oriented Programming", "Classes and Objects"],
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
    steps: {}
};

export const getLessonByParamName = (finder: string) => {
    return Lessons.find(lesson => lesson.name.trim().replace(/\s+/g, '').toLowerCase() == finder) || DefaultLesson;
}
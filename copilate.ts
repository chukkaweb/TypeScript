// https://code.visualstudio.com/docs/copilot/overview

// ====================  SUMMARY ====================
//  Chat view:
// Ask Copilot for help with any task or question in the Chat view, bringing in code from your current files
// Shortcut	     Description
// ⌃⌘I	           Open the Chat view 
// ⇧⌘I	           Open Copilot Edits view and start a code editing session across multiple files
// ⇧⌥⌘L	         Open Quick Chat and ask a quick question to Copilot.
// ⌘I	           Start Inline Chat to send a chat request to Copilot directly from the editor. 
// F2	           Get AI-powered suggestions when renaming symbols in your code.

// Code editing session (Preview)
// Use Copilot Edits to start a code editing session where you can iterate quickly on AI-generated code edits that are applied directly across multiple files in your workspace.

// Action	  Description
// ⇧⌘I	      Open the Copilot Edits view and start a code editing session across multiple files.
// +         Start a new edit session.
// Accept	  Accept all current edits.
// Discard	  Discard all current edits.
//           View all edits in a multi-file diff editor.
//           Undo the last edit.
//            Redo the last edit.
// Add Files...	Attach files to working set.
// Tips
// Add all files for which you want to get edits to the working set.
// Be specific and precise about the changes you want Copilot Edits to make.
// If you have a larger task, decompose it in smaller tasks and iterate often.

// Slash commands
// /clear: start a new chat session
// /help: get help about using GitHub Copilot
// @workspace /explain (or /explain): explain how the selected code works
// @workspace /fix (or /fix): propose a fix for the problems in the selected code
// @workspace /new (or /new): scaffold code for a new workspace or new file
// @vscode /runCommand: search or run a VS Code command
  
// Tips and Tricks
//   - Example: `// Simplify this function`.
//   Let's use @vscode to ask about VS Code. Enter @vscode how to debug node.js app in the chat input field.

// #codebase Directive:
// Example  #codebase what are my code preferences 
// #file Directive: Specify a file for context (e.g., `#file.factorial_loop.ts`).

// @workspace
// @workspace document the project overview
// @workspace document the project requirements
// @workspace document the project constraints
// @workspace document the project dependencies
// @workspace document the project summary
// @workspace how is auth implemented?
// For detailed descriptions, you can append prompts such as "document the project architecture" or "document the project design."

// cheat sheet
// Tips
// @github 
// has knowledge about your GitHub repositories, issues, pull requests, and topics, and can also perform web searches using the Bing API
// @github Explain the changes in the code of this commit
// @github What logic does user_auth.js encapsulate?
// @github What are all of the open PRs assigned to me?
// @github Can I use Copilot knowledge bases with Copilot Individual?
// @github What are the latest issues assigned to me?
// @github When was the latest release?
// @github How would I fix this code scanning alert?
  
// Use / commands and @ participants to get more precise and relevant answers.
// Be specific, keep it simple, and ask follow-up questions to get the best results.
// Provide context by attaching files, symbols, or selections to your chat prompt.

// Drag and drop editor tabs, or files or folders from the Explorer view, Search view, or editor breadcrumb onto the Chat view.
  
// In the editor, you can access smart actions by selecting a block of code, right-clicking, and then choosing Copilot.

// Use Inline Chat to generate a basic web server
// First, add a new TypeScript file server.ts to your workspace.
// Now, press ⌘I on your keyboard to bring up Copilot Inline Chat.
// Copilot Inline Chat gives you a chat interface that 
// Type "add a simple express web server" in the chat input field, and press Enter

// Refactor your code through AI chat
// selected cdoe press ⌘I to start Inline Chat. it will give the error . 
  
// Using GitHub Copilot in Real-Time Projects
// Generate Angular Component: Example: `// Create an Angular component for a user profile`.
// API Integration: Example: `// Write a function to fetch user data from an API`.
// Form Validation: Example: `// Create a reactive form with validation`.
// RxJS Operators: Example: `// Use RxJS operators to combine observables`.
// Unit Tests: Example: `// Write a Jasmine test for an Angular service method`.
// Error Handling: Example: `// Add error handling for this API call`.
// Dynamic UI: Example: `// Generate code for a dynamic dropdown menu`.
// Styling Enhancements: Example: `// Add responsive styles for a login page`.

// Generate a README File:
// To create a README file, enter the prompt @workspace generate a readme document that can be used as a repo description.

// Overview 
//   Answer coding questions : you can ask questions such as "what is recursion?" or "how to create a singleton in Java?"
//   Improve code understanding by explaining selected code. 
//   Provide guidance that is specific to your codebase. : For example, "how to add a contacts page to my app?" or "how do I read customer data from the database?".
//   Code refactoring and improvements
// Fix issues
//   Propose a fix for bugs in your code with the /fix command by suggesting code snippets and solutions based on the context of the error or issue.
//   Propose a fix for failing tests (preview). When you run automated tests for your code, Copilot can suggest code fixes for tests that fail with the /fixTestFailure command.
    
// Productivity improvements
// AI-generated commit messages and PR descriptions based on the code changes in a commit or the changes in a pull request. 
// Use the sparkle button in the Source Control view or GitHub PR extension to generate a title and description that summarizes your changes.

// AI-generated rename suggestions for symbols in your source code. 


// Jumpstart your project
// Generate a new VS Code workspace for your choice of technologies with /new to get started quickly with a new project

// Generate unit test cases : 
// Configure your testing framework setup @workpsace/setupTests.
// Write unit test cases for your testing framework @workpsace/tests.
// /fixTestFailure	Ask Copilot for suggestions on how to fix failing tests.

// Generate code documentation
//   Generate code documentation for multiple languages 
//     Use /doc or a Copilot smart action to help you generate meaningful code documentation.
  
// Review code (Preview)
// Copilot can do a quick review pass of a code block or perform a review of uncommitted changes in your workspace. Review feedback shows up as comments in the editor, where you can apply the suggestions.

// Action	Description
// Review and Comment (Preview)	Select a block of code, and select Copilot > Review and Comment from the editor context menu for quick review pass.
// Copilot Code Review	Select the Copilot Code Review button in the Source Control view for a deeper review of all uncommitted changes.
  
// ==================== DETAIL ====================
// What is GitHub Copilot?
//   - AI-powered code completion tool.
//   - Provides real-time code suggestions.

// 2. Getting Started with GitHub Copilot
// Installation and Access
//   - Sign up for GitHub Copilot Free or request access from your enterprise admin.
//   - GitHub Copilot subscription required.
//   - Available as a VS Code extension.
//   - Log in with your GitHub account.
  
// Using GitHub Copilot
//   Install the extension and sign in to your GitHub account.
//   Start Typing: Copilot suggests code snippets.
//   Tab to Accept: Accept suggestions with the Tab key.
//   Alternative Suggestions: Use shortcuts `Ctrl` + `[ or ]` (Windows) or `Cmd` + `[ or ]` (Mac).
//   Manual Trigger: Use `Ctrl + Space` for suggestions.

// 3. Tips and Tricks
// Comment-Driven Development: Use clear comments for better suggestions.
//   - Example: `// Create a function to sort an array of numbers`.
  
// Context-Aware Suggestions: Place the cursor near existing code for better suggestions.
// Refactor Code: Ask Copilot to simplify code.
//   - Example: `// Simplify this function`.
  
// Explore Edge Cases: Ask Copilot for test cases or examples
// Switch Suggestions: Use shortcuts to cycle through alternatives.

// Use Cases for Angular Developers
// 1. Generate Boilerplate Code (e.g., components, services).
// 2. Write Unit Tests (e.g., Jasmine test cases).
// 3. Error Handling (e.g., adding try-catch blocks).
// 4. Optimize Code (e.g., refactor loops).
// 5. Documentation (e.g., generate comments for functions).
// 6. Style Enhancements (e.g., add animations or styles).
// 7. Dynamic Forms (e.g., create forms with validation).
// 8. RxJS Operators (e.g., using `combineLatest`).

// 5. Best Practices
// Be Specific: Use clear comments for better suggestions.
// Review Suggestions: Always review suggestions for correctness, security, and style.
// Don’t Over-Rely: Copilot should be an assistant, not a substitute for learning.
// Privacy: Avoid using sensitive or proprietary code.

// 6. Advanced Tips
// Multi-line Suggestions: Start typing complex functions for multi-line suggestions.
// Configuration: Adjust settings in your editor.
// Feedback Loop: Use thumbs up/down for suggestions to help improve Copilot.
  
// 7. Using GitHub Copilot in Real-Time Projects
// Generate Angular Component: Example: `// Create an Angular component for a user profile`.
// API Integration: Example: `// Write a function to fetch user data from an API`.
// Form Validation: Example: `// Create a reactive form with validation`.
// RxJS Operators: Example: `// Use RxJS operators to combine observables`.
// Unit Tests: Example: `// Write a Jasmine test for an Angular service method`.
// Error Handling: Example: `// Add error handling for this API call`.
// Dynamic UI: Example: `// Generate code for a dynamic dropdown menu`.
// Styling Enhancements: Example: `// Add responsive styles for a login page`.





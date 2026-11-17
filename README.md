# Grade Checker Web Application

## What It Is
The Grade Checker is a lightweight web application built with HTML, CSS, and JavaScript that allows users to input a student's name and score, dynamically calculates their academic letter grade (A, B, C, or F), and maintains a running list history of entered scores.

## How to Use It
1. Open `index.html` in any modern web browser.
2. Enter the student's name in the **Student Name** field.
3. Enter a valid numerical score (between 0 and 100) in the **Score** field.
4. Click the **Check** button to evaluate the grade and add it to the tracked results list.
5. If an invalid score or empty input is provided, an error message will display.

## What I Learned
* Implementing input validation and conditional logic in JavaScript.
* Dynamically updating DOM elements and rendering interactive lists from arrays.
* Version control workflows using Git and GitHub.

* ## AI Use & Collaboration
* **Prompt:** "Use AI to add one feature on a new branch, then merge it" and help implement a "Clear History" feature along with web accessibility improvements.
* **What Changed:** Added a "Clear History" button with corresponding JavaScript event listeners to reset the UI and array state. Added HTML5 input validation attributes and ARIA attributes (`aria-live="polite"`, descriptive `aria-label`) to improve screen reader accessibility.
* **What Checked:** Verified that empty or out-of-range scores correctly trigger error messages, the clear button properly resets all fields and list elements without throwing errors, and ARIA attributes successfully announce dynamic grading updates.

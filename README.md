# Quiz App

This project is part of a challenge recommended by roadmap.sh. It focuses on building an interactive quiz application while practicing state management, component structure, and user interaction in modern frontend development.

You can find the original challenge here:
https://roadmap.sh/projects/quiz-app

## Features

- Randomized questions without repetition
- Multiple choice answers (4 options per question)
- Instant feedback (correct / incorrect highlighting)
- Countdown timer for each question
- Automatic transition to the next question
- Final score page with results
- Responsive and clean user interface

## Tech Stack

- React
- React Router
- Tailwind CSS
- JavaScript (ES6)

## How It Works

- Questions are loaded from a local JSON file
- Each question is selected randomly and tracked to avoid repetition
- Users select an answer and receive immediate visual feedback
- A timer limits how long a user can answer each question
- If time runs out, the app automatically moves to the next question
- At the end, the total score is displayed

## Screenshots
1.Welcome page
<img width="2559" height="1310" alt="Screenshot 2026-05-02 164525" src="https://github.com/user-attachments/assets/e648d45a-fb85-41b6-885d-cbd252893fc4" />

2.Quiz page (There are 3 seconds left and it is red)
<img width="2559" height="1310" alt="Screenshot 2026-05-02 171501" src="https://github.com/user-attachments/assets/2bcf22aa-031b-4e1c-9f4f-056fbff404f5" />

3.Time is up and none of the options are clicked
<img width="2559" height="1308" alt="Screenshot 2026-05-02 171527" src="https://github.com/user-attachments/assets/c4ead907-84ae-451a-9c00-0c72742c18b2" />

4.The option was clicked, but it is not correct
<img width="2559" height="1310" alt="Screenshot 2026-05-02 171546" src="https://github.com/user-attachments/assets/975dfc00-9060-4e50-ba34-3cb108cad973" />

5.Finish (score < 7 is red, score < 4 is red, default green)
<img width="2559" height="1295" alt="Screenshot 2026-05-02 171601" src="https://github.com/user-attachments/assets/1ba8b1f3-0fe7-4ee8-afd8-4db07cdee04b" />

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/quiz-app.git

# Nautivent Giveaway by Developh

Welcome to the official repository for the Nautivent Giveaway web application. This project was designed to ensure transparency and fairness in our giveaway by allowing public access to the source code.

## 🛠 Project Overview

The Nautivent Giveaway web app is a simple and fair platform that randomly selects a winner from a pool of participants. The giveaway process is transparent, and this repository allows anyone to verify the legitimacy of the winner selection.

## 🚀 Features

- **Random Winner Selection**: The app selects a winner randomly from the list of participants.
- **Transparency**: The source code is available for review to ensure that the giveaway process is fair.

## 🛠 Manual Verification

Please note that the verification of whether participants have followed the required accounts (@nautiventportugal and @developh.pt) is performed manually. Additionally, we also manually verify if the winner has liked and shared the giveaway post by asking them to send a screenshot of their story archive. This process ensures that all participants have met the necessary conditions to qualify for the giveaway.

## 📂 Project Structure

- **app/**
  - **components/**: Contains the main components used in the giveaway app.
  - **globals.css**: Global CSS file for styling.
  - **layout.tsx**: Layout component for structuring pages.
  - **page.tsx**: The main page component.
  - **opengraph-image.jpg** & **twitter-image.jpg**: Images used for social media sharing.
- **public/**: Includes static files such as images and logos.

## 📝 Usage

### Prerequisites

- Node.js
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/develophpt/nautivent-giveaway.git
cd nautivent-giveaway
```

Install dependencies:

```bash
npm install
```

Running the App

```bash
npm run dev
```

The application will be available at http://localhost:3000

## Verifying the Giveaway

The logic for selecting a winner is located in the generateWinner function in the app/components/ directory. You can modify the comments.txt file to simulate different scenarios and test the fairness of the winner selection.

## ⚖️ License

The source code in this repository is made available solely for transparency purposes. It is not permitted to republish, copy, or redistribute this code in any form. All rights are reserved by Developh.

## 📢 Disclaimer

This repository is provided for verification purposes only. The giveaway process was conducted fairly, and we encourage you to review the code to confirm this. However, we do not support or endorse any misuse or replication of this code outside of its intended purpose.

## 💙 Thank You!

Thank you for participating in our giveaway and for taking the time to review our code. We appreciate your trust and support.

Admin Dashboard with Charts (JavaFX)

A modern Admin Dashboard built using JavaFX, featuring interactive charts, summary cards, and a clean, responsive layout. This project demonstrates how to design a visually appealing admin interface with Bar Charts, Line Charts, and statistical cards using core Java and JavaFX.

🖼️ Features

📊 Dashboard Overview with user stats and sales summary

📈 Bar Chart for Monthly Sales Report

📉 Line Chart for Weekly User Activity

🧾 Info Cards displaying key metrics (Users, Sales, Projects, Tickets)

🎨 Modern Flat UI with shadows and soft colors

⚙️ Built purely in JavaFX (no external dependencies)

🧰 Tech Stack

Component Technology Used

Language Java (JDK 11 or higher) GUI Framework JavaFX Charts JavaFX BarChart and LineChart Layouts VBox, HBox, GridPane Styling Inline CSS with modern UI colors

📦 Project Structure

AdminDashboard/ ├── src/ │ └── AdminDashboard.java # Main JavaFX Application ├── README.md # Documentation └── (optional) lib/ # JavaFX SDK libraries (if needed)

⚙️ Setup Instructions

1️⃣ Prerequisites

Make sure you have:

JDK 11+ installed

JavaFX SDK downloaded (if your JDK does not include it) 👉 Download JavaFX

2️⃣ Compile the Project

Open a terminal in your project directory and run:

javac --module-path "path/to/javafx/lib" --add-modules javafx.controls src/AdminDashboard.java

3️⃣ Run the Application

java --module-path "path/to/javafx/lib" --add-modules javafx.controls -cp src AdminDashboard

💡 Replace "path/to/javafx/lib" with the actual path to your JavaFX SDK lib folder.

🧱 UI Overview

Section Description

Header Displays the dashboard title and an “Add Report” button Info Cards Four summary boxes showing key performance indicators Bar Chart Visualizes monthly sales data Line Chart Tracks weekly user activity

🌈 Screenshots (Optional)

You can add screenshots here:

📷 screenshots/ ├── dashboard_view.png ├── bar_chart.png └── line_chart.png

🚀 Future Enhancements

🌓 Add Dark Mode toggle

🧭 Add Sidebar Navigation for multiple pages

💾 Connect to a Database (MySQL / PostgreSQL)

🌐 Convert to a Spring Boot + JavaFX Hybrid Dashboard

🧑‍💻 Author

Lakshmi Thiyagu 📧 lakshmithiyagu134@gmail.com 💼 Admin Dashboard with Charts Project — JavaFX Edition

🪪 License

This project is open-source under the MIT License. You’re free to use, modify, and distribute it with proper attributions.

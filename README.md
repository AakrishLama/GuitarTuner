# 🎸 Neptune Tuning

**Neptune Tuning** is a browser-based guitar tuner built with `p5.js`, `ml5.js`, and `D3.js`. It uses your microphone to detect pitch and visualizes real-time frequencies in a dynamic bar chart. This project was created during the 2023 summer.

---

## ✨ Features

- 🎤 Microphone-based pitch detection
- 🎼 Displays detected pitch frequencies
- 📊 Real-time frequency graph using D3.js
- 🎸 Dropdown for selecting guitar tunings (Standard E, D#, D, etc.)
- 🎛️ Clickable string labels for reference

---

## 🛠 Technologies Used

- [p5.js](https://p5js.org/) – for audio input and canvas rendering
- [ml5.js](https://ml5js.org/) – for pitch detection using the CREPE model
- [D3.js](https://d3js.org/) – for rendering the frequency bar chart
- HTML/CSS – basic structure and styling

---

## 🚀 Getting Started

### ✅ Prerequisites

- A modern browser (Chrome recommended)
- Internet connection (to load external scripts)
- Access to your device’s microphone (you will be prompted)

### 📁 Setup

1. Clone or download this repository.
2. Ensure the following files are in the project root:


3. Open `index.html` in your browser.

> ℹ️ No need to install dependencies – all required libraries are loaded via CDN.

---

## 🧪 How It Works

- On page load, p5.js captures microphone input.
- ml5.js (using CREPE model) detects the dominant pitch in real time.
- The pitch frequency is added to an array and visualized in a bar chart via D3.js.
- Frequencies are displayed dynamically and update as you play guitar strings.

---

## 🎛️ Tuning Options

A dropdown allows you to select common guitar tunings:

- Standard E
- D#, D, C#, C...
- All the way to F

These options are meant for reference when visually tuning each string.

---

## 📸 UI Overview

- 🎵 **Bar Chart**: Shows live pitch frequencies.
- 🎚️ **Tuning Selector**: Change tuning presets.
- 🔘 **String Buttons**: Display standard note for each string.

---

## 📎 File Overview

| File         | Purpose                                |
|--------------|----------------------------------------|
| `index.html` | Page layout, loads all libraries       |
| `style.css`  | Page styling and layout                |
| `sketch.js`  | Main logic: pitch detection and graph  |

---

## ⚠️ Permissions

This app will request microphone access on load. Make sure to **allow** it when prompted by your browser.

---

## 📃 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

- [p5.js](https://p5js.org/)
- [ml5.js](https://ml5js.org/)
- [D3.js](https://d3js.org/)


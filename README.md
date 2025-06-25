# 🚀 Markdown to HTML Converter

Welcome to the **Markdown to HTML Converter**! This is a simple command-line tool built with Node.js that takes a Markdown (`.md`) file as input and converts its content into a clean, well-formatted HTML (`.html`) file.

---

## ✨ Features

-   **Markdown to HTML Conversion:** Converts standard Markdown syntax (headers, bold, italics, lists, inline code, etc.) into valid HTML.
-   **File Input/Output:** Reads content from a specified Markdown file and writes the converted HTML to a new output file.
-   **Command-Line Interface:** Easy to run and use directly from your terminal.

## 🛠️ Technologies Used

-   **Node.js**: The JavaScript runtime environment.
-   **`fs` Module**: Node.js's built-in File System module for reading and writing files.
-   **`marked` Library**: A popular and robust library for parsing Markdown to HTML.

---

## 💻 How to Run

To get this Markdown converter up and running on your local machine, follow these steps:

1.  **Clone the repository (or set up the project locally):**
    If you have a GitHub repository for this project, you'd clone it:
    ```bash
    git clone https://github.com/itsmepraksh/COSC-markdown-converter-task.git
    cd my-markdown-converter
    ```
    *If you don't have a repository yet, ensure you are in your `my-markdown-converter` project folder.*

2.  **Install Dependencies:**
    Navigate into your project directory and install the necessary Node.js packages.
    ```bash
    npm install
    ```
    This command will install the `marked` library (which is listed in `package.json` after `npm install marked` was run earlier).

3.  **Prepare your Input Markdown File:**
    Make sure you have an `input.md` file (or whatever you name your input file) in the root of your project directory. This file should contain the Markdown content you wish to convert.
    Example `input.md`:
    ```markdown
    # My Sample Document

    This is some **bold** text and *italic* text.

    * Item one
    * Item two

    Here's some `inline code`.
    ```

4.  **Run the Converter:**
    Execute the `app.js` script using Node.js.
    ```bash
    node app.js
    ```

---

## 🚀 Output

After running the script, a new file named **`output.html`** will be created in your project directory. This file will contain the HTML version of your Markdown content.

You can open `output.html` in any web browser to view the converted document.

---

## ✅ Status

**Markdown to HTML Converter:** Task Completed ✅

---

## 🙌 Acknowledgements

* Built with Node.js
* Powered by the excellent `marked` library.
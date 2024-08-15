import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.setInitialMode();
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", this.toggle.bind(this));
  }

  toggle() {
    const oldMode = this.isDarkMode ? "dark" : "light";
    const newMode = this.isDarkMode ? "light" : "dark";

    document.documentElement.classList.add(newMode);
    document.documentElement.classList.remove(oldMode);
    document.documentElement.style.setProperty("color-scheme", newMode);

    this.isDarkMode = !this.isDarkMode;

    window.localStorage.setItem("color-mode", newMode);

    // Update checkbox state
    const checkbox = document.getElementById("checkbox");
    checkbox.checked = this.isDarkMode;

    // Update button image
    this.updateButtonImage();
  }

  setInitialMode() {
    const savedMode = window.localStorage.getItem("color-mode");
    this.isDarkMode = savedMode === "dark";

    if (this.isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.style.setProperty("color-scheme", "light");
    }

    // Set initial checkbox state
    const checkbox = document.getElementById("checkbox");
    checkbox.checked = this.isDarkMode;

    // Set initial button image
    this.updateButtonImage();
  }

  updateButtonImage() {
    const button = this.element.querySelector('button');
    if (this.isDarkMode) {
      button.innerHTML = `
        <span class="sr-only">Use light mode</span>
        <span class="translate-x-5 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-gray-700 shadow-clean-dark transform ring-0 transition ease-in-out duration-200">
          <span class="opacity-0 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3">
              <g>
                <path fill="#FCD34D" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"></path>
                <path fill="#F59E0B" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"></path>
              </g>
            </svg>
          </span>
        </span>
      `;
    } else {
      button.innerHTML = `
        <span class="sr-only">Use dark mode</span>
        <span class="translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-light-primary shadow-clean transform ring-0 transition ease-in-out duration-200">
          <span class="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3">
              <g>
                <path fill="#FCD34D" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"></path>
                <path fill="#F59E0B" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"></path>
              </g>
            </svg>
          </span>
        </span>
      `;
    }
  }
}
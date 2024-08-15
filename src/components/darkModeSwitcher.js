// src/components/DarkModeSwitcher.js
import React, { useEffect } from 'react';
import { Application } from "@hotwired/stimulus";
import ModeSwitchController from '../controllers/mode_switch_controller';

const DarkModeSwitcher = () => {
  useEffect(() => {
    const application = Application.start();
    application.register("mode-switch", ModeSwitchController);
  }, []);

  return (
    <button
      type="button"
      className="bg-secondary-50 relative inline-flex flex-shrink-0 h-6 w-11 mr-8 border-2 border-transparent rounded-full cursor-pointer transition-all ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-blue-200 dark:bg-gray-900 md:mr-0"
      role="switch"
      aria-checked="false"
      data-controller="mode-switch"
      data-action="click->mode-switch#toggle"
    >
      <span className="sr-only">Use dark mode</span>
      <span
        className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-light-primary shadow-clean transform ring-0 transition ease-in-out duration-200 dark:bg-gray-700 dark:translate-x-5 dark:shadow-clean-dark"
      >
        <span
          className="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity dark:opacity-0"
          aria-hidden="true"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3 h-3"
          >
            <g>
              <path
                fill="#FCD34D"
                d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
              ></path>
              <path
                fill="#F59E0B"
                d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
              ></path>
            </g>
          </svg>
        </span>
      </span>
    </button>
  );
};

export default DarkModeSwitcher;
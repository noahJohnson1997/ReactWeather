import React from "react";

export default function Footer() {
  return (
    <div className="Footer-Container">
      <footer className="Footer">
        <ul className="Footer-Items">
          <li className="Footer-Item">
            <ul className="Footer-SubItems">
              <li className="Footer-Item">
                <a
                  className="Item-Link"
                  href="mailto:noah.johnson1997@outlook.com"
                >
                  <span className="fa-solid fa-envelope"></span>
                </a>
              </li>
              <li className="Footer-Item">
                <a
                  className="Item-Link"
                  href="https://github.com/nostyjay"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fa-brands fa-github"></span>
                </a>
              </li>
              <li className="Footer-Item">
                <a
                  className="Item-Link"
                  href="https://www.linkedin.com/in/noah-johnson-frontendev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fa-brands fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </li>
          <li className="Footer-Item">© Noah Johnson Weather App 2022</li>
        </ul>
      </footer>
    </div>
  );
}

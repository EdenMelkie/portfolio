"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Sidebar from "./components/sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioCard = ({ title, description, url, category }) => (
  <div className={`portfolio-item`} data-category={category}>
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col h-full border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="bg-gray-100 px-6 py-4">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-center w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
);

const Header = ({ toggleSidebar, toggleDarkMode, isDarkMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm z-50 ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-dark bg-primary"
      }`}
    >
      <div className="container-fluid">
        <button
          className="btn btn-primary d-lg-none me-2"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand fw-bold" href="#">
          Hailemariam Eyayu
        </a>
        <div className="collapse navbar-collapse" id="navbarTop">
          <ul className="navbar-nav ms-auto gap-2 align-items-center">
            {["about", "skills", "portfolio", "downloads", "contact"].map(
              (id) => (
                <li key={id} className="nav-item">
                  <a
                    className="nav-link px-3 py-2 rounded text-white"
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${id}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              )
            )}
            <li className="nav-item">
              <button
                onClick={toggleDarkMode}
                className={`rounded-circle p-2 border ${
                  isDarkMode ? "btn btn-outline-light" : "btn btn-outline-dark"
                }`}
                style={{ width: "38px", height: "38px" }}
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                    <path
                      d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    AOS.init({ once: true, duration: 800 });
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <title>Hailemariam Eyayu - Full-Stack & Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio of Hailemariam Eyayu, experienced Full-Stack and Mobile Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        toggleSidebar={toggleSidebar}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />

      <div className="d-flex mt-5 pt-5">
        <Sidebar
          isOpen={sidebarOpen}
          onNavClick={(id) => {
            document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
            setSidebarOpen(false);
          }}
        />

        <main className="flex-grow-1 p-4">
          <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-900 font-sans">
            <header className="flex flex-col items-center mb-8 text-center">
              <img
                src="/images/HME.png"
                alt="Hailemariam Eyayu"
                className="w-36 h-36 rounded-full object-cover shadow-md mb-4"
                loading="lazy"
              />
              <h1 className="text-3xl font-bold">Hailemariam Eyayu</h1>
              <p className="text-lg text-gray-600 font-medium">
                Full-Stack & Mobile Developer
              </p>
            </header>

            <section
              id="about"
              className="bg-white p-6 rounded-lg shadow w-full max-w-3xl mb-10"
            >
              <h3 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-500 pb-1 mb-4">
                About Me
              </h3>
              <p>
                With over 3 years of experience, I have developed a deep
                understanding of modern technologies including Flutter, Laravel,
                React, Node.js, and PHP. I am a strong advocate of clean code,
                user-centered design, and continuous learning.
              </p>
            </section>

            <section
              id="skills"
              className="bg-white p-6 rounded-lg shadow w-full max-w-3xl mb-10"
            >
              <h3 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-500 pb-1 mb-4">
                Skills
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Flutter & Dart (Mobile & Web Apps)</li>
                <li>Laravel, PHP & MySQL (Backend & APIs)</li>
                <li>React & Next.js (Frontend Web Apps)</li>
                <li>JavaScript, TypeScript, Node.js</li>
                <li>UI/UX Design, Responsive & Accessible Design</li>
                <li>Git, CI/CD, Agile & Scrum</li>
              </ul>
            </section>

            <section id="portfolio" className="mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
                My Portfolio
              </h2>
              <div className="flex justify-center flex-wrap gap-4 mb-8">
                {["All", "Web", "Mobile"].map((type) => (
                  <button
                    key={type}
                    className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 filter-btn"
                    data-filter={type.toLowerCase()}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                id="portfolio-items"
              >
                <PortfolioCard
                  title="Dormitory Management System (DMU_DMS)"
                  description="A comprehensive Laravel + PHP system for managing university dormitories."
                  url="https://github.com/EdenMelkie/dmudms"
                  category="web"
                />
                <PortfolioCard
                  title="Personal Portfolio Website"
                  description="Responsive website built with Next.js showcasing my skills and projects."
                  url="https://github.com/EdenMelkie/portfolio"
                  category="web"
                />
                <PortfolioCard
                  title="My Laravel Portfolio"
                  description="Personal Laravel-based portfolio highlighting back-end and UI experience."
                  url="https://github.com/EdenMelkie/personal-portfolio"
                  category="web"
                />
                <PortfolioCard
                  title="Gitsawe APK"
                  description="Spiritual mobile app built with Flutter and Dart, featuring daily religious readings."
                  url="https://github.com/EdenMelkie/gitsawe"
                  category="mobile"
                />
                <PortfolioCard
                  title="Calendar APK"
                  description="Android app in Java for religious and calendar-based content."
                  url="https://github.com/EdenMelkie/Calander"
                  category="mobile"
                />
              </div>
            </section>

            <section
              id="downloads"
              className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-500 pb-1 mb-4">
                CV & Certificates
              </h3>

              <p className="mb-4">
                You can download my professional CV and certificates to learn
                more about my skills, education, and accomplishments.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    href="/files/Hailemariam_Eyayu_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    download
                  >
                    Download CV (PDF)
                  </a>{" "}
                  – Detailed resume with professional experience and education.
                </li>

                <li>
                  <a
                    href="/files/Certificate_Laravel_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    download
                  >
                    Laravel Certification (2024)
                  </a>{" "}
                  – Completion certificate for advanced Laravel development.
                </li>

                <li>
                  <a
                    href="/files/Certificate_Flutter_2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    download
                  >
                    Flutter Development Certificate (2023)
                  </a>{" "}
                  – Training and proficiency in Flutter & Dart.
                </li>

                <li>
                  <a
                    href="/files/Other_Certificates.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    download
                  >
                    Other Certificates (PDF)
                  </a>{" "}
                  – Various professional and technical certificates.
                </li>
              </ul>
            </section>

           <section className="w-[50%] mx-auto">

              <form
                action="https://formspree.io/f/xjkwqorb"
                method="POST"
                className="needs-validation"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="form-control"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </section>

            <footer className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-gray-100 py-6 mt-12">
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} Hailemariam Eyayu. All
                  rights reserved.
                </p>

                <div className="space-x-6 mt-4 md:mt-0 flex">
                  <a
                    href="mailto:hailemariameyayu2012@gmail.com"
                    className="hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2"
                    aria-label="Email"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>Email</span>
                  </a>

                  <a
                    href="https://t.me/HaileEden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2"
                    aria-label="Telegram"
                  >
                    <i className="fab fa-telegram"></i>
                    <span>Telegram</span>
                  </a>

                  <a
                    href="https://github.com/EdenMelkie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>

                  <a
                    href="tel:+251938169557"
                    className="hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2"
                    aria-label="Phone"
                  >
                    <i className="fas fa-phone"></i>
                    <span>Phone</span>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}

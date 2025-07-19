// components/Projects.tsx
export default function Projects() {
  const projects = [
    {
      title: "Data Sweeper",
      description: "Data Sweeper is a utility designed to simplify the process of data cleaning by identifying and handling missing values, duplicates, outliers, and inconsistencies. Ideal for analysts and developers working with large datasets, it streamlines preprocessing tasks to improve data quality and readiness for analysis or machine learning.",
      image:"/project_01.jpg",
      link: "https://quarter-3-9eycscnoag2iwyw6mqnqe9.streamlit.app/",
    },
    {
      title: "password strength meter",
      description: "The Password Strength Meter is a user-friendly tool I developed to help users create secure and reliable passwords. It provides real-time feedback on the strength of a password as it is being typed, encouraging better password practices and enhancing overall application security.",
      image: "/project_02.jpg",
      link: "https://psm-mustafa.streamlit.app/",
    },
    {
      title: "unit converter",
      description: "The Unit Converter is a lightweight and intuitive tool I built to allow users to quickly convert between various units across different measurement categories. It is designed for accuracy, speed, and ease of use — ideal for educational, scientific, or everyday purposes.",
      image: "/project_03.jpg",
      link: "https://unit-converter-bymustafa.streamlit.app/",
    },
    {
      title: "personal library manager",
      description: "The Personal Library Manager is a web-based application I developed to help users organize, track, and manage their book collections efficiently. It provides an intuitive interface for cataloging physical or digital books, making it ideal for avid readers, students, or small book collectors.",
      image: "/project_04.jpg",
      link: "https://quarter-3-b4dehr7qzngzcglbh78ygr.streamlit.app/",
    },
    {
      title: "Static Interative Resume",
      description: "A personal resume built as a static web page with interactive features. It includes smooth scrolling, clickable sections, animated skill bars, project previews, and downloadable resume functionality — all without requiring a backend.",
      image: "/project_05.jpg",
      link: "https://milestone1-2-resume-by-mustafa-qaiser.vercel.app",
    },
    {
      title: "Translator Agent",
      description: "An AI-powered translator built with Python and Chainlit, this smart agent allows real-time language translation across multiple languages. It uses advanced LLM APIs to understand user inputs and respond in the desired language with high accuracy and contextual relevance",
      image: "/project_06.jpg",
      link: "http://localhost:8000/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#1f1f1f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-400 transition-shadow"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

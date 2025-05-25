import React from "react";

const CertificatesSection = () => {
  const certificates = [
    "Web Development Certificate - 2023",
    "Flutter Mobile App Development - 2024",
    "Database Management with MySQL - 2022",
    "Laravel PHP Framework Certificate - 2023",
  ];

  return (
    <section
      id="certificates"
      className="pt-20 pb-12 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Certificates
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        {certificates.map((cert, i) => (
          <li key={i}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default CertificatesSection;

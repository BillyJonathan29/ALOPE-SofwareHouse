import React, { useState } from "react";

const Article = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const projects = [
    {
      heading: "Website",
      title: "CSS Layouting",
      desc: "Penyusunan tampilan web yang rapi dan responsif menggunakan teknik CSS modern.",
      image: "/img/course.jpg",
    },
    {
      heading: "Mobile",
      title: "React Native Project",
      desc: "Pengembangan aplikasi mobile lintas platform dengan performa tinggi menggunakan React Native.",
      image: "/img/course.jpg",
    },
    {
      heading: "Website",
      title: "Landing Page",
      desc: "Halaman promosi yang dirancang untuk menarik perhatian dan meningkatkan konversi.",
      image: "/img/course.jpg",
    },
    {
      heading: "Mobile",
      title: "UI Design Mobile",
      desc: "Desain antarmuka aplikasi mobile yang estetis, intuitif, dan fokus pada pengalaman pengguna.",
      image: "/img/course.jpg",
    },
    {
      heading: "Website",
      title: "Company Profile",
      desc: "Website profesional untuk memperkenalkan profil dan layanan perusahaan.",
      image: "/img/course.jpg",
    },
    {
      heading: "Mobile",
      title: "Flutter App",
      desc: "Aplikasi mobile multiplatform menggunakan Flutter dengan UI modern.",
      image: "/img/course.jpg",
    },
    {
      heading: "Website",
      title: "E-Commerce",
      desc: "Platform toko online lengkap dengan fitur pembayaran dan manajemen produk.",
      image: "/img/course.jpg",
    },
    {
      heading: "Mobile",
      title: "Mobile Dashboard",
      desc: "Tampilan dashboard interaktif untuk monitoring data bisnis secara mobile.",
      image: "/img/course.jpg",
    },
    {
      heading: "Website",
      title: "Portfolio Web",
      desc: "Website personal untuk menampilkan karya, pengalaman, dan kontak.",
      image: "/img/course.jpg",
    }
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="container mx-auto py-10 px-4 sm:px-6 md:px-10 lg:px-8 xl:px-8 bg-blue-100 text-black">
      <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center lg:mb-10 mb-4">
        Our Project
      </h2>
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentItems.map((project, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-4 lg:mb-16 sm:p-6 xl:p-8 rounded-xl shadow-lg flex flex-col sm:flex-row items-start min-h-[300px]"
          >
            <div className="w-full sm:w-1/2 relative">
              <h3 className="text-base sm:text-lg xl:text-xl font-semibold py-2">
                {project.heading}
              </h3>
              <div className="relative h-[150px] sm:h-[180px] md:h-[200px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute bottom-[-120px] sm:bottom-[-5px] lg:bottom-[-100px] h-[250px] sm:h-[200px] lg:h-[300px] w-full left-0 rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="sm:ml-4 mt-4 sm:mt-0 w-full sm:w-1/2 text-left z-10 flex flex-col justify-center h-full">
              <div className="w-3 h-3 bg-white rounded-full mb-1" />
              <span className="text-base sm:text-lg lg:text-xl font-semibold">
                {project.title}
              </span>
              <p className="text-sm sm:text-xs lg:text-base mt-1 text-justify">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:flex justify-center mt-8 space-x-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`text-base font-medium ${
              currentPage === i + 1
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="sm:hidden flex flex-row space-x-4 py-2 overflow-x-auto scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[280px] w-72 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white"
          >
            <div
              className="relative h-48"
              style={{
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="relative px-6 py-6">
              <div className="absolute -top-5 left-6 bg-blue-500 text-white p-2 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-base text-gray-900">
                {project.title}
              </h4>
              <p className="text-gray-600 text-xs mt-2 line-clamp-2">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;

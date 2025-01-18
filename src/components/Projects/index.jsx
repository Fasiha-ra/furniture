// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
  const counterData = [
    { count: 0, target: 25, title: "Interior Design" },
    { count: 0, target: 93, title: "Architecture" },
    { count: 0, target: 48, title: "Construction" },
    { count: 0, target: 68, title: "Projects Done" },
  ];
  const [inView, setInView] = useState(false);
  const [counters, setCounters] = useState(counterData);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const counterRef = useRef(null);

  // Intersection Observer to check when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true); // Trigger counters when in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Increment the counter for each item
      const intervalIds = counters.map((counter, index) => {
        return setInterval(() => {
          setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            if (newCounters[index].count < newCounters[index].target) {
              newCounters[index].count += 1; // Increment count
            } else {
              clearInterval(intervalIds[index]); // Stop when target is reached
            }
            return newCounters;
          });
        }, 50); // Adjust this value for speed of counting
      });

      return () => {
        intervalIds.forEach((id) => clearInterval(id)); // Clean up intervals
      };
    }
  }, [inView, counters]);

  return (
    <div className="relative h-full lg:h-[300px] bg-[url('/src/assets/project-bg.png')] bg-cover bg-center mb-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div
        className="container relative z-10 text-white p-8 my-8 mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row justify-evenly gap-6 items-center"
        ref={counterRef}
      >
       <button className="flex gap-3 items-center bg-gray-900  text-base text-white rounded-full py-4 px-12  uppercase hover:bg-primary transition-colors duration-300">Contact us</button>
        <div className="mt-4 grid grid-cols-2 divide-y divide-gray-600 md:grid-cols-2">
          {counters.map((counter, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-5 transition-all duration-100 ${
                index % 2 === 0 ? "border-r border-gray-600" : ""
              } ${hoveredIndex === index ? "bg-primary" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p
                className={`text-6xl font-bold transition-all duration-100 ${
                  hoveredIndex === index ? "text-white" : "text-primary"
                }`}
              >
                {counter.count}
                <span className="text-4xl ">+</span>
              </p>
              <p
                className={`transition-all duration-100 ${
                  hoveredIndex === index ? "text-white" : ""
                }`}
              >
                {counter.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

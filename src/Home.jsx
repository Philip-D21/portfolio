import React from 'react';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black relative">
      <main className="flex-1 flex flex-col items-start justify-start max-w-5xl mx-auto w-full px-2 sm:px-4 pt-8">
        <h1 className="text-6xl sm:text-8xl font-light mb-0 leading-none text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Philip <span className="font-extrabold">Daudu</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 mt-2 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>Software Engineer</h2>
        <p className="max-w-3xl text-base sm:text-lg mb-8 text-left" style={{ fontFamily: 'Roboto Slab, serif' }}>
          Professional developer with 2 years of <span className="italic">experience</span> in the software development industry. Throughout my career, I have <span className="italic">worked</span> on numerous projects with diverse programming languages (Python, Node.js, Go, TS, MongoDb, SQL...), technologies, and requirements that go beyond the field of computer science; also, I have successfully led developer teams to deliver scalable software solutions that exceed client expectations and demands.
        </p>
        <p className="max-w-3xl text-base sm:text-lg mb-8 text-left" style={{ fontFamily: 'Roboto Slab, serif' }}>
          I am a resilient, creative, and meticulous person who enjoys pondering and <span className="italic">writing</span> about anything I consider important. I put in a huge effort to <span className="italic">think</span> and make things differently —which is usually reflected in my results.
        </p>
        <div className="flex flex-col items-start gap-2 mb-8 w-full">
          <div className="mb-2 text-xl text-left">I love music.</div>
          <div className="flex gap-6 mb-4 items-center">
            <a href="https://www.linkedin.com/in/philip-daudu/" className="hover:opacity-70" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Philip-D21" className="hover:opacity-70" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://youtube.com/" className="hover:opacity-70" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
          <button className="bg-white border border-gray-400 text-black font-bold px-8 py-3 rounded shadow hover:bg-gray-100 transition w-fit text-lg text-left">Get in touch</button>
        </div>
        <div className="text-base text-gray-800 mt-8 text-left w-full" style={{ fontFamily: 'Roboto Slab, serif' }}>
          Feel free to reach me out if you want to build something together, have any questions, or just want to connect.
        </div>
      </main>
    </div>
  );
}

export default Home; 
import React from 'react';

function Experience() {
  return (
    <div className="min-h-screen bg-white text-black font-['Roboto_Slab']">
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <h1 className="text-[4rem] sm:text-[6rem] font-light leading-none mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          about:experience
        </h1>
        <div className="relative pl-10">
          {/* Timeline vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          {/* Timeline entries */}
          <div className="space-y-16">
            {/* Scalelab */}
            <div className="relative flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-700 z-10"></div>
                <div className="flex-1 w-0.5 bg-gray-700"></div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">04/2024 - Present</div>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Backend Developer</div>
                <div className="flex items-left gap-2 text-gray-400 text-sm mb-2">
                  <span>Scalelab</span>
                  <span>•</span>
                  <span>Lagos, Nigeria</span>
                </div>
                <ul className="list-disc pl-5 text-base max-w-2xl space-y-1">
                  <li>Supported backend engineering efforts across 4 NestJS-based microservices and delivering robust features and resolving production-level bugs</li>
                  <li>Designed and developed the entire backend system for an e-commerce creative bank application, including server-side logic, payment gateway integration (Flutterwave, Paystack), and secure user operations</li>
                  <li>Implemented scheduled tasks and automated notifications using cron jobs and integrated Mailgun for email triggers tied to user actions and purchase flows</li>
                  <li>Wrote and optimized complex MongoDB queries for data aggregation, reporting, and real-time analytics dashboards</li>
                  <li>Built and maintained RabbitMQ messaging queues to handle asynchronous event-driven workflows across services</li>
                  <li>Led and executed UAT testing and training sessions, enabling internal testers to validate end-to-end product behavior</li>
                  <li>Contributed to 70+ pull requests across codebases, including bug fixes, feature enhancements, and third-party API integrations</li>
                  <li>Ensured CI/CD pipeline stability and deployment consistency in both monolith and microservices using GitHub Actions</li>
                  <li>Used Redis for caching and rate-limiting strategies, improving API performance and resilience under load</li>
                  <li>Collaborated daily via Trello, Linear and Postman, contributing to agile sprint planning and technical documentation</li>
                </ul>
              </div>
            </div>
            {/* Blueroom Care */}
            <div className="relative flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-700 z-10"></div>
                <div className="flex-1 w-0.5 bg-gray-700"></div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">01/2024 - 02/2025</div>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Backend Developer</div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>Blueroom Care</span>
                </div>
                <ul className="list-disc pl-5 text-base max-w-2xl space-y-1">
                  <li>Collaborated with cross-functional teams to design and implement scalable server-side architecture for a mobile mental health application</li>
                  <li>Engineered backend services to manage patients, therapists, ratings, and subscriptions, ensuring secure data handling and enforcing business logic</li>
                  <li>Integrated push notification support to enable real-time communication between patients and therapists for bookings, reminders, and updates</li>
                  <li>Resolved multiple critical bugs across production environments, improving application stability and user experience</li>
                  <li>Optimized database queries and backend workflows to ensure fast, reliable communication with the frontend mobile</li>
                </ul>
              </div>
            </div>
            {/* Fredacom data services */}
            <div className="relative flex gap-8">
              <div className="flex flex-col items-left">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-700 z-10"></div>
                <div className="flex-1 w-0.5 bg-gray-700"></div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">05/2023 - 06/2024</div>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Backend Developer</div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>Fredacom data services</span>
                </div>
                <ul className="list-disc pl-5 text-base max-w-2xl space-y-1">
                  <li>Determined backend development tech stack – like JavaScript server-side framework and relational databases</li>
                  <li>Collaborated with Front-end developers to integrate user-facing elements with server-side logic to build landing-page and corporate blog with high security</li>
                  <li>Identified and fixed issues, errors, and unexpected behavior in the application's code or infrastructure</li>
                  <li>Brainstorming, researching and giving opinions on technical features, design systems and architectures</li>
                  <li>Documented, built reusable code and libraries for future use on backend codebase for data bank, request and publishing creation</li>
                  <li>Integrated third-party authentication providers, such as Google, using OAuth</li>
                </ul>
              </div>
            </div>
            {/* Axios Technologies */}
            <div className="relative flex gap-8">
              <div className="flex flex-col items-left">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-700 z-10"></div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">07/2022 - 03/2023</div>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Backend Developer</div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>Axios Technologies</span>
                </div>
                <ul className="list-disc pl-5 text-base max-w-2xl space-y-1">
                  <li>Collaborated with a team of developers to build the server-side components for a mobile frontend application and web Application</li>
                  <li>Implemented referral systems to track and incentivize user referrals, driving user growth and engagement</li>
                  <li>Ensured optimal performance of the central database and responsiveness to front-end requests</li>
                  <li>Structured documentation on NodeJs processes, including database schemas, as well as preparing reports</li>
                  <li>Implemented email notifications using Node Mailer, to enhance user engagement and communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience; 
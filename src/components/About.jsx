import { FaServer, FaDatabase, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              With <span className="text-blue-400 font-semibold">1+ year of professional experience</span>, 
              I work on building <span className="text-cyan-400 font-semibold">full-stack web applications</span> with 
              <span className="text-cyan-400 font-semibold"> Spring Boot backend</span> and 
              <span className="text-cyan-400 font-semibold"> React frontend</span>, focusing on scalable microservices and RESTful APIs.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently at <span className="text-cyan-400 font-semibold">AIROBOSOFT Products and Services</span>, developing 
              HIPAA-compliant systems for pharmaceutical data management, serving 50+ healthcare providers with 99.9% uptime.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Core Skills</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Proficient in <span className="text-cyan-400 font-semibold">Spring Boot, Spring Cloud, Spring Security</span> with hands-on experience in 
              <span className="text-cyan-400 font-semibold"> microservices patterns</span> (API Gateway, Service Discovery, Circuit Breaker, SAGA).
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Experienced in <span className="text-blue-400 font-semibold">database optimization</span> (JPA/Hibernate, query tuning), 
              <span className="text-blue-400 font-semibold"> distributed caching</span> (Redis), and 
              <span className="text-blue-400 font-semibold"> event-driven architectures</span> (Kafka, RabbitMQ).
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
            <FaServer className="text-blue-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Full Stack Development</h4>
            <p className="text-slate-300">
              Building end-to-end applications with Spring Boot microservices and React frontends, handling 10,000+ requests daily with 99.9% uptime
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 text-center">
            <FaDatabase className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Database Optimization</h4>
            <p className="text-slate-300">
              Working on query optimization, indexing strategies, and caching, reducing database latency by 25% and improving throughput by 35%
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-6 text-center">
            <FaRocket className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Performance Focused</h4>
            <p className="text-slate-300">
              Building high-performance APIs with under 100ms response time through efficient algorithms, caching, and asynchronous processing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

export default function Portfolio() {
  const projects = [
    {
      title: 'Felix',
      description:
        'Built responsive member and admin portals focused on usability, performance, and streamlined system functionality to enhance overall user experience.',
      stack: ['Laravel', 'Vue 3', 'MySQL', 'REST API'],
      link: 'https://felix.api.org.au/products',
    },
    {
      title: 'Jaaims',
      description:
        'Enhanced the user interface and overall user experience, managed AWS infrastructure, and optimized system performance to improve scalability, reliability, and efficiency.',
      stack: ['Node.js', 'Vue.js', 'AWS Services'],
      link: 'https://jaaimsapp.com',
    },
    {
      title: 'Farmtrek',
      description:
        'Developed a scalable customer ordering platform with an admin management dashboard, integrating AWS services to support cloud-based infrastructure, performance, and operational efficiency.',
      stack: ['Node.js', 'Vue 3', 'AWS Lambda', 'AWS Amplify', 'AWS API Gateway', 'Amazon DynamoDB', 'Cognito'],
      link: 'https://www.ds.farmtrek.com.au',
    },
  ];

  const skills = {
    frontend: ['Vue.js', 'Vue 3', 'Nuxt', 'Quasar', 'React','React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Laravel', 'PHP','Node.js', 'Express.js', 'AWS Lambda', 'AWS API Gateway', '.NET', 'REST API'],
    database: ['MySQL','PostgreSQL', 'Amazon DynamoDB','MongoDB', 'Microsoft SQL Server'],
    cloud: ['AWS','Digital Ocean'],
  };

  // AI-assisted development capabilities
  const aiTools = ['Claude Code', 'GitHub Copilot', 'Cursor', 'ChatGPT', 'Prompt Engineering'];

  const aiCapabilities = [
    {
      title: 'AI Pair Programming',
      description:
        'Use AI coding assistants like Claude Code, Copilot, and Cursor to accelerate feature delivery, refactor confidently, and ship cleaner code faster.',
    },
    {
      title: 'Prompt Engineering',
      description:
        'Craft precise, well-scoped prompts and context to get reliable results from LLMs for code generation, debugging, and documentation.',
    },
    {
      title: 'AI Feature Integration',
      description:
        'Integrate LLM APIs and AI-powered features into web applications — from chat and automation to intelligent search and content generation.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800/80">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-bold text-lg tracking-tight">
            Raymund<span className="text-cyan-400">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#ai" className="hover:text-cyan-400 transition">AI Development</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
          <a
            href="mailto:raymunddh@gmail.com"
            className="bg-cyan-500 hover:bg-cyan-400 transition text-slate-900 text-sm font-semibold px-4 py-2 rounded-xl"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="top" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-lg mb-4">Full Stack Developer</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I’m <span className="text-cyan-400">Raymund Hinlog</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I specialize in building scalable web applications, modern user interfaces, and reliable backend systems. Passionate about writing clean, efficient code and creating seamless, user-focused digital experiences.
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/rhinlog"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/raymund-hinlog-9b0172191"
                target="_blank"
                className="border border-slate-600 hover:border-cyan-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                LinkedIn
              </a>
            </div> */}
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 p-1 shadow-2xl">
              
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/34413641?s=400&u=5fe4564972e9be331cf740f2b30b58ccd5780aa4&v=4"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            I’m a Full Stack Developer experienced in building scalable, efficient, and user-focused web applications. I work across both frontend and backend systems, with a strong focus on performance, clean architecture, and delivering reliable solutions.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg mt-4">
            I embrace AI-assisted development, using tools like Claude Code, GitHub Copilot, and Cursor to boost productivity and code quality — while keeping a strong grasp of the fundamentals that make software maintainable and reliable.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold capitalize mb-4 text-cyan-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-800 px-3 py-2 rounded-xl text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI-Assisted Development */}
      <section id="ai" className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
              AI-Powered Workflow
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4">AI-Assisted Development</h2>
          <p className="text-slate-300 leading-relaxed text-lg max-w-3xl mb-8">
            I build with modern AI tools to deliver faster without compromising quality — pairing with AI coding assistants, engineering effective prompts, and integrating LLM capabilities directly into products.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {aiCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 h-full"
              >
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">{cap.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-1.5 rounded-lg text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition duration-300 cursor-pointer h-full">

                {/* <div className="h-40 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 mb-6 flex items-center justify-center text-3xl font-bold text-cyan-400">
                  {project.title.charAt(0)}
                </div> */}

                <h3 className="text-2xl font-semibold mb-3 text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Engineer</h3>
                <p className="text-slate-400 text-sm">Freelance / Launchr Pty (Formerly Jaaims)</p>
              </div>

              <span className="text-cyan-400 text-sm md:text-base mt-2 md:mt-0">
                June 2023 – Present
              </span>
            </div>

            <ul className="text-slate-300 leading-relaxed space-y-2 list-disc pl-5 mb-6">
              <li>Designed and developed scalable cloud-based application architecture.</li>
              <li>Built backend services using Node.js integrated with AWS serverless services.</li>
              <li>Integrated AWS services for scalability and reliability.</li>
              <li>Implemented API integrations and improved application performance.</li>
              <li>Developed full-stack features for a modern web platform.</li>
              <li>Designed client-side and server-side architecture.</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Vue.js",
                "Vue 3",
                "AWS Services"
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <p className="text-slate-400 text-sm">
                  Digitaly Buzzed
                </p>
              </div>

              <span className="text-cyan-400 text-sm md:text-base mt-2 md:mt-0">
                December 2023 – March 2026
              </span>
            </div>

            <ul className="text-slate-300 leading-relaxed space-y-2 list-disc pl-5 mb-6">
              <li>Developed scalable full-stack web applications</li>
              <li>Implemented REST APIs and backend services</li>
              <li>Collaborated with teams to deliver client solutions</li>
              <li>Improved application performance and system architecture</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              {[
                "Laravel",
                "Vue 3",
                "MySQL",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

          <p className="text-lg text-slate-100 mb-8 max-w-2xl mx-auto">
            I’m available for freelance projects, remote opportunities, and full-time roles. Open to collaborating with startups, agencies, and growing teams.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:raymunddh@gmail.com"
              className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/raymund-hinlog-9b0172191"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-6 py-3 rounded-2xl font-semibold"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        <p>© 2026 Raymund Hinlog - Build 1.3.0 All Systems Operational</p>
      </footer>
    </div>
  );
}

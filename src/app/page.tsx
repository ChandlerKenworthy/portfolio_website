import Head from "next/head";
import Header from '../components/Header'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Head>
        <title>My Portfolio | Data Scientist & Developer</title>
        <meta name="description" content="Aspiring Data Scientist & Software Developer" />
      </Head>

      <Header />

      <div className="text-center">
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center mt-3">
            {["Python", "C++", "React", "Next.js", "Tailwind", "PyTorch", "Git"].map(skill => (
              <span key={skill} className="bg-blue-700 px-3 py-1 rounded-lg text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="bg-gray-800 px-4 py-2 rounded-lg">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="bg-gray-800 px-4 py-2 rounded-lg">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="bg-gray-800 px-4 py-2 rounded-lg">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
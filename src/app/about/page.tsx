import TimelineJob from '@/components/TimelineJob';
import Header from '../../components/Header'
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlex = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
});

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto">
          <h1 className={`${ibmPlex.className} text-2xl font-bold text-center mb-8 text-white`}>Education &amp; Experience</h1>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          <div className="space-y-12">
            <TimelineJob
              number={1}
              company={"University of Birmingham"}
              title={"PhD Particle Physics"}
              startDate={"September 2022"}
              endDate={"March 2026"}
              responsibilities={[
                "Conducting research in particle physics, focusing on data analysis and machine learning applications.",
                "Collaborating with a team of physicists and engineers to develop and implement new algorithms for data processing.",
                "Presenting research findings at conferences and publishing in peer-reviewed journals.",
              ]}
            />
            <TimelineJob
              number={2}
              company={"UK Atomic Energy Authority"}
              title={"Fusion Materials Intern"}
              startDate={"June 2023"}
              endDate={"September 2023"}
              responsibilities={[
                "Conducting research in particle physics, focusing on data analysis and machine learning applications.",
                "Collaborating with a team of physicists and engineers to develop and implement new algorithms for data processing.",
                "Presenting research findings at conferences and publishing in peer-reviewed journals.",
              ]}
            />
            <TimelineJob
              number={3} 
              company={"University of Birmingham"}
              title={"MSci Physics"}
              startDate={"September 2018"}
              endDate={"July 2022"}
              responsibilities={[
                "Conducting research in particle physics, focusing on data analysis and machine learning applications.",
                "Collaborating with a team of physicists and engineers to develop and implement new algorithms for data processing.",
                "Presenting research findings at conferences and publishing in peer-reviewed journals.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
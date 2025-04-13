import ProjectTile from '@/components/ProjectTile';
import Header from '../../components/Header'

export default function Home() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Header />

      <div className="w-full flex items-top justify-center gap-6">
        <ProjectTile title="Chess Engine" link="#" techStack={["C++", "Python"]}>
          <ul>
            <li>Some description</li>
            <li>Some more description</li>
          </ul>
        </ProjectTile>
        <ProjectTile title="Frisbee Tactic Board" link="#" techStack={["JavaScript", "React", "HTML", "CSS"]}>
          <ul>
            <li>Some description</li>
            <li>Some more description</li>
          </ul>
        </ProjectTile>
        <ProjectTile title="Smart Home Dashboard" link="#" techStack={["Python", "PyTorch", "Next.js", "React", "Tailwind"]}>
          <ul>
            <li>Some description</li>
            <li>Some more description</li>
          </ul>
        </ProjectTile>
      </div>
    </div>
  );
}
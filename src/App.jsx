import './App.css'
import atliqProject from './assets/AtliQ_Project.png';

function ProjectCard({ title, description, imageUrl, projectUrl, repoUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <button>GitHub Repo</button>
        </a>
      </div>
    </div>
  );
}

function App() {
  const projects = [
    {
      title: 'Hardware Company Analytics Dashboard',
      description: 'Created an analytics dashboard using PowerBI to generate various visuals from which to get business insights',
      imageUrl: atliqProject,
      projectUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYmQ2ZGU4ZjMtZWY5Yi00NmZlLTk0ZDctOGU1MmY0OWMzMjdhIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
      repoUrl: 'https://github.com/MatheusDiazz/Hardware-Business-Insights-Project'
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project. What problem does it solve? What did you learn?',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Project 3',
      description: 'A brief description of your third project. Feel free to add more projects to the list.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '#',
      repoUrl: '#'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <h2>Contact Me</h2>
        <p>You can find me on:</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </div>
  )
}

export default App
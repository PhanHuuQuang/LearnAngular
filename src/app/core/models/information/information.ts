interface Project {
  projectId: number;
  name: string;
  duration: string;
  teamSize: string;
  position: string;
  description: string;
  responsibility: string;
  technology: string;
}

interface ProjectTitle {
  title: string;
  key: keyof Project;
}

export { Project, ProjectTitle };

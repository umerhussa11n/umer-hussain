
interface Project {
  name: string, 
  description: string
}

interface PortfolioSite {
  id: number;
  name: string;
  projects: Project[];
  techstack: string[]
}


export default PortfolioSite
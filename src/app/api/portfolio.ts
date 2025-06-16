import  PortfolioSite  from "../interfaces/portfolio-site"; // Assuming PortfolioSite is exported from this file

const portfolio: PortfolioSite[] = [
  {
    id: 1,
    name: "Hurtigruten Group",
    projects: [
      {
        name: "Interactive Destination Pages & CMS Migration",
        description: "Led the development of interactive destination pages featuring dynamic maps and video playback systems. Implemented Test-Driven Development (TDD) practices for comprehensive unit testing. Optimised application performance and enhanced security through systematic code reviews. Architected and implemented a complete CMS migration, setting up a new Contentful organization and migrating the entire content infrastructure.",
      }
    ],
    techstack: ["React", "JavaScript", "Jest", "Contentful"]
  },
  {
    id: 2,
    name: "Shell",
    projects: [
      {
        name: "Customer Portal",
        description: "Led end-to-end development and delivery of the Customer Portal. Designed a scalable microservices architecture for Shell Energy Australia's customer-facing portal.",
      },
      {
        name: "SEUK Website",
        description: "Led end-to-end development and delivery of the SEUK Website enterprise application.",
      },
      {
        name: "Energy Price Calculator",
        description: "Led end-to-end development and delivery of the Energy Price Calculator enterprise application.",
      },
      {
        name: "Content Migration Initiative",
        description: "Managed complete content migration from Content-Stack to Contentful, delivering a high-performance Next.js solution that significantly improved user journey metrics. Developed REST API integrations using OpenAPI specifications and implemented robust error handling and performance optimisation.",
      }
    ],
    techstack: ["React", "TypeScript", "Node.js", "AWS", "Content-Stack", "Contentful", "Next.js", "REST API", "OpenAPI"]
  },
  {
    id: 3,
    name: "OXA Technologies",
    projects: [
      {
        name: "Production Web Applications & NFT E-commerce Platform",
        description: "Collaborated with a cross-functional development team to deliver two production web applications. Optimised development processes resulting in a 30% reduction in development time through improved workflows and code reusability. Built a scalable NFT E-commerce platform with seamless backend integration and modern UI/UX principles.",
      }
    ],
    techstack: ["React", "TypeScript"]
  },
  {
    id: 4,
    name: "CeraCare",
    projects: [
      {
        name: "Communications Platform Integration",
        description: "Developed a comprehensive web and mobile integration workflow for the communications platform. Implemented real-time monitoring solutions using Azure Logic Apps and CosmosDB for data integration. Applied agile development practices and collaborated with product teams to define and implement new features.",
      }
    ],
    techstack: ["React", "JavaScript", "Azure Logic Apps", "CosmosDB"]
  },
  {
    id: 5,
    name: "Foxtons",
    projects: [
      {
        name: "Company Intranet & Application Modernisation",
        description: "Hired as React Subject Matter Expert to lead frontend development for internal systems. Architected and developed company intranet using React, Next.js, GraphQL, and AWS. Led application modernisation initiative, migrating legacy systems to modern React-based solutions. Delivered MVP prototypes and collaborated with stakeholders to define technical requirements.",
      }
    ],
    techstack: ["React", "Next.js", "GraphQL", "AWS"]
  },
  {
    id: 6,
    name: "Euroffice",
    projects: [
      {
        name: "Frontend Features for Sales & Prospecting",
        description: "Built production-ready frontend features using React and TypeScript for sales and prospecting teams. Improved test coverage across applications using Jest, React Testing Library, and snapshot testing. Applied SOLID principles and Domain-Driven Design to create maintainable, scalable codebases.",
      }
    ],
    techstack: ["React", "TypeScript", "Jest", "React Testing Library", "SOLID Principles", "Domain-Driven Design"]
  },
  {
    id: 7,
    name: "First Sports International",
    projects: [
      {
        name: "Payment & Compliance Systems Development",
        description: "Developed payment processing systems, including Payment Initiation APIs and Refund/Cancellation API. Built KYC and AML compliance features for the finance module using object-oriented programming principles. Implemented transaction processing workflows with robust error handling and security measures.",
      }
    ],
    techstack: ["JavaScript", "SQL-Server", "Rest API's", "APIs", "Object-Oriented Programming"]
  }
];


export default portfolio;
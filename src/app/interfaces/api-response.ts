import  PortfolioSites  from '../interfaces/portfolio-site'
interface APIResponse  {
     success: boolean,
      data: PortfolioSites[],
      status: number,
      message: string
}

export default APIResponse
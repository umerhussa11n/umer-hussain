"use client";
import { useEffect, useState } from 'react'
import PortfolioSite from '../interfaces/portfolio-site';
import Loading from "../../components/loading"
import ErrorComponent from "../../components/error";

interface APIResponse {
    success: boolean;
    data: PortfolioSite[];
    message: string;
}

const MyWork = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [portfolio, setPortfolio] = useState<PortfolioSite[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("/api/portfolio");
            const result: APIResponse = await response.json()

            if (result.success) {
                setPortfolio(result.data)
            } else {
                setError(result.message || "API has responded but there is an Error")
            }
        } catch (err) {
            setError(`API Failed so there is no response, API Error: ${err}`)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorComponent 
            message={error} 
            reset={() => {
                setError(null);
                fetchData();
            }}
        />
    }
    
    return (
        <div className='container mx-auto px-4 py-8 text-center'>
            {/* Header Section */}
            <div className="border-2 border-blue-500 rounded-lg p-6 mb-8">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    My Work Portfolio
                </h1>
                <p className="text-gray-600">
                    Below is my work portfolio showcasing projects I've worked on
                </p>
            </div>

            {/* Portfolio Items Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((project) => (
                    <div 
                        key={project.id} 
                        className="border-2 border-blue-400 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Project Header */}
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {project.name}
                            </h2>
                        </div>
                        
                        {/* Project Details */}
                        <div className="space-y-4 text-left">
                            {/* Projects List */}
                            <div>
                                <span className="font-semibold text-gray-600 text-sm block mb-2">Projects:</span>
                                <div className="space-y-3">
                                    {project.projects.map((proj, index) => (
                                        <div key={index} className="border-l-2 border-blue-200 pl-3">
                                            <h4 className="font-medium text-gray-800 text-sm">{proj.name}</h4>
                                            <p className="text-gray-600 text-xs mt-1 leading-relaxed">{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Tech Stack */}
                            <div>
                                <span className="font-semibold text-gray-600 text-sm block mb-2">Tech Stack:</span>
                                <div className="flex flex-wrap gap-1">
                                    {project.techstack.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Empty State */}
            {portfolio.length === 0 && (
                <div className="text-center text-gray-500 mt-8 border border-gray-300 p-6 rounded-lg">
                    <p>No portfolio items found.</p>
                    <button 
                        onClick={fetchData}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            )}
        </div>
    )
}

export default MyWork;
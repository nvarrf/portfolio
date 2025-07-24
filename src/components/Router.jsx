import TaskBar from "./taskbar"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Home from '../components/home';
import { Link } from "react-router-dom";
import GraphicD from "../routes/GraphicD";
import { useState } from "react";
import Programming from "../routes/Programming";

const RouterLayout = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Graphic Design",
        },
        {
            id: 2,
            name: "Programming",
        },
    ]);

    const [activeProject, setActiveProject] = useState(null);

    const Layout = () => {
        return (
            <div className="relative min-h-screen bg-teal-600 flex">
                {/* Desktop Icons */}
                <div className="absolute top-4 left-4 z-10 space-y-4">
                    <div className="flex flex-col items-center group cursor-pointer">
                        <img
                            src="https://i.ibb.co/whK1wpvP/Recycle-Bin-Windows-98-full.webp"
                            alt="Recycle Bin"
                            className="w-12 h-12 group-active:bg-blue-500 group-active:opacity-50 transition-all"
                        />
                        <span className="text-white text-xs mt-1 text-center">Recycle Bin</span>
                    </div>

                    <div className="flex flex-col items-center group cursor-pointer">
                        <img
                            src="https://i.ibb.co/4wjsMXLB/43.png"
                            alt="My Computer"
                            className="w-12 h-12 group-active:bg-blue-500 group-active:opacity-50 transition-all"
                        />
                        <span className="text-white text-xs mt-1 text-center">My Computer</span>
                    </div>
                </div>

                {/* Main Window Container */}
                <div className="flex-1 flex justify-center items-center p-4">
                    <div className="w-full max-w-5xl bg-[#c0c0c0] 
                                  border-4 border-t-white border-l-white border-r-black border-b-black
                                  shadow-2xl min-h-[600px] flex flex-col">

                        {/* Profile Section */}
                        <div>
                            <Home />
                        </div>

                        {/* Projects Section */}
                        <div className="flex-1 p-4 bg-[#c0c0c0]">
                            {/* Projects Header */}
                            <div className="text-center mb-6">
                                <h1 className='text-black text-2xl font-bold mb-4'>Projects</h1>

                                {/* Project Tabs */}
                                <div className='flex justify-center gap-2'>
                                    <button
                                        onClick={activeProject !== 1 ? () => {
                                            setProjects(projects.filter((project) => project.id === 1));
                                            setActiveProject(1);
                                        } : null}
                                        className={`px-4 py-2 font-semibold transition-all ${activeProject === 1
                                            ? 'bg-white border-2 border-t-black border-l-black border-r-white border-b-white pointer-events-none'
                                            : 'bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white cursor-pointer'
                                            }`}
                                    >
                                        <Link to="/portfolio/Gd" className="text-black no-underline">
                                            Graphics
                                        </Link>
                                    </button>

                                    <button
                                        onClick={activeProject !== 2 ? () => {
                                            setProjects(projects.filter((project) => project.id === 2));
                                            setActiveProject(2);
                                        } : null}
                                        className={`px-4 py-2 font-semibold transition-all ${activeProject === 2
                                            ? 'bg-white border-2 border-t-black border-l-black border-r-white border-b-white pointer-events-none'
                                            : 'bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white cursor-pointer'
                                            }`}
                                    >
                                        <Link to="/portfolio/Prg" className="text-black no-underline">
                                            Programming
                                        </Link>
                                    </button>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 bg-white border-2 border-t-black border-l-black border-r-white border-b-white min-h-[300px]">
                                {activeProject === null ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-center p-8">
                                            <h2 className='text-black text-xl font-bold mb-2'>
                                                Welcome to My Portfolio!
                                            </h2>
                                            <p className="text-gray-600 mb-4">
                                                Click on a project tab above to view my work
                                            </p>
                                            <div className="text-4xl">🖱️</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full overflow-auto">
                                        <Outlet />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <TaskBar />
            </div>
        );
    }

    return (
        <Router>
            <Routes>
                <Route path="/portfolio/" element={<Layout />}>
                    <Route path="/portfolio/Gd" element={<GraphicD />} />
                    <Route path="/portfolio/Prg" element={<Programming />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouterLayout;
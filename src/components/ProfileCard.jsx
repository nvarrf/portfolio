



const ProfileCard = () => {
    return (
        <div className='w-full max-w-5xl mx-auto'>
            {/* Window Title Bar */}
            <div id='window-titlebar' className='flex flex-row justify-between items-center
            shadow-md
            border-b-2
            bg-gradient-to-r from-blue-900 to-blue-400 
            h-8
            text-white font-bold border-black'>
                <h1 className="text-white px-3 py-1 text-lg font-light">Profile</h1>

                <div id='buttons' className='flex flex-row gap-1 pr-2'>
                    <button className='bg-[#c0c0c0] text-black px-2 py-0.5 text-sm border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black hover:bg-[#a9a9a9]'>-</button>
                    <button className='bg-[#c0c0c0] text-black px-2 py-0.5 text-sm border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black hover:bg-[#a9a9a9]'>×</button>
                </div>
            </div>

            {/* Profile Content */}
            <div id="profile" className="bg-[#c0c0c0] 
           
            border-t-1 
            border-t-white 
           
           
            
            p-6">

                {/* Main Profile Section */}
                <div className="flex flex-col lg:flex-row gap-6 mb-6">
                    {/* Profile Image and Basic Info */}
                    <div className="flex flex-col items-center lg:items-start">
                        <img src="https://i.ibb.co/Rpn0ZDYg/IMG-20250709-050330-181.webp"
                            alt="Profile Image"
                            className='w-32 h-32 object-cover border-2 border-black mb-4' />

                        <div className='text-center lg:text-left'>
                            <h1 className='text-xl font-bold mb-3'>Nvar Hawzhin Raouf</h1>

                            {/* Contact Links */}
                            <div className='space-y-2'>
                                <div className='flex items-center gap-2 justify-center lg:justify-start'>
                                    <img src="https://i.ibb.co/Cgd9qTv/emailfill.png" alt="Email" className='w-4 h-4' />
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Nvar.raouf@gmail.com&subject=Hello&body=Hello%20Nvar!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm">
                                        Nvar.raouf@gmail.com
                                    </a>
                                </div>

                                <div className='flex items-center gap-2 justify-center lg:justify-start'>
                                    <img src='https://i.ibb.co/q40t4V7/linkdin.png' alt="LinkedIn" className='w-4 h-4' />
                                    <a href="https://www.linkedin.com/in/nvar-raouf-b03783178/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm">
                                        LinkedIn
                                    </a>
                                </div>

                                <div className='flex items-center gap-2 justify-center lg:justify-start'>
                                    <img src="https://i.ibb.co/hJr0fvHw/github.png" alt="GitHub" className='w-4 h-4' />
                                    <a href="https://github.com/nvarrf/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm">
                                        GitHub
                                    </a>
                                </div>

                                <a
                                    href="https://drive.google.com/file/d/1A0xnzgv3OOE7kl1anqH0qXphrwhX1Nr6/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-2 py-0.5 ml-2 border-2 border-t-white border-l-white border-r-black border-b-black
                                     hover:border-t-black hover:border-l-black hover:border-r-white hover:border-b-white active:border-t-black active:border-l-black
                                     active:border-r-white active:border-b-white justify-center"
                                >
                                    <img src="https://win98icons.alexmeub.com/icons/png/notepad_file-0.png" alt="CV" className="w-4 h-4 mr-1" />
                                    <span className="text-xs font-bold ">CV</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Skills and Information Grid */}
                    <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {/* Education */}
                        <div className='bg-white border-2 border-t-black border-l-black border-r-white border-b-white p-3'>
                            <h2 className='font-bold text-sm mb-2 border-b border-black pb-1'>Education</h2>
                            <p className='text-xs leading-relaxed'>
                                Bachelor of Information Technology from{' '}
                                <a href='https://uhd.edu.iq/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='inline-block px-1 py-0.5 border-2 border-t-white border-l-white border-r-black border-b-black 
                                   active:border-t-black active:border-l-black active:border-r-white active:border-b-white
                                   hover:bg-gray-100 text-black no-underline'>
                                    UHD
                                </a>
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className='bg-white border-2 border-t-black border-l-black border-r-white border-b-white p-3'>
                            <h3 className='font-bold text-sm mb-2 border-b border-black pb-1'>Technologies</h3>
                            <ul className='text-xs space-y-1'>
                                <li>• Frontend: React, JavaScript, Flutter</li>
                                <li>• Backend: Node.js</li>
                                <li>• Database: MongoDB</li>
                                <li>• Mobile: Flutter</li>
                            </ul>
                        </div>

                        {/* Languages */}
                        <div className='bg-white border-2 border-t-black border-l-black border-r-white border-b-white p-3'>
                            <h3 className='font-bold text-sm mb-2 border-b border-black pb-1'>Languages</h3>
                            <ul className='text-xs space-y-1'>
                                <li>• Kurdish: Native</li>
                                <li>• English: Conversational</li>
                                <li>• Arabic: Limited Working</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
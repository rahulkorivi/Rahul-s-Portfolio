
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Greeting from './components/Greeting';
import { personalInfo, projects, experiences, certifications, skills, education, leadership } from './constants';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon, PhoneIcon } from './components/icons';

// Add Vanta to the window interface for TypeScript
declare global {
    interface Window {
        VANTA: any;
    }
}

type AppState = 'loading' | 'greeting' | 'ready';

const App: React.FC = () => {
    const [appState, setAppState] = useState<AppState>('loading');
    const vantaRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppState('greeting');
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    
    useEffect(() => {
        let vantaEffect: any = null;
        if (appState === 'ready' && vantaRef.current) {
            vantaEffect = window.VANTA.CELLS({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color1: 0x656772, // Dim Gray
                color2: 0x33363f, // Onyx
                size: 3.00,
                speed: 1.00
            });
        
            AOS.init({
                duration: 1000,
                once: true,
                offset: 50,
            });
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [appState]);

    if (appState === 'loading') {
        return <Preloader />;
    }
    
    if (appState === 'greeting') {
        return <Greeting onFinished={() => setAppState('ready')} />;
    }

    return (
        <div className="text-gray-300 font-sans antialiased relative">
            <div ref={vantaRef} className="fixed top-0 left-0 w-screen h-screen z-0" />
            <div className="relative z-10">
                <Header />
                
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 bg-[#57463A] flex flex-col justify-center items-center p-8 relative">
                         <div data-aos="fade-in" className="w-full h-full relative">
                            <img 
                                src={personalInfo.profilePhoto} 
                                alt="Korivi Rahul" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="absolute top-10 left-10">
                                
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 flex flex-col justify-center p-8 md:p-16 lg:p-24">
                        <div data-aos="fade-up">
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-100">{personalInfo.name}</h2>
                            <p className="mt-6 max-w-xl text-lg text-gray-400">
                                {personalInfo.summary}
                            </p>
                            <div className="flex items-center space-x-5 mt-8">
                                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-[#656772] transition-colors duration-300" aria-label="Email"><MailIcon className="w-7 h-7" /></a>
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#656772] transition-colors duration-300" aria-label="GitHub"><GithubIcon className="w-6 h-6" /></a>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#656772] transition-colors duration-300" aria-label="LinkedIn"><LinkedinIcon className="w-6 h-6" /></a>
                                <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#656772] transition-colors duration-300" aria-label="LeetCode"><LeetcodeIcon className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Contained Content */}
                <main className="container mx-auto px-6 md:px-10 lg:px-16">
                    {/* Experience Section */}
                    <section id="experience" className="py-24">
                        <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center" data-aos="fade-right">
                            <span className="text-[#656772] font-mono text-2xl mr-4">01.</span> Experience
                            <span className="h-px bg-gray-700 flex-grow ml-4"></span>
                        </h2>
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} data-aos="fade-up" className="relative pl-8 border-l-2 border-gray-700">
                                    <div className="absolute -left-2 top-1 w-4 h-4 bg-[#656772] rounded-full border-4 border-[#2E2B26]"></div>
                                    <h3 className="text-xl font-bold text-gray-100">{exp.role} @ {exp.company}</h3>
                                    <p className="text-sm text-[#656772] font-mono mb-2">{exp.duration}</p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                                        {exp.duties.map((duty, i) => (
                                            <li key={i}>{duty}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="py-24">
                         <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center" data-aos="fade-right">
                            <span className="text-[#656772] font-mono text-2xl mr-4">02.</span> Projects
                            <span className="h-px bg-gray-700 flex-grow ml-4"></span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                           {projects.map((project, index) => (
                                <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="bg-[#57463A]/80 backdrop-blur-sm rounded-lg flex flex-col justify-between hover:shadow-2xl hover:shadow-[#57463A]/10 hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#656772]">
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#656772]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-100 mb-2 flex-grow">{project.title}</h3>
                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                    </div>
                                    <div className="bg-black/20 p-4 rounded-b-lg">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                 <span key={i} className="bg-gray-700/80 backdrop-blur-sm text-gray-200 px-3 py-1 rounded-full text-xs font-mono">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                     {/* Skills Section */}
                    <section id="skills" className="py-24">
                        <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center" data-aos="fade-right">
                            <span className="text-[#656772] font-mono text-2xl mr-4">03.</span> Skills
                            <span className="h-px bg-gray-700 flex-grow ml-4"></span>
                        </h2>
                        <div className="space-y-8">
                            {Object.entries(skills).map(([category, skillList], index) => (
                                 <div key={index} data-aos="fade-up">
                                     <h3 className="text-lg font-bold text-[#656772] mb-4">{category}</h3>
                                     <div className="flex flex-wrap gap-2">
                                         {skillList.map((skill, i) => (
                                             <span key={i} className="bg-gray-700/80 backdrop-blur-sm text-gray-200 px-3 py-1 rounded-full text-sm font-mono">{skill}</span>
                                         ))}
                                     </div>
                                 </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications & Education Section */}
                     <section id="education" className="py-24">
                         <h2 className="text-3xl font-bold text-gray-100 mb-12 flex items-center" data-aos="fade-right">
                            <span className="text-[#656772] font-mono text-2xl mr-4">04.</span> Education & Certs
                            <span className="h-px bg-gray-700 flex-grow ml-4"></span>
                        </h2>
                        
                        <div data-aos="fade-up" className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-100 mb-4">Education</h3>
                             <div className="bg-[#57463A]/80 backdrop-blur-sm p-6 rounded-lg">
                                <h4 className="font-bold text-gray-200">{education.degree}</h4>
                                <p className="text-[#656772]">{education.institution}</p>
                                <p className="text-gray-400 text-sm">{education.location}</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                             <h3 className="text-2xl font-bold text-gray-100 mb-4">Certifications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                               {certifications.map((cert, index) => (
                                    <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="bg-[#57463A]/80 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#57463A]/10 hover:-translate-y-2 transition-all duration-300">
                                        <a href={cert.imageUrl} target="_blank" rel="noopener noreferrer">
                                            <img src={cert.imageUrl} alt={cert.name} className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                                        </a>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h4 className="font-bold text-gray-200 flex-grow">{cert.name}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                                            <a href={cert.imageUrl} target="_blank" rel="noopener noreferrer" className="text-[#656772] font-mono text-sm mt-4 inline-block hover:underline">
                                                View Certificate &rarr;
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </section>

                    {/* Contact Section */}
                    <footer id="contact" className="text-center py-24">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4" data-aos="fade-up">Get In Touch</h2>
                        <p className="max-w-md mx-auto text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">
                            I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <a href={`mailto:${personalInfo.email}`} className="inline-block bg-transparent text-[#656772] font-mono border border-[#656772] rounded-md px-8 py-3 hover:bg-[#656772] hover:bg-opacity-10 transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
                            Say Hello
                        </a>
                        <div className="mt-16 text-gray-500 text-sm font-mono">
                             <p>Designed & Built by Korivi Rahul</p>
                             <div className="flex items-center justify-center space-x-4 mt-4">
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#656772] transition-colors duration-300"><GithubIcon className="w-5 h-5"/></a>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#656772] transition-colors duration-300"><LinkedinIcon className="w-5 h-5"/></a>
                             </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default App;
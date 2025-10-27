import React from 'react';
import ContactCard from './components/ContactCard';
import ImageGallery from './components/components/ImageGallery';
import PropertyDetailCard from './components/PropertyDetailCard';
import {
    AT_A_GLANCE_DATA,
    BROCHURE_URL,
    BUILDING_DETAILS_DATA,
    CONTACT_INFO,
    IMAGES,
    NAV_LINKS,
    NOTE_ICON,
    PRINT_ICON,
    SAVE_ICON,
    SHARE_ICON
} from './constants';

const App: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-gray-800">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">700 W 23rd St</h1>
                    <p className="text-gray-600">Panama City, FL 32405</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm font-medium text-gray-700">
                    <button className="flex items-center space-x-2 hover:text-blue-600">{NOTE_ICON}<span>Notes</span></button>
                    <button className="flex items-center space-x-2 hover:text-blue-600">{PRINT_ICON}<span>Print</span></button>
                    <button className="flex items-center space-x-2 hover:text-blue-600">{SHARE_ICON}<span>Share</span></button>
                    <button className="flex items-center space-x-2 hover:text-blue-600">{SAVE_ICON}<span>Save</span></button>
                </div>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ImageGallery images={IMAGES} />
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <div className="flex items-baseline mb-4">
                            <span className="text-3xl font-bold text-gray-900">$20/SF/YR</span>
                        </div>
                        <div className="text-sm text-gray-600 flex items-center space-x-4 mb-6">
                            <span>496 days on market</span>
                            <span className="h-1 w-1 bg-gray-400 rounded-full"></span>
                            <span>Updated 19 days ago</span>
                        </div>
                        <div className="flex space-x-3">
                            <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Request Info</button>
                            <a 
                                href={BROCHURE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-center bg-white text-blue-600 font-bold py-2 px-4 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-300"
                            >
                                View Brochure
                            </a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <PropertyDetailCard title="At A Glance" data={AT_A_GLANCE_DATA} customize />
                    </div>
                </div>
            </main>

            <nav className="mt-8 border-b border-gray-300">
                <div className="flex space-x-6 overflow-x-auto whitespace-nowrap -mb-px">
                    {NAV_LINKS.map((link, index) => (
                        <a 
                            key={index} 
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            className={`py-3 px-1 text-sm font-medium transition-colors duration-200 ${
                                link === "Building Details" 
                                ? 'border-b-2 border-blue-600 text-blue-600' 
                                : 'border-b-2 border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-400'
                            }`}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </nav>

            <section id="listing-contacts" className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Listing Contacts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                     <ContactCard contact={CONTACT_INFO} />
                </div>
            </section>

            <section id="building-details" className="mt-8">
                <PropertyDetailCard title="Building Details" data={BUILDING_DETAILS_DATA} />
            </section>
        </div>
    );
}

export default App;
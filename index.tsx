
import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
interface DetailItem {
  label: string;
  value: string | number;
}


// --- CONSTANTS ---
// To update the brochure link, change the URL below.
const BROCHURE_URL = 'https://example.com/property-brochure.pdf';

// To add or change gallery images, update the list of URLs below.
const IMAGES: string[] = [
    'https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585152225-358b54d6a637?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
];

const AT_A_GLANCE_DATA: DetailItem[] = [
    { label: "Property Type", value: "Office, Industrial" },
    { label: "Sub Type", value: "Executive Office, Medical Office" },
    { label: "Tenancy", value: "Multiple" },
    { label: "Lease Type", value: "NNN" },
    { label: "Total Building SqFt", value: "31,360" },
    { label: "Min Divisible SqFt", value: "2,457" },
    { label: "Vacant SqFt", value: "8,950" },
    { label: "Year Built", value: 2004 },
    { label: "Number of Buildings", value: 1 },
    { label: "Zoning", value: "COMMERCIAL" },
    { label: "Stories", value: 1 },
    { label: "Available on", value: "07/06/2024" },
    { label: "Assessor Parcel Number", value: "34034-007-000" },
];

const BUILDING_DETAILS_DATA: DetailItem[] = [
    { label: "Date Listed", value: "Jun 18, 2024" },
    { label: "Last Updated", value: "Oct 8, 2025" },
    { label: "Property Type", value: "Office, Industrial" },
    { label: "Subtype", value: "Executive Office, Medical Office" },
    { label: "Tenancy", value: "Multiple" },
    { label: "Total Building SqFt", value: "31,360" },
    { label: "Minimum Divisible SqFt", value: "2,457" },
    { label: "Vacant SqFt", value: "8,950" },
    { label: "Year Built", value: 2004 },
    { label: "Buildings", value: 1 },
    { label: "Stories", value: 1 },
    { label: "Frontage", value: 700 },
    { label: "Zoning", value: "COMMERCIAL" },
    { label: "APN", value: "34034-007-000" },
];

// This is the pre-encoded SVG string.
const COMPANY_LOGO_BASE64 = 'PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS42NCAzMi41MzYxVjcuNDY0MDlIMjIuMTE2VjEyLjEzNjFIMTYuNjQ0VjE3LjM4MDFIMjEuNTE2VjIyLjA1MjFIMTYuNjQ0VjI3Ljg2NDFIMjIuMjZWMy4yNTM2MUgxMS42NFoiIGZpbGw9IiMxRTNBOEEiLz48cGF0aCBkPSJNMjUuNzQgMzIuNTM2MVY3LjQ2NDA5SDMwLjc0NFYyNy44NjQxSDM4LjcyNFYzMi41MzYxSDI1Ljc0WiIgZmlsbD0iIzFFM0E4QSIvPjxwYXRoIGQ9Ik00Mi4zNDggMzIuNTM2MVY3LjQ2NDA5SDU0LjQ5MkM1Ni45NjQgNy40NjQwOSA1OC43NjQgNy45MzYwOSA1OS44OTIgOC44ODAwOUM2MS4wMiA5LjgyNDA5IDYxLjU4NCAxMS4xMjQxIDYxLjU4NCAxMi43ODAxQzYxLjU4NCAxNC4xNjAxIDYxLjE2NCAxNS4zMTIxIDYwLjMyNCAxNi4yMzYxQzU5LjQ4NCAxNy4xNjAxIDU4LjMzMiAxNy43NzIxIDU2Ljg2OCAxOC4wNzIxTDYxLjA0NCAyNi4wNTIxTDYyLjEgMjcuODY0MVYyOC4wMDgxTDU3LjA2IDMyLjUzNjFINTYuNTMyTDUyLjU0OCAyNi42MDQxSDQ3LjM0VjMyLjUzNjFINDIuMzQ4Wk00Ny4zNCAyMi4wNTIxSDUzLjYwNEM1NTQuMDIgMjIuMDUyMSA1Ni4wNTIgMjEuNzgxIDU2LjcgMjEuMjM2MUM1Ny4zNDggMjAuNjkyMSA1Ny42NzIgMTkuOTAwMSA1Ny42NzIgMTguODYwMUM1Ny42NzIgMTcuODIwMSA1Ny4zNDggMTcuMDI4MSA1Ni43IDE2LjQ4NDFDNTYuMDUyIDE1LjkwODEgNTUuMDIgMTUuNjIwMSA1My42MDQgMTUuNjIwMUg0Ny4zNFYyMi4wNTIxWiIgZmlsbD0iIzFFM0E4QSIvPjx0ZXh0IHg9IjY1IiB5PSIyNyIgZm9udC1mYW1pbHk9IkxhdG8sIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjM0I4MkY2Ij5SRUFMVFk8L3RleHQ+PC9zdmc+';

// To change the contact's profile picture, update the profileImage URL below.
const CONTACT_INFO = {
    name: 'Chris McCall, SIOR',
    phone: '850.249.3623',
    email: 'user@c*****s.com',
    profileImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop',
    companyLogo: `data:image/svg+xml;base64,${COMPANY_LOGO_BASE64}`,
};

const NAV_LINKS = [
    "Listing Contacts", "Building Details", "About Property", "Spaces", 
    "Map", "Climate Risk", "Demographics", "Location Insights", "Similar Properties"
];

// Icons
const NOTE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const PRINT_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>;
const SHARE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>;
const SAVE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const MAP_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const STREET_VIEW_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a3 3 0 100-6 3 3 0 000 6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c-1.885 4.47-5.28 7-9 7s-7.115-2.53-9-7c1.885-4.47 5.28-7 9-7s7.115 2.53 9 7z" /></svg>;
const PHOTOS_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const CHEVRON_LEFT_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const CHEVRON_RIGHT_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const PRO_BADGE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const ID_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" /></svg>;
const MAIL_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;


// --- COMPONENTS ---

// ImageGallery Component
interface ImageGalleryProps {
    images: string[];
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <div
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    className="w-full h-full bg-center bg-cover duration-500 transition-transform ease-in-out"
                ></div>
                
                <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                    <button 
                        onClick={goToPrevious}
                        className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition"
                        aria-label="Previous image"
                    >
                        {CHEVRON_LEFT_ICON}
                    </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                    <button 
                        onClick={goToNext}
                        className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition"
                        aria-label="Next image"
                    >
                        {CHEVRON_RIGHT_ICON}
                    </button>
                </div>

                <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
                    <button className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition">
                        {MAP_ICON}
                        <span>View Map</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition">
                        {STREET_VIEW_ICON}
                        <span>Street View</span>
                    </button>
                </div>
                <div className="absolute bottom-4 right-4 z-10">
                    <button className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition">
                        {PHOTOS_ICON}
                        <span>{images.length} Photos</span>
                    </button>
                </div>
            </div>
            <div className="w-full h-24">
                <div className="flex space-x-2 overflow-x-auto h-full p-1">
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-full aspect-video rounded-md cursor-pointer flex-shrink-0 border-2 transition-all ${currentIndex === index ? 'border-blue-500' : 'border-transparent hover:border-gray-400'}`}
                        >
                            <img src={image} alt={`Property thumbnail ${index + 1}`} className="w-full h-full object-cover rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// PropertyDetailCard Component
interface PropertyDetailCardProps {
    title: string;
    data: DetailItem[];
    customize?: boolean;
}
const PropertyDetailCard: React.FC<PropertyDetailCardProps> = ({ title, data, customize = false }) => {
    return (
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                {customize && <button className="text-sm text-blue-600 hover:underline font-medium">Customize</button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ContactCard Component
interface ContactCardProps {
    contact: {
        name: string;
        phone: string;
        email: string;
        profileImage: string;
        companyLogo: string;
    };
}
const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
    return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm w-full">
            <div className="flex items-start space-x-4">
                <img src={contact.profileImage} alt={contact.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-1">
                    <div className="flex items-center space-x-2">
                         <h3 className="font-bold text-gray-900">{contact.name}</h3>
                         <span className="bg-blue-500 rounded-full p-0.5">{PRO_BADGE_ICON}</span>
                         <span className="text-blue-600">{ID_ICON}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{contact.phone}</p>
                    <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-600">{contact.email}</span>
                        <span className="ml-2 text-gray-400">{MAIL_ICON}</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
                 <img src={contact.companyLogo} alt="Company Logo" className="h-8"/>
            </div>
             <div className="mt-4 text-sm font-medium text-blue-600 space-x-4">
                <button className="hover:underline">Chat</button>
                <button className="hover:underline">View Profile</button>
            </div>
        </div>
    );
};

// App Component
const App: React.FC = () => {
    
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        event.preventDefault();
        const element = document.getElementById(link.toLowerCase().replace(/\s+/g, '-'));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={(e) => handleNavClick(e, link)}
                            className={`py-3 px-1 text-sm font-medium transition-colors duration-200 ${
                                index === 1
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
};


// --- RENDERER ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

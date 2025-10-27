"use strict";
const e = React.createElement;

// --- CONSTANTS ---
const BROCHURE_URL = 'https://example.com/property-brochure.pdf';

const IMAGES = [
    './images/f1ddaa365240411c984c0774e0344cee_3000x2000_resize.jpg',
    './images/0d0d31be05a54db784d3a4e7b54855a3_3000x2000_resize.jpg',
    './images/0ad33502-b93e-4a72-a8d2-46a1c0d5d527.png',
    './images/staticmap.png',
];

const AT_A_GLANCE_DATA = [
    { label: "Property Type", value: "Office, Industrial" }, { label: "Sub Type", value: "Executive Office, Medical Office" },
    { label: "Tenancy", value: "Multiple" }, { label: "Lease Type", value: "NNN" },
    { label: "Total Building SqFt", value: "31,360" }, { label: "Min Divisible SqFt", value: "2,457" },
    { label: "Vacant SqFt", value: "8,950" }, { label: "Year Built", value: 2004 },
    { label: "Number of Buildings", value: 1 }, { label: "Zoning", value: "COMMERCIAL" },
    { label: "Stories", value: 1 }, { label: "Available on", value: "07/06/2024" },
    { label: "Assessor Parcel Number", value: "34034-007-000" },
];

const BUILDING_DETAILS_DATA = [
    { label: "Date Listed", value: "Jun 18, 2024" }, { label: "Last Updated", value: "Oct 8, 2025" },
    { label: "Property Type", value: "Office, Industrial" }, { label: "Subtype", value: "Executive Office, Medical Office" },
    { label: "Tenancy", value: "Multiple" }, { label: "Total Building SqFt", value: "31,360" },
    { label: "Minimum Divisible SqFt", value: "2,457" }, { label: "Vacant SqFt", value: "8,950" },
    { label: "Year Built", value: 2004 }, { label: "Buildings", value: 1 },
    { label: "Stories", value: 1 }, { label: "Frontage", value: 700 },
    { label: "Zoning", value: "COMMERCIAL" }, { label: "APN", value: "34034-007-000" },
];

const CONTACT_INFO = { name: 'David Boatwright', phone: '850.527.1623', email: 'David.Boatwright@svn.com', profileImage: './images/Google Chrome profile pic.png', companyLogo: './images/Riviera Commercial .jpg' };

// Icons as React elements
const CHEVRON_LEFT_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }));
const CHEVRON_RIGHT_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }));
const PRO_BADGE_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 text-white", viewBox: "0 0 20 20", fill: "currentColor" }, e("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }));
const ID_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" }));
const MAIL_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }));

// --- COMPONENTS ---

const PropertyDescription = () => {
    return e("div", { className: "bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-sm" },
        e("h2", { className: "text-xl font-bold text-[#D95F29] mb-4 border-b border-gray-700 pb-3" }, "About The Property"),
        e("div", { className: "space-y-4 text-sm text-gray-300 mt-4 leading-relaxed" },
            e("p", null, "Suite C-28B at 700 W 23rd Street, located in the well-established Corporate Office Park in Panama City, FL. This 2,015 ± SF office suite offers a highly functional floor plan with a professional image and ample natural light. Designed for efficiency and comfort, the suite features a mix of private offices, open workspace, and client-friendly amenities. The property benefits from General Commercial (GC-2 | Panama City) zoning, allowing for a wide range of office and professional service uses. Estimated Operating Expenses (Additional Rent) are currently $4.00/SF."),
            e("p", null, "Corporate Office Park enjoys a prime location one block north of 23rd Street, Panama City's dominant retail and commercial corridor. The property provides excellent accessibility to Gulf Coast Medical Center, HCA Florida Gulf Coast Hospital, and Ascension Sacred Heart Bay Hospital, as well as banking, dining, and service amenities along 23rd Street. With ample surface parking and convenient ingress/egress, the property is a strong fit for professional services or administrative operations seeking a central Panama City address.")
        )
    );
};

const BuildingHighlights = () => {
    const highlights = [
        "2,015 ± SF office suite with efficient professional layout",
        "6 private offices, including an executive office with en-suite restroom",
        "3 restrooms (including one with lobby access)",
        "29’ x 22’ open work area suitable for collaborative workspace or cubicles",
        "Large meeting/conference room and dedicated reception/waiting area",
        "Kitchen/breakroom for staff convenience",
        "Ample surface parking for staff and clients",
        "Located one block from 23rd Street retail corridor",
        "Centrally located near Gulf Coast & Sacred Heart hospitals"
    ];
    return e("div", { className: "bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-sm" },
        e("h2", { className: "text-xl font-bold text-[#D95F29] mb-4 border-b border-gray-700 pb-3" }, "Building Highlights"),
        e("ul", { className: "list-disc list-inside space-y-2 text-sm text-gray-300 mt-4" },
            highlights.map((item, index) => e("li", { key: index }, item))
        )
    );
};


const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    
    const goToPrevious = React.useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    const goToNext = React.useCallback(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    const goToSlide = index => setCurrentIndex(index);

    return e("div", { className: "flex flex-col gap-2" },
        e("div", { className: "relative w-full h-96 rounded-lg overflow-hidden shadow-lg" },
            e("div", { style: { backgroundImage: `url(${images[currentIndex]})` }, className: "w-full h-full bg-center bg-cover duration-500 transition-transform ease-in-out" }),
            e("div", { className: "absolute top-1/2 -translate-y-1/2 left-4 z-10" }, e("button", { onClick: goToPrevious, className: "bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition", "aria-label": "Previous image" }, CHEVRON_LEFT_ICON)),
            e("div", { className: "absolute top-1/2 -translate-y-1/2 right-4 z-10" }, e("button", { onClick: goToNext, className: "bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition", "aria-label": "Next image" }, CHEVRON_RIGHT_ICON))
        ),
        e("div", { className: "w-full h-24" },
            e("div", { className: "flex space-x-2 overflow-x-auto h-full p-1" },
                images.map((image, index) => e("div", { key: index, onClick: () => goToSlide(index), className: `h-full aspect-video rounded-md cursor-pointer flex-shrink-0 border-2 transition-all ${currentIndex === index ? 'border-[#005A9C]' : 'border-transparent hover:border-gray-600'}` },
                    e("img", { src: image, alt: `Property thumbnail ${index + 1}`, className: "w-full h-full object-cover rounded" })
                ))
            )
        )
    );
};

const PropertyDetailCard = ({ title, data, customize = false }) => {
    return e("div", { className: "bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-sm" },
        e("div", { className: "flex justify-between items-center mb-4 border-b border-gray-700 pb-3" },
            e("h2", { className: "text-xl font-bold text-[#D95F29]" }, title),
            customize && e("button", { className: "text-sm text-[#005A9C] hover:underline font-medium" }, "Customize")
        ),
        e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3" },
            data.map((item, index) => e("div", { key: index, className: "flex justify-between py-2 border-b border-gray-700" },
                e("span", { className: "text-sm text-gray-400" }, item.label),
                e("span", { className: "text-sm font-semibold text-gray-200" }, item.value)
            ))
        )
    );
};

const ContactCard = ({ contact }) => {
    return e("div", { className: "bg-gray-800 p-4 border border-gray-700 rounded-lg shadow-sm w-full" },
        e("div", { className: "flex items-start space-x-4" },
            e("img", { src: contact.profileImage, alt: contact.name, className: "w-16 h-16 rounded-full object-cover" }),
            e("div", { className: "flex-1" },
                e("div", { className: "flex items-center justify-between" },
                    e("div", { className: "flex items-center space-x-2" },
                        e("h3", { className: "font-bold text-white" }, contact.name),
                        e("span", { className: "bg-[#005A9C] rounded-full p-0.5" }, PRO_BADGE_ICON)
                    ),
                    e("span", { className: "text-[#005A9C]" }, ID_ICON)
                ),
                e("p", { className: "text-sm text-gray-300 mt-1" }, contact.phone),
                e("div", { className: "flex items-center justify-between mt-1" },
                    e("a", { href: `mailto:${contact.email}`, className: "text-sm text-[#005A9C] hover:underline" }, contact.email),
                    e("span", { className: "text-gray-500" }, MAIL_ICON)
                )
            )
        ),
        e("div", { className: "flex items-center gap-4 mt-4 pt-4 border-t border-gray-700" }, 
            e("img", { src: contact.companyLogo, alt: "Company Logo", className: "h-10 rounded" }),
            e("a", { href: "https://www.rivieracommercial.com/", target: "_blank", rel: "noopener noreferrer", className: "text-sm font-medium text-[#005A9C] hover:underline" }, "RivieraCommercial.com")
        ),
        e("div", { className: "mt-4 text-sm font-medium text-[#005A9C]" },
            e("button", { className: "hover:underline" }, "View Profile")
        )
    );
};

const App = () => {
    return e("div", { className: "max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-gray-200" },
        e("header", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6" },
            e("div", null,
                e("h1", { className: "text-3xl font-bold text-[#D95F29]" }, "700 W 23rd St"),
                e("p", { className: "text-gray-400" }, "Panama City, FL 32405")
            )
        ),
        e("main", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8" },
            e("div", { className: "lg:col-span-2" }, e(ImageGallery, { images: IMAGES })),
            e("div", { className: "lg:col-span-1 flex flex-col gap-6" },
                e("div", { className: "bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-sm" },
                    e("div", { className: "flex items-baseline mb-1" },
                        e("span", { className: "text-3xl font-bold text-white" }, "$18/SF/YR")
                    ),
                    e("p", { className: "text-sm text-gray-400 mb-4" }, "$1.50/SF/MO"),
                    e("div", { className: "py-4 border-y border-gray-700" },
                        e("h3", { className: "font-semibold text-gray-200" }, "Corporate Park"),
                        e("p", { className: "text-sm text-gray-400" }, "Office | 1 space available | 2,014 SqFt")
                    )
                ),
                e(PropertyDetailCard, { title: "Quick Take", data: AT_A_GLANCE_DATA, customize: true })
            )
        ),
        e("div", { className: "mt-8 space-y-8" },
            e(PropertyDescription, null),
            e(BuildingHighlights, null),
            e("section", { id: "building-details" },
                e(PropertyDetailCard, { title: "Building Details", data: BUILDING_DETAILS_DATA })
            ),
            e("section", { id: "listing-contacts" },
                e("h2", { className: "text-2xl font-bold mb-4 text-[#D95F29]" }, "Listing Contacts"),
                e("div", { className: "max-w-sm" }, 
                    e(ContactCard, { contact: CONTACT_INFO })
                )
            )
        )
    );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(e(React.StrictMode, null, e(App)));

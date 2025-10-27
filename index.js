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

const COMPANY_LOGO_BASE64 = 'PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS42NCAzMi41MzYxVjcuNDY0MDlIMjIuMTE2VjEyLjEzNjFIMTYuNjQ0VjE3LjM4MDFIMjEuNTE2VjIyLjA1MjFIMTYuNjQ0VjI3Ljg2NDFIMjIuMjZWMy4yNTM2MUgxMS42NFoiIGZpbGw9IiMxRTNBOEEiLz48cGF0aCBkPSJNMjUuNzQgMzIuNTM2MVY3LjQ2NDA5SDMwLjc0NFYyNy44NjQxSDM4LjcyNFYzMi41MzYxSDI1Ljc0WiIgZmlsbD0iIzFFM0E4QSIvPjxwYXRoIGQ9Ik00Mi4zNDggMzIuNTM2MVY3LjQ2NDA5SDU0LjQ5MkM1Ni45NjQgNy40NjQwOSA1OC43NjQgNy45MzYwOSA1OS44OTIgOC44ODAwOUM2MS4wMiA5LjgyNDA5IDYxLjU4NCAxMS4xMjQxIDYxLjU4NCAxMi43ODAxQzYxLjU4NCAxNC4xNjAxIDYxLjE2NCAxNS4zMTIxIDYwLjMyNCAxNi4yMzYxQzU5LjQ4NCAxNy4xNjAxIDU4LjMzMiAxNy43NzIxIDU2Ljg2OCAxOC4wNzIxTDYxLjA0NCAyNi4wNTIxTDYyLjEgMjcuODY0MVYyOC4wMDgxTDU3LjA2IDMyLjUzNjFINTYuNTMyTDUyLjU0OCAyNi42MDQxSDQ3LjM0VjMyLjUzNjFINDIuMzQ4Wk00Ny4zNCAyMi4wNTIxSDUzLjYwNEM1NTQuMDIgMjIuMDUyMSA1Ni4wNTIgMjEuNzgxIDU2LjcgMjEuMjM2MUM1Ny4zNDggMjAuNjkyMSA1Ny42NzIgMTkuOTAwMSA1Ny42NzIgMTguODYwMUM1Ny42NzIgMTcuODIwMSA1Ny4zNDggMTcuMDI4MSA1Ni4yIDE2LjQ4NDFDNTYuMDUyIDE1LjkwODEgNTUuMDIgMTUuNjIwMSA1My42MDQgMTUuNjIwMUg0Ny4zNFYyMi4wNTIxWiIgZmlsbD0iIzFFM0E4QSIvPjx0ZXh0IHg9IjY1IiB5PSIyNyIgZm9udC1mYW1pbHk9IkxhdG8sIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjM0I4MkY2Ij5SRUFMVFk8L3RleHQ+PC9zdmc+';

const CONTACT_INFO = { name: 'David Boatwright', phone: '850.527.1623', email: 'David.Boatwright@svn.com', profileImage: './images/Google Chrome profile pic.png', companyLogo: `data:image/svg+xml;base64,${COMPANY_LOGO_BASE64}` };

const NAV_LINKS = ["Listing Contacts", "Building Details", "About Property", "Spaces", "Map", "Climate Risk", "Demographics", "Location Insights", "Similar Properties"];

// Icons as React elements
const NOTE_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }));
const PRINT_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" }));
const SHARE_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" }));
const SAVE_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }));
const MAP_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }), e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" }));
const STREET_VIEW_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 12a3 3 0 100-6 3 3 0 000 6z" }), e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 12c-1.885 4.47-5.28 7-9 7s-7.115-2.53-9-7c1.885-4.47 5.28-7 9-7s7.115 2.53 9 7z" }));
const PHOTOS_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }));
const CHEVRON_LEFT_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }));
const CHEVRON_RIGHT_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }));
const PRO_BADGE_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 text-white", viewBox: "0 0 20 20", fill: "currentColor" }, e("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }));
const ID_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" }));
const MAIL_ICON = e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, e("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }));

// --- COMPONENTS ---
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
            e("div", { className: "absolute top-1/2 -translate-y-1/2 left-4 z-10" }, e("button", { onClick: goToPrevious, className: "bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition", "aria-label": "Previous image" }, CHEVRON_LEFT_ICON)),
            e("div", { className: "absolute top-1/2 -translate-y-1/2 right-4 z-10" }, e("button", { onClick: goToNext, className: "bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition", "aria-label": "Next image" }, CHEVRON_RIGHT_ICON)),
            e("div", { className: "absolute bottom-4 left-4 flex space-x-2 z-10" },
                e("button", { className: "flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition" }, MAP_ICON, e("span", null, "View Map")),
                e("button", { className: "flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition" }, STREET_VIEW_ICON, e("span", null, "Street View"))
            ),
            e("div", { className: "absolute bottom-4 right-4 z-10" }, e("button", { className: "flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition" }, PHOTOS_ICON, e("span", null, `${images.length} Photos`)))
        ),
        e("div", { className: "w-full h-24" },
            e("div", { className: "flex space-x-2 overflow-x-auto h-full p-1" },
                images.map((image, index) => e("div", { key: index, onClick: () => goToSlide(index), className: `h-full aspect-video rounded-md cursor-pointer flex-shrink-0 border-2 transition-all ${currentIndex === index ? 'border-blue-500' : 'border-transparent hover:border-gray-400'}` },
                    e("img", { src: image, alt: `Property thumbnail ${index + 1}`, className: "w-full h-full object-cover rounded" })
                ))
            )
        )
    );
};

const PropertyDetailCard = ({ title, data, customize = false }) => {
    return e("div", { className: "bg-white p-6 border border-gray-200 rounded-lg shadow-sm" },
        e("div", { className: "flex justify-between items-center mb-4 border-b border-gray-200 pb-3" },
            e("h2", { className: "text-xl font-bold text-gray-900" }, title),
            customize && e("button", { className: "text-sm text-blue-600 hover:underline font-medium" }, "Customize")
        ),
        e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3" },
            data.map((item, index) => e("div", { key: index, className: "flex justify-between py-2 border-b border-gray-100" },
                e("span", { className: "text-sm text-gray-600" }, item.label),
                e("span", { className: "text-sm font-semibold text-gray-800" }, item.value)
            ))
        )
    );
};

const ContactCard = ({ contact }) => {
    return e("div", { className: "bg-white p-4 border border-gray-200 rounded-lg shadow-sm w-full" },
        e("div", { className: "flex items-start space-x-4" },
            e("img", { src: contact.profileImage, alt: contact.name, className: "w-16 h-16 rounded-full object-cover" }),
            e("div", { className: "flex-1" },
                e("div", { className: "flex items-center space-x-2" },
                    e("h3", { className: "font-bold text-gray-900" }, contact.name),
                    e("span", { className: "bg-blue-500 rounded-full p-0.5" }, PRO_BADGE_ICON),
                    e("span", { className: "text-blue-600" }, ID_ICON)
                ),
                e("p", { className: "text-sm text-gray-600 mt-1" }, contact.phone),
                e("div", { className: "flex items-center mt-1" },
                    e("span", { className: "text-sm text-gray-600" }, contact.email),
                    e("span", { className: "ml-2 text-gray-400" }, MAIL_ICON)
                )
            )
        ),
        e("div", { className: "mt-4 pt-4 border-t border-gray-200" }, e("img", { src: contact.companyLogo, alt: "Company Logo", className: "h-8" })),
        e("div", { className: "mt-4 text-sm font-medium text-blue-600 space-x-4" },
            e("button", { className: "hover:underline" }, "Chat"),
            e("button", { className: "hover:underline" }, "View Profile")
        )
    );
};

const App = () => {
    const handleNavClick = (event, link) => {
        event.preventDefault();
        const elementId = link.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(elementId);
        if (element) {
            // The behavior 'smooth' will scroll smoothly
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return e("div", { className: "max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-gray-800" },
        e("header", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-4" },
            e("div", null,
                e("h1", { className: "text-3xl font-bold text-gray-900" }, "700 W 23rd St"),
                e("p", { className: "text-gray-600" }, "Panama City, FL 32405")
            ),
            e("div", { className: "flex items-center space-x-4 mt-4 md:mt-0 text-sm font-medium text-gray-700" },
                e("button", { className: "flex items-center space-x-2 hover:text-blue-600" }, NOTE_ICON, e("span", null, "Notes")),
                e("button", { className: "flex items-center space-x-2 hover:text-blue-600" }, PRINT_ICON, e("span", null, "Print")),
                e("button", { className: "flex items-center space-x-2 hover:text-blue-600" }, SHARE_ICON, e("span", null, "Share")),
                e("button", { className: "flex items-center space-x-2 hover:text-blue-600" }, SAVE_ICON, e("span", null, "Save"))
            )
        ),
        e("main", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8" },
            e("div", { className: "lg:col-span-2" }, e(ImageGallery, { images: IMAGES })),
            e("div", { className: "lg:col-span-1" },
                e("div", { className: "bg-white p-6 border border-gray-200 rounded-lg shadow-sm" },
                    e("div", { className: "flex items-baseline mb-1" },
                        e("span", { className: "text-3xl font-bold text-gray-900" }, "$18/SF/YR")
                    ),
                    e("p", { className: "text-sm text-gray-600 mb-4" }, "$1.50/SF/MO"),
                    e("div", { className: "mb-4 py-4 border-y border-gray-200" },
                        e("h3", { className: "font-semibold text-gray-800" }, "Corporate Park"),
                        e("p", { className: "text-sm text-gray-600" }, "Office | 1 space available | 2,014 SqFt")
                    ),
                    e("div", { className: "text-sm text-gray-600 flex items-center space-x-4 mb-6" },
                        e("span", null, "496 days on market"),
                        e("span", { className: "h-1 w-1 bg-gray-400 rounded-full" }),
                        e("span", null, "Updated 19 days ago")
                    ),
                    e("div", { className: "flex space-x-3" },
                        e("button", { className: "w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300" }, "Request Info"),
                        e("a", { href: BROCHURE_URL, target: "_blank", rel: "noopener noreferrer", className: "w-full text-center bg-white text-blue-600 font-bold py-2 px-4 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-300" }, "View Brochure")
                    )
                ),
                e("div", { className: "mt-6" },
                    e(PropertyDetailCard, { title: "At A Glance", data: AT_A_GLANCE_DATA, customize: true })
                )
            )
        ),
        e("nav", { className: "sticky top-0 bg-gray-50/95 backdrop-blur-sm z-20 mt-8 border-b border-gray-300" },
            e("div", { className: "flex space-x-6 overflow-x-auto whitespace-nowrap -mb-px" },
                NAV_LINKS.map((link, index) => e("a", {
                    key: index,
                    href: `#${link.toLowerCase().replace(/\s+/g, '-')}`,
                    onClick: event => handleNavClick(event, link),
                    className: `py-3 px-1 text-sm font-medium transition-colors duration-200 ${index === 1 ? 'border-b-2 border-blue-600 text-blue-600' : 'border-b-2 border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-400'}`
                }, link))
            )
        ),
        e("section", { id: "listing-contacts", className: "pt-8" },
            e("h2", { className: "text-2xl font-bold mb-4 text-gray-900" }, "Listing Contacts"),
            e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }, e(ContactCard, { contact: CONTACT_INFO }))
        ),
        e("section", { id: "building-details", className: "pt-8" },
            e(PropertyDetailCard, { title: "Building Details", data: BUILDING_DETAILS_DATA })
        )
    );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(e(React.StrictMode, null, e(App)));

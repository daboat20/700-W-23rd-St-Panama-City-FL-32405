import { DetailItem } from './types';

// To update the brochure link, change the URL below.
export const BROCHURE_URL = 'https://example.com/property-brochure.pdf';

// To add or change gallery images, update the list of URLs below.
export const IMAGES: string[] = [
    'https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585152225-358b54d6a637?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
];

export const AT_A_GLANCE_DATA: DetailItem[] = [
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

export const BUILDING_DETAILS_DATA: DetailItem[] = [
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

// To change the contact's profile picture, update the profileImage URL below.
export const CONTACT_INFO = {
    name: 'Chris McCall, SIOR',
    phone: '850.249.3623',
    email: 'user@c*****s.com',
    profileImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop',
    companyLogo: 'https://via.placeholder.com/100x40/cccccc/808080?text=Logo',
};

export const NAV_LINKS = [
    "Listing Contacts", "Building Details", "About Property", "Spaces", 
    "Map", "Climate Risk", "Demographics", "Location Insights", "Similar Properties"
];

// Icons
export const NOTE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
export const PRINT_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>;
export const SHARE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>;
export const SAVE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
export const MAP_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const STREET_VIEW_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a3 3 0 100-6 3 3 0 000 6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c-1.885 4.47-5.28 7-9 7s-7.115-2.53-9-7c1.885-4.47 5.28-7 9-7s7.115 2.53 9 7z" /></svg>;
export const PHOTOS_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
export const CHEVRON_LEFT_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
export const CHEVRON_RIGHT_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
export const PRO_BADGE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
export const ID_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" /></svg>;
export const MAIL_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
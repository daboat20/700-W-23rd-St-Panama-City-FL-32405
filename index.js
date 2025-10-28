"use strict";

const e = React.createElement;

// --- CONSTANTS ---
const BROCHURE_URL = 'https://example.com/property-brochure.pdf';

// =================================================================
// === YOUR PROPERTY PHOTOS (from the 'images' folder) ===
// =================================================================
const IMAGES = [
    './images/f1ddaa365240411c984c0774e0344cee_3000x2000_resize.jpg',
    './images/0d0d31be05a54db784d3a4e7b54855a3_3000x2000_resize.jpg',
    './images/0ad33502-b93e-4a72-a8d2-46a1c0d5d527.png',
    './images/staticmap.png',
];

// =================================================================
// === AT A GLANCE (updated to match screenshot) ===
// =================================================================
const AT_A_GLANCE_DATA = [
    { label: "Property Type", value: "Office" }, { label: "Sub Type", value: "Executive Office" },
    { label: "Tenancy", value: "Multiple" }, { label: "Class", value: "B" },
    { label: "Total Building SqFt", value: "2,014" }, { label: "Vacant SqFt", value: "2,014" },
    { label: "Total Parking Spaces", value: "Ample surface" }, { label: "Year Built", value: 1988 },
    { label: "Acreage", value: "0.080" }, { label: "Zoning", value: "General Commercial (GC-2 | Panama City)" },
    { label: "Stories", value: 1 }, { label: "Expense Rate Monthly", value: "$0" },
    { label: "Expense Rate Yearly", value: "$4" }, { label: "Assessor Parcel Number", value: "13008-000-000" },
];

// =================================================================
// === BUILDING DETAILS (kept aligned with “At a Glance”) ===
// =================================================================
const BUILDING_DETAILS_DATA = [
    { label: "Property Type", value: "Office" }, { label: "Subtype", value: "Executive Office" },
    { label: "Tenancy", value: "Multiple" }, { label: "Total Building SqFt", value: "2,014" },
    { label: "Vacant SqFt", value: "2,014" }, { label: "Year Built", value: 1988 },
    { label: "Buildings", value: 1 }, { label: "Stories", value: 1 },
    { label: "Zoning", value: "General Commercial (GC-2 | Panama City)" },
];

// =================================================================
// === CONTACT CARD (unchanged placeholder) ===
// =================================================================
const CONTACT_INFO = {
  name: "David Boatwright",
  title: "Broker Associate",
  phone: "850-527-1623",
  email: "David@RivieraCommercial.com"
};

// =================================================================
// === SMALL UTIL COMPONENTS (unchanged)
// =================================================================
const Tag = ({ children }) =>
  e("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200" }, children);

const Pill = ({ children }) =>
  e("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" }, children);

const Stat = ({ label, value }) => e(
  "div",
  { className: "flex flex-col" },
  e("span", { className: "text-xs text-gray-500" }, label),
  e("span", { className: "text-base font-semibold text-gray-900" }, value)
);

const PropertyDetailCard = ({ title, data }) =>
  e("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" },
    e("h3", { className: "text-lg font-semibold text-gray-900 mb-4" }, title),
    e("dl", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3" },
      data.map((row, idx) =>
        e("div", { key: idx, className: "flex justify-between border-b border-gray-100 py-2" },
          e("dt", { className: "text-gray-600" }, row.label),
          e("dd", { className: "font-medium text-gray-900 text-right" }, String(row.value))
        )
      )
    )
  );

// =================================================================
// === MAIN APP (header address + quick take updated) ===
// =================================================================
const App = () => {
  return e("div", { className: "max-w-7xl mx-auto px-4 py-8" },
    // Header
    e("header", { className: "mb-6" },
      e("div", { className: "flex items-start justify-between gap-4" },
        e("div", null,
          e("p", { className: "text-sm text-gray-600" }, "Corporate Park"),
          e("h1", { className: "text-3xl font-bold text-gray-900" }, "700 W 23rd St"),
          e("p", { className: "text-gray-600" }, "Panama City, FL 32405")
        ),
        e("div", { className: "text-right" },
          e("div", { className: "text-3xl font-bold text-gray-900" }, "$18/SF/YR"),
          e("p", { className: "text-sm text-gray-600 mb-4" }, "$1.50/SF/MO"),
          e("div", { className: "mb-4 py-4 border-y border-gray-200" },
            e("h3", { className: "font-semibold text-gray-800" }, "Corporate Park"),
            e("p", { className: "text-sm text-gray-600" }, "Office | 1 space available | 2,014 SqFt")
          ),
          e("div", { className: "text-sm text-gray-600 flex items-center space-x-4 mb-6" },
            e("span", null, "38 days on market"),
            e("span", { className: "h-1 w-1 bg-gray-400 rounded-full" }),
            e("span", null, "Updated 34 days ago")
          ),
          e("div", { className: "flex space-x-3" },
            e("button", { className: "w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700" }, "Request Info"),
            e("a", { href: BROCHURE_URL, target: "_blank", rel: "noreferrer", className: "w-full text-center bg-white text-gray-900 font-bold py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-50" }, "View Brochure")
          )
        )
      )
    ),

    // Image gallery (unchanged)
    e("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" },
      IMAGES.map((src, i) =>
        e("img", { key: i, src, className: "w-full h-64 object-cover rounded-xl border border-gray-200", alt: `photo-${i}` })
      )
    ),

    // At a Glance
    e("section", null,
      e(PropertyDetailCard, { title: "At a Glance", data: AT_A_GLANCE_DATA })
    ),

    // Contact + Building details
    e("section", { className: "mt-8 grid grid-cols-1 gap-6" },
      e("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" },
        e("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" },
          e("h3", { className: "text-lg font-semibold text-gray-900 mb-4" }, "Executive Office"),
          e("p", { className: "text-sm text-gray-600 mb-4" }, "Ample surface parking • Class B • Built 1988")
        )
      ),
      e("section", { id: "building-details", className: "mt-8" },
        e(PropertyDetailCard, { title: "Building Details", data: BUILDING_DETAILS_DATA })
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

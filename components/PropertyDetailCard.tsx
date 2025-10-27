import React from 'react';
import { DetailItem } from '../types';

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

export default PropertyDetailCard;
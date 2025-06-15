'use client';
import React, { useState } from 'react';
import Link from 'next/link';


const awsServices = [
  {
    name: 'EC2',
    notes: 'Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS cloud.',
  },
  {
    name: 'S3',
    notes: 'Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.',
  },
  {
    name: 'Lambda',
    notes: 'AWS Lambda lets you run code without provisioning or managing servers.',
  },
];

const AWSPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-white">AWS Services Study Notes</h1>
      <p className="text-lg mb-8 text-white">
        Here you'll find a list of AWS services I'm studying, with expandable notes for each.
      </p>
      <ul className="w-full max-w-xl space-y-4">
        {awsServices.map((service, idx) => (
          <li key={service.name} className="bg-white rounded-lg shadow-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-900 focus:outline-none"
              onClick={() => toggle(idx)}
            >
              {service.name}
              <span>{openIndex === idx ? '-' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="p-4 pt-0 text-gray-700">
                {service.notes}
                <div className="flex justify-end">
                  <Link
                    href={`/articles/aws/${service.name.toLowerCase()}`}
                    className="text-white-500 underline mt-2 inline-block"
                  >
                    more
                  </Link>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AWSPage;
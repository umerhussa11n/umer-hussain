'use client';
import React from 'react';

const EC2Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-white">Amazon EC2</h1>
      <p className="text-lg mb-4 text-white max-w-2xl text-center">
        Amazon Elastic Compute Cloud (EC2) is a web service that provides secure, resizable compute capacity in the cloud. 
        It is designed to make web-scale cloud computing easier for developers. EC2 allows you to launch virtual servers, 
        configure security and networking, and manage storage. It offers a variety of instance types, flexible pricing options, 
        and the ability to scale resources up or down as needed.
      </p>
      <ul className="text-white max-w-xl list-disc list-inside">
        <li>Launch and manage virtual servers (instances)</li>
        <li>Choose from a wide selection of instance types</li>
        <li>Pay only for what you use (on-demand, reserved, spot pricing)</li>
        <li>Integrates with other AWS services</li>
        <li>Highly scalable and reliable</li>
      </ul>
    </div>
  );
};

export default EC2Page;
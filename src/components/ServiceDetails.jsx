

import { connectDb } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

const ServiceDetails =async ({id}) => {
  const serviceDetails = await  connectDb('services')
  const serviceData = await serviceDetails.findOne({_id : new ObjectId(id)})
  console.log(serviceData)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Service Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">Info for Payup</h2>
        <h3 className="text-3xl font-bold text-primary">{serviceData.title}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Service Image */}
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src={serviceData.img}
            alt={serviceData.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Service Details */}
        <div>
          <h4 className="text-2xl font-bold mb-4">Unique Car Engine Service</h4>
          <p className="text-gray-600 mb-6">{serviceData.description}</p>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h5 className="text-xl font-bold mb-4">Price ${serviceData.price}</h5>
            <p className="font-semibold mb-4">Protected Checkout</p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition">
              Book This Service
            </button>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-6">Our Services Include</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.facility.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h5 className="text-lg font-bold mb-2">{facility.name}</h5>
              <p className="text-gray-600">{facility.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-6">3 Simple Steps to Process</h4>
        <p className="text-gray-600 mb-8">
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humor, Or Randomized Words Which Don't Look Even Slightly Believable.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-bold mb-2">STEP ONE</h5>
            <p className="text-gray-600">It Uses A Dictionary Of Over 200 Latin Words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-bold mb-2">STEP TWO</h5>
            <p className="text-gray-600">It Uses A Dictionary Of Over 200 Latin Words.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h5 className="text-lg font-bold mb-2">STEP THREE</h5>
            <p className="text-gray-600">It Uses A Dictionary Of Over 200 Latin Words.</p>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-primary text-white p-8 rounded-lg mb-12">
        <h4 className="text-2xl font-bold mb-4">Car Doctor Special</h4>
        <p className="text-xl mb-4">Serve up to 60% off</p>
        <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          Get A Quote
        </button>
      </div>

      {/* Help Section */}
      <div className="text-center mb-12">
        <h4 className="text-2xl font-bold mb-2">Need Help? We Are Here To Help You</h4>
        <p className="text-gray-600">Car Doctor</p>
      </div>
    </div>
  );
}

export default ServiceDetails

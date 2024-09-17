/** @format */

import React from "react";

const AboutUs = () => {
  return (
    <div className="px-6 py-12 lg:px-16 lg:py-20 bg-gray-50">
      <div className="max-w-screen-lg mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          About Us
        </h2>

        <div className="our-story mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-bold">UNWINDCABINS</span>, we believe that
            travel is more than just visiting new places—it's about creating
            lasting memories. Founded in [year], we set out with a mission to
            make travel accessible for everyone, connecting travelers with
            unique and unforgettable experiences.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How long have we been in business?{" "}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The journey started with the goal of making sophisticated AI
            technology accessible and useful to as many people as possible. The
            idea was to create a tool that could understand and generate
            human-like text, helping with everything from answering questions to
            providing creative writing assistance. The overarching mission is to
            make information and communication more efficient and effective,
            whether for personal, educational, or professional purposes.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why did we start this journey?{" "}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Personal Enthusiasm: Many people start travel websites because they
            have a deep passion for travel and want to share their experiences
            and insights with others.
          </p>
          <p>
            Desire to Inspire: There's a drive to inspire others to explore new
            destinations and discover unique experiences.
          </p>
        </div>

        {/* Why Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Us</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Curated Destinations
              </h4>
              <p className="text-gray-700">
                Handpicked locations from hidden gems to popular destinations.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Easy Booking Process
              </h4>
              <p className="text-gray-700">
                Book your trip in just a few clicks with transparent pricing.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Personalized Experiences
              </h4>
              <p className="text-gray-700">
                Tailor your travel experience based on your preferences.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                24/7 Customer Support
              </h4>
              <p className="text-gray-700">
                Our team is always ready to help during your trip.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Step 1: Search
              </h4>
              <p className="text-gray-700">
                Find your ideal destination using our powerful search tool.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Step 2: Customize
              </h4>
              <p className="text-gray-700">
                Choose accommodations, tours, and activities to build your trip.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Step 3: Book
              </h4>
              <p className="text-gray-700">
                Complete the booking through our secure payment gateway.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Step 4: Enjoy
              </h4>
              <p className="text-gray-700">
                Show up and enjoy your adventure. We handle the rest.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                How do I book a trip?
              </h4>
              <p className="text-gray-700">
                Use our search tool, customize your trip, and book securely.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                What kind of accommodation is available?
              </h4>
              <p className="text-gray-700">
                Choose from hotels, resorts, vacation rentals, and more.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Can I cancel or change my booking?
              </h4>
              <p className="text-gray-700">
                Yes, refer to the cancellation policy on the booking page.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Is payment secure?
              </h4>
              <p className="text-gray-700">
                We use industry-standard encryption for secure transactions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                Do you offer travel insurance?
              </h4>
              <p className="text-gray-700">
                Yes, optional insurance is available at checkout.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-2">
                What if I need help during my trip?
              </h4>
              <p className="text-gray-700">
                Our 24/7 support team is here to assist you at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

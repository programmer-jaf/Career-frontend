import React from "react";
import { aboutFeatures } from "../../constants";

const FeaturesSection = () => {
  return (
    <section className="my-8 md:my-16 py-8 md:py-16 bg-green-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {aboutFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              {/* Optional icon: <feature.icon className="text-4xl text-green-500 mb-4" /> */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

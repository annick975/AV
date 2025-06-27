import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
}

export default function TeamCard({ name, role, bio, imageSrc }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg border border-green-100">
      <div className="w-24 h-24 bg-green-100 rounded-full mb-4 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="text-2xl text-green-700 font-bold">Photo</span>
        )}
      </div>
      <h2 className="text-xl font-semibold text-green-700">{name}</h2>
      <p className="text-green-600 mb-2">{role}</p>
      <p className="text-gray-700 text-center text-sm">{bio}</p>
    </div>
  );
}

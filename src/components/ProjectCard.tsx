import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
  technologies?: string[];
  defaultImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  imageUrl,
  technologies,
  defaultImage,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={imageUrl || defaultImage}
          alt={title || "Project Image"}
          className="w-full h-40 object-cover" /* Image height limited */
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">
        {title || "Untitled Project"}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {description || "No description available."}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      )}
      {technologies && technologies.length > 0 && (
        <p className="text-sm text-gray-500 mt-2">
          <strong>Technologies:</strong> {technologies.join(", ")}
        </p>
      )}
    </div>
  );
};

export default ProjectCard;

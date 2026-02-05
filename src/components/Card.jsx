import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Reusable Card component for Experience, Projects, Certifications.
 *
 * Props:
 *  - title: string (required)
 *  - subtitle?: string (optional)
 *  - description: string | ReactNode (required)
 *  - imageSrc?: string – optional thumbnail image URL
 *  - link?: string – optional external URL (card becomes clickable)
 *  - className?: string – additional Tailwind CSS classes
 */
export default function Card({ title, subtitle, description, imageSrc, link, term, className = '' }) {
  const content = (
    <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg ${className}`}> 
      {imageSrc && (
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-emerald-400">{title}</h3>
        {subtitle && <h4 className="text-sm text-gray-400 mb-2">{subtitle}</h4>}
        <p className="text-gray-300 text-sm">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-emerald-300 hover:underline">
            {term} →
          </a>
        )}
      </div>
    </div>
  );

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  imageSrc: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  term: PropTypes.string
};

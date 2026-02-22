import React from 'react';
import PropTypes from 'prop-types';

/**
 * Props:
 * - id: string – HTML id for anchor navigation.
 * - bg: string – Tailwind background class (e.g., 'bg-navy-900').
 * - children: ReactNode – Section content.
 * - aosType?: string – AOS animation type (default 'fade-up').
 */
export default function SectionWrapper({ id, bg = 'bg-navy-900', aosType = 'fade-up', children }) {
  return (
    <section
      id={id}
      className={`py-20 ${bg} text-white scroll-smooth`}
      data-aos={aosType}
      data-aos-once="false"
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  bg: PropTypes.string,
  aosType: PropTypes.string,
  children: PropTypes.node.isRequired,
};

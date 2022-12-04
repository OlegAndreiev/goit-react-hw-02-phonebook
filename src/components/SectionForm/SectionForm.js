import React from 'react';
import PropTypes from 'prop-types';
const SectionForm = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default SectionForm;

SectionForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

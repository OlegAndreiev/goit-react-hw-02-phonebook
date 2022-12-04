import React from 'react';

const SectionForm = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default SectionForm;

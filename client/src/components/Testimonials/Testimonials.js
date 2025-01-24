// src/components/Testimonials/Testimonials.js

import React from 'react';
import styles from './Testimonials.module.css';
import testimonialsData from '../../utils/testimonialsData';

const Testimonials = () => {
  return (
    <section aria-labelledby="testimonials-heading" className={styles.testimonials}>
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className={styles.testimonialsContainer}>
        {testimonialsData.map((testimonial) => (
          <blockquote key={testimonial.id} className={styles.testimonial}>
            <p>"{testimonial.quote}"</p>
            <footer>
              <strong>{testimonial.name}</strong>, {testimonial.position}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

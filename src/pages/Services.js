import React from 'react';
import Card from '../components/Card';
import '../styles/Services.css';

function Services() {
  const services = [
    { title: 'Développement Web', description: 'Création de sites web modernes et performants.' },
    { title: 'Maintenance', description: 'Support et entretien pour vos systèmes existants.' },
    { title: 'Conseil', description: 'Accompagnement stratégique pour vos projets digitaux.' },
  ];

  return (
    <div className="services">
      <h1>Nos Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <Card key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}

export default Services;

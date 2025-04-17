// js/interactions.js

document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Skills Display (About Page)
  const skillsList = document.querySelector('.skills');
  if (skillsList) {
    skillsList.querySelectorAll('li').forEach((skill, index) => {
      skill.style.transitionDelay = `${index * 0.1}s`;
      skill.classList.add('animate-skill');
    });
  }

  // Project Card Hover Effect (Projects Page)
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      card.style.transition = 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      card.style.transition = 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out';
    });
  });

  // Hero Section Animation (Home Page)
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('animate-hero');
  }
});

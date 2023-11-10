// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});

// Responsive navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Display projects dynamically
const projects = [
    {
        title: 'Amazon Clone - E-commerce Web Application',
        description: 'Developed a responsive e-commerce web application using React.js, CSS, and Firebase for backend functionality and database management. Implemented user authentication, product listing, search functionality, shopping cart features, checkout process, and real-time order tracking.',
        technologies: 'Technologies: React.js, CSS, Firebase, Git',
        achievements: [
            'Created a seamless shopping experience with a user-friendly interface.',
            'Demonstrated proficiency in frontend development, including React.js and UI design principles.',
            'Managed complex data flow and state management effectively.',
            'Gained practical experience with modern web development technologies and tools.',
        ],
    },
    {
        title: 'Sudoku Solver (Python)',
        description: 'Developed a Sudoku solver program in Python, utilizing backtracking algorithms to solve Sudoku puzzles efficiently. Implemented data structures and algorithms to represent and manipulate Sudoku grids. Demonstrated problem-solving skills and logical thinking through this project.',
        technologies: 'Technologies: Python',
        achievements: null,
    },
    {
        title: 'Sudoku Solver (Python)',
        description: 'Developed a Sudoku solver program in Python, utilizing backtracking algorithms to solve Sudoku puzzles efficiently. Implemented data structures and algorithms to represent and manipulate Sudoku grids. Demonstrated problem-solving skills and logical thinking through this project.',
        technologies: 'Technologies: Python',
        achievements: null,
    },
    // Add more projects as needed
];

const projectsContainer = document.getElementById('projects');

if (projectsContainer) {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.technologies}</p>
            ${project.achievements ? `<ul>${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}</ul>` : ''}
        `;

        projectsContainer.appendChild(projectCard);
    });
}

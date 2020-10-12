skills = ['Java 8', 'Maven', 'MySQL i Microsoft SQL Server', 'Hibernate i JDBC',
    'HTML, CSS i JavaScript', 'TypeScript', 'Angular', 'JUnit 5', 'C++', 'GIT'];
let viewSkills = "";

function viewSkillsList() {
    for (let i = 0; i < skills.length; i++) {
        viewSkills += '<span class="tick">✓  </span>';
        if (skills[i] === 'Java 8') {
            viewSkills += '<b>' + skills[i] + '</b><br/>';
        } else {
            viewSkills += skills[i] + '<br/>';
        }
    }
    document.getElementById("skills").innerHTML = viewSkills;
}

window.onload = viewSkillsList;

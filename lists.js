skills = ['Java 8', 'Spring','Maven', 'PL/SQL, Oracle, MySQL, MS SQL', 'Hibernate, JDBC',
    'HTML, CSS', 'JUnit 5', 'Jira', 'GIT', 'Scrum'];
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

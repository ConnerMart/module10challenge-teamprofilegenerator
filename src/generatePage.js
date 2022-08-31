function renderManager(manager) {
  return `
<div class="card-manager">
<h2>${manager.name}</h2>
<h3>Manager</h3>
<ul>
<li>Employee ID: ${manager.id}</li>
<li>Email: ${manager.email}</li>
<li>Office Number: ${manager.officeNumber}</li>
</ul>
</div>
`;
}

function renderEngineer(engineer) {
  return `
<div class="card-engineer">
<h2>${engineer.name}</h2>
<h3>Engineer</h3>
<ul>
<li>Employee ID: ${engineer.id}</li>
<li>Email: ${engineer.email}</li>
<li>GitHub: ${engineer.github}</li>
</ul>
</div>
  `;
}

function renderIntern(intern) {
  return `
<div class="card-intern">
<h2>${intern.name}</h2>
<h3>Intern</h3>
<ul>
<li>Employee ID: ${intern.id}</li>
<li>Email: ${intern.email}</li>
<li>School: ${intern.school}</li>
</ul>
</div>
    `;
}

// (data) here will be the team array
function generatePage(data) {
  for (let i = 0; i < data.length; i++) {
    switch (data[i].getRole()) {
      case "Manager":
        renderManager(data[i]);
        break;
      case "Engineer":
        renderEngineer(data[i]);
        break;
      case "Intern":
        renderIntern(data[i]);
        break;
    }
  }
}

module.exports = generatePage;

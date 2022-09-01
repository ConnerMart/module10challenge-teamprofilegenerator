function renderManager(manager) {
  return `
  <div class="card border-primary mb-3" style="max-width: 18rem">
  <div class="card-header">Manager</div>
  <div class="card-body text-primary">
    <h5 class="card-title">${manager.name}</h5>
    <ul>
      <li><span>Employee ID:</span> ${manager.id}</li>
      <li><span>Email:</span> ${manager.email}</li>
      <li><span>Office Number:</span> ${manager.officeNumber}</li>
    </ul>
  </div>
</div>
`;
}

function renderEngineer(engineer) {
  return `
  <div class="card border-primary mb-3" style="max-width: 18rem">
  <div class="card-header">Manager</div>
  <div class="card-body text-primary">
    <h5 class="card-title">${engineer.name}</h5>
    <ul>
      <li><span>Employee ID:</span> ${engineer.id}</li>
      <li><span>Email:</span> ${engineer.email}</li>
      <li><span>Office Number:</span> ${engineer.officeNumber}</li>
    </ul>
  </div>
</div>
`;
}

function renderIntern(intern) {
  return `
  <div class="card border-primary mb-3" style="max-width: 18rem">
  <div class="card-header">Manager</div>
  <div class="card-body text-primary">
    <h5 class="card-title">${intern.name}</h5>
    <ul>
      <li><span>Employee ID:</span> ${intern.id}</li>
      <li><span>Email:</span> ${intern.email}</li>
      <li><span>Office Number:</span> ${intern.officeNumber}</li>
    </ul>
  </div>
</div>
`;
}

topHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<link rel="stylesheet" href="./style.css" />
<title>Document</title>
</head>
<body>
<section class="card-container">`;
bottomHTML = `
</section>
</body>
</html>`;

// (data) here will be the team array
function generatePage(data) {
  teamCards = [];
  for (let i = 0; i < data.length; i++) {
    switch (data[i].getRole()) {
      case "Manager":
        teamCards.push(renderManager(data[i]));
        break;
      case "Engineer":
        teamCards.push(renderEngineer(data[i]));
        break;
      case "Intern":
        teamCards.push(renderIntern(data[i]));
        break;
    }
  }
  const joinedTeamCards = teamCards.join("");
  return `${topHTML}${joinedTeamCards}${bottomHTML}`;
}

module.exports = generatePage;

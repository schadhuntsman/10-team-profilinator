const teamProfilinate = (teamPrint) => {
  
  const documentHtml = [];
  
  const managerPageCreator = manager => {
    let htmlManager = `
    <div class="card">
    <div class="card-display">
    ${manager.name}
    <i class="manager"</div>
    <ul class="list">
    <li class="list-element">ID: ${manager.id}</li>
    <li class="list-element">Email: <h3 id="email"><a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-element">Office Number: ${manager.officeNumber}</li>
    </ul>
    </div>
    `
    documentHtml.push(htmlManager);
}
const engineerPageCreator = engineer => {
  let htmlEngineer = `
  <div class="card">
  <div class="card-display">
  ${engineer.name}
  <i class="engineer"</div>
  <ul class="list">
  <li class="list-element">ID: ${engineer.id}</li>
  <li class="list-element">Email: <h3 id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
  <li class="list-element">Github Username: <a target="_blank" href="https://github.com/${engineer.gitHubUsername}">${engineer.gi<tHubUsername}</a></li>
  </ul>
  </div>
  `;
  documentHtml.push(htmlEngineer);
}
const internPageCreator = intern => {
  let htmlIntern = `
  <div class="card">
  <div class="card-display">
  ${intern.name}
  <i class="intern"</div>
  <ul class="list">
  <li class="list-element">ID: ${intern.id}</li>
  <li class="list-element">Email: <h3 id="email"><a href="mailto:${intern.email}">${intern.email}</a></li>
  <li class="list-element">School: ${intern.school}</li>
  </ul>
  </div>
  `;
  documentHtml.push(htmlIntern);
}

    for (let i = 0; i < teamPrint.length; i++) {
        if (teamPrint[i].getRole() === 'Intern'){
        internPageCreator(teamPrint[i]);
        }
        if (teamPrint[i].getRole() === 'Engineer'){
          engineerPageCreator(teamPrint[i]);
        }
        if (teamPrint[i].getRole() === 'Manager'){
          managerPageCreator(teamPrint[i]);
        }
    return documentHtml.join('');
}
}
module.exports = teamPrint => {

return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../src/dist/style.css" />
  <title>Team Profilinator</title>
</head>

<body>
<header>
<h1>Team Profilinator</h1>
</header>

<main>
 ${teamProfilinate(teamPrint)}
</main>

</body>
</html>
`;
}

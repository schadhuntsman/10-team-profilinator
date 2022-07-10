const teamProfilinate = (teamPrint) => {
  console.log(teamPrint);
  const html = [];

  const managerPageCreator = manager => {
    let htmlManager = `
    <div class="card"style="width 18rem;> 
      <div class="card-display">
      ${manager.name}
      <i class='fas fa-glasses' style='font-size:36px'></i>Manager</div>
      <ul class="list">
      <li class="list-element">ID: ${manager.id}</li>
      <li class="list-element">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
      <li class="list-element">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
    `;
    html.push(htmlManager);
  }
  const engineerPageCreator = engineer => {
      let htmlEngineer = `
        <div class="card"style="width 18rem;>
        <div class="card-display">
  ${engineer.name}
    <i class='fas fa-bahai' style='font-size:24px'></i>Engineer</div>
    <div>
    <ul class="list">
        <li class="list-element">ID: ${engineer.id}</li>
        <li class="list-element">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-element">Github Username: <a target="_blank" href="https://github.com/${engineer.gitHubUsername}">${engineer.gitHubUsername}</a></li>
      </ul>
      </div>
    </div>
  `;
    html.push(htmlEngineer);
  }
  const internPageCreator = intern => {
    let htmlIntern = `
        <div class="card"style="width 18rem;>
          <div class="card-display">
          ${intern.name}
          <i class="fas fa-graduation-cap</i> style='font-size:24px'>Intern</div>
            <ul class="list">
              <li class="list-element">ID: ${intern.id}</li>
              <li class="list-element">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
              <li class="list-element">School: ${intern.school}</li>
            </ul>
        </div>
  `;
    html.push(htmlIntern);
  }

  for (let i = 0; i < teamPrint.length; i++) {

    if (teamPrint[i].getRole() === 'Manager') {
      managerPageCreator(teamPrint[i]);
    }
    if (teamPrint[i].getRole() === 'Engineer') {
      engineerPageCreator(teamPrint[i]);
    }
    if (teamPrint[i].getRole() === 'Intern') {
      internPageCreator(teamPrint[i]);
    }
  }
  return html.join('');
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="../src/dist/style.css"/>
  <title>Team Profilinator</title>
</head>

<body>
<input type="button" value="Button1" class="btn btn-primary"/>
<input type="button" value="Button2" class="btn btn-warning"/>
<header>
<h1>Team Profilinator</h1>
</header>

<main>
 ${teamProfilinate(teamPrint)}
</main>

<script src="jquery/jquery.min.js" style="text/javasciptt"></script>
<script src="bootstrap/js/bootstrap.min.js" style="text/javasciptt"></script>
</body>
</html>
`;
}

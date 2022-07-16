const teamProfilinate = (teamPrint) => {
  console.log(teamPrint);
  const html = [];
  const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./dist/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };

  const managerPageCreator = manager => {
    let htmlManager = `
    <div class="grid-item card" style="width: 18rem";>
    <div class="card-body">
    <h5 class="card-header">${manager.name}</h5>
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
      <div class="grid-item card" style="width: 18rem";>
      <div class="card-body">
      <h5 class="card-header">${engineer.name}</h5>
      <i class='fas fa-bahai'></i>Engineer</div>
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
        <div class="grid-item card" style="width: 18rem;">
          <div class="card-header">
          ${intern.name} <br/>         
          <i class="fas fa-graduation-cap"></i>Intern</div>
          <ul class="card-list">
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
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="../dist/style2.css"> 
  <title>Team Profilinator</title>
</head>

<body>
<header class="grid-container">
<h1>Team Profilinator</h1>
</header>

<main>
 ${teamProfilinate(teamPrint)}
</main>


<script src="bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
`;
}

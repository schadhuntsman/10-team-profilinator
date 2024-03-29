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
    <div class="card">
    <div class="card-header">
      <span class="material-icons">emoji_food_beverage</span>Manager</div>
      <div class="name"> ${manager.name}</div> <br/>    

    <ul class="list">
      <li>ID: ${manager.id}</li>
      <li>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
      <li>Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
    `;
    html.push(htmlManager);
  }
  const engineerPageCreator = engineer => {
      let htmlEngineer = `
      </div>
      <div class="card">
      <div class="card-header">
      <span class="material-icons">rocket_launch</span>EngineerName</div>
      <div class="name"> ${engineer.name}</div> <br/> 
     
      <ul class="list">
          <li>ID: ${engineer.id}</li>
          <li>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
          <li>Github Username: <a target="_blank" href="https://github.com/${engineer.gitHubUsername}">${engineer.gitHubUsername}</a></li>
      </ul>
      </div>
    </div>
  `;
    html.push(htmlEngineer);
  }
  const internPageCreator = intern => {
    let htmlIntern = `
    <div class="card">
    <div class="card-header">
      <span class="material-icons">import_contacts</span>Intern</div>
    <div class="name"> ${intern.name}</div> <br/>    

    <ul class="list">
        <li>ID: ${intern.id}</li>
        <li>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li>School: ${intern.school}</li>
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
    <link rel="stylesheet" href="../../src/dist/style.css"> 
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">
    
    <title>Team Profilinator</title>
  </head>

<body>
<header>
<p> </p>
<h1>Team Profilinator</h1>
<p> </p>
</header>



<main class="container">
 ${teamProfilinate(teamPrint)}
</main>



</body>
</html>
`;
}

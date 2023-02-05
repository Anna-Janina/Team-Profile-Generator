// create the team
function createTeam(team) {

    // create manager
    function createManager(manager) {
        return `
        <div class="card employee-card" style="width: 30%">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: <a href="mailto:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
            </ul>
        </div>
    </div>
        `
    }

    // create engineer
    function createEngineer(engineer) {
        return `
        <div class="card employee-card" style="width: 30%">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Office number: <a href="mailto:${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `
    }

    // create intern
    function createIntern(intern) {
        return `
        <div class="card employee-card" style="width: 30%">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">Office number: <a href="mailto:${intern.getSchool()}">${intern.getSchool()}</a></li>
            </ul>
        </div>
    </div>
        `
    }


    let htmlCode = []

    // manager card
    htmlCode.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        )

    // engineer card
    htmlCode.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        )

    // intern card
    htmlCode.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        )
    
        return htmlCode.join('')
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    
      <nav class="nav justify-content-center bg-danger py-5">
          <div class="navbar text-white text-center text-bold fs-1">
            <h1>My Team</h1> 
          </div>
      </nav>
    
      <div class="d-flex justify-content-around flex-row">
    ${createTeam(team)}

    </body>
    </html>
    `
}
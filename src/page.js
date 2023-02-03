function createTeam(team) {
    // create manager
    function createManager(manager) {
        return `
        <div>
        <h1>
        ${manager.getName()}
        </h1>
        <h1>
        ${manager.getRole()}
        </h1>
        </div>
        `
    }
    // create engineer

    // create intern

    let htmlCode = []

    // need one of these for each role
    htmlCode.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
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
${createTeam(team)}

</body>
    </html>
    `
}
//adding html strings and variables dynamically to create html page with user input
const headHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700;800&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Team Portfolio</title>
</head>
<body>
    <header style="background-color: blue;">
        <h1 class="text-center" style='padding: 100px; color: azure;'>Team Profiles</h1>
    </header>
    <main class='container'>
        <div class="row">`

const endHTML = `
        </div>
    </main>

</body>
</html>
`

function createProfiles(teamMember) {
    if (teamMember.school) {
        var role = 'Intern'
        var other = `School: ${teamMember.school}`
        var extra = ''
        var icon = 'fas fa-user-graduate'
    } else if (teamMember.office) {
        var role = 'Manager'
        var other = `Office Number: ${teamMember.office}`
        var extra = ''
        var icon = 'fas fa-medal'
    } else if (teamMember.github) {
        var role = 'Engineer'
        var other = `Github: ${teamMember.github}`
        var extra= `https://github.com/${teamMember.github}" target="_blank`
        var icon = 'fas fa-pencil-ruler'
    }

    var id = teamMember.id
    var name = teamMember.name
    var email = teamMember.email

    const card = `
                <div class="card text-center col-lg-6 mb-4 mx-auto" style="width: 18rem; margin-right: 10px;">
                    <div class="card-body">
                        <h5 class="card-title" style="background-color: lightskyblue; padding:10px; margin: 0px;">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted" style="background-color: lightskyblue; padding:10px"><i class='${icon}'> </i>${role}</h6>
                        <p class="card-text" style='border:.25px solid rgb(201, 216, 231); padding: 10px'>ID: ${id}</p>
                        <ul style="list-style-type: none; margin-left: -15%">
                            <li style=" margin-bottom: 15px;border:.25px solid rgb(201, 216, 231); padding: 10px">
                                <a href="mailto:${email}" class="card-link">Email: ${email}</a>
                            </li>
                            <li style="border:.25px solid rgb(201, 216, 231); padding: 10px">
                                <a href="${extra}" class="card-link" style='color: black; text-decoration: none;'>${other}</a>
                            </li>
                        </ul>
                    </div>
                </div>`
    return card
}

module.exports = {createProfiles, headHTML, endHTML}


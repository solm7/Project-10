// Function to create Team Cards, Bootstrap framework
function generateTeamCards(teamInformation) {
  let teamCards = [];

  for (let i = 0; i < teamInformation.length; i++) {
    let details;
    switch (teamInformation[i].getRole()) {
      case "Engineer":
        details = `Github: <a href="https://www.github.com/${teamInformation[
          i
        ].getGithub()}" target="_blank" rel="noopener noreferrer">@${teamArray[
          i
        ].getGithub()}</a>`;
        break;

      case "Intern":
        details = `Education: ${teamInformation[i].getUniversity()}`;
        break;

      case "Employee":
        details = `Office Number: ${teamInformation[i].office}`;
        break;

      default:
        console.log(" Information is invalid. ");
    }
    teamCards.push(`
        <div class="card shadow mx-2 my-3" style="width: 18rem;"> 
        <img src="./assets/images/${teamInformation[
          i
        ].getRole()}.svg" alt="${teamInformation[i].getRole()} svg graphic">
            <ul class="list-group">
                <li class="list-group-item h2 font-weight-bold text-center text-white bg-dark">${teamInformation[
                  i
                ].getName()}</li>
                <li class="list-group-item">ID: ${teamInformation[i].id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${
                  teamInformation[i].email
                }">${teamInformation[i].email}</a> </li>
                <li class="list-group-item">${details}</li>
            </ul>
        </div>`);
  }
  return teamCards.join("");
}

// Generate overall HTML and insert Generated Team Cards
function generateHTMLCode(teamInformation) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
            <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico">
            <title>My Team Roster</title>
        </head>
        
        <body>
            <main>
                <section class="py-5 text-center container-fluid bg-primary">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-bold text-light">Your Team Roster</h1>
                            <p class="lead text-light">Welcome Manager! Below is your current Roster!</p>
                        </div>
                    </div>
                </section>
                <section class="container">
                    <div class="container-fluid row py-5 justify-content-center">
                    ${generateTeamCards(teamInformation)}
                    </div>
                </section>
            </main>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    </html>
    `;
}

// Export generateHTMLCode function
module.exports = generateHTMLCode;

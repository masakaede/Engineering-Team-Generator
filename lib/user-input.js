const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const roleOptions = [
    "Manager",
    "Engineer",
    "Intern",
    "Exit"
]

var role = {}
function roleConfirmation() {
    return inquirer.prompt([
        {
            name: "roleOption",
            type: "list",
            message: "What's the employee's role?",
            choices: roleOptions
        }
    ])
};

function employeeInfo() {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter employee's name"
        },
        {
            name: "id",
            type: "input",
            message: "Please enter employee's id"
        },
        {
            name: "email",
            type: "input",
            message: "Please enter email address"
        }
    ])
};

function managerInfo() {
    return inquirer.prompt([
        {
            name: "officeNumber",
            type: "input",
            message: "Please enter office number"
        }
    ])
};

function engineerInfo() {
    return inquirer.prompt([
        {
            name: "github",
            type: "input",
            message: "Please enter employee's github username"
        }
    ])
};

function internInfo() {
    return inquirer.prompt([
        {
            name: "school",
            type: "input",
            message: "Please enter employee's school"
        }
    ])
};

async function teamData() {
    var teamInput = true;
    const team = [];
    while (teamInput) {
        const { roleOption } = await roleConfirmation();

        if (roleOption === "Manager") {
            const { name: managerName, id: managerId, email: managerEmail } = await employeeInfo()
            const { officeNumber } = await managerInfo();
            const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
            team.push(manager);
        } else if (roleOption === "Engineer") {
            const { name: engineerName, id: engineerId, email: engineerEmail } = await employeeInfo()
            const { github } = await engineerInfo();
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, github);
            team.push(engineer);
        } else if (roleOption === "Intern") {
            const { name: internName, id: internId, email: internEmail } = await employeeInfo()
            const { school } = await internInfo();
            const intern = new Intern(internName, internId, internEmail, school);
            team.push(intern);
        } else {
            teamInput = false;
        }
    }
    return team;
}


module.exports = {
    teamData: teamData,
}
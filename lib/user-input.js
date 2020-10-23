const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

//role confirmation
function roleConfirmation() {
    return inquirer.prompt([
        {
            name: "roleOption",
            type: "list",
            message: "What's the employee's role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Exit"
            ]
        }
    ])
};

//text validation
function textValidation(input) {
    if (input === "") {
        console.log(" Please enter a valid text!");
        return false;
    }
    return true;
};

//email validation
function emailValidation(input) {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(mailformat)) {
        return true;
    } else {
        console.log(" Please enter a valid email address!")
        return false;
    }
}

//employee information
function employeeInfo() {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please enter employee's name",
            validate: textValidation
        },
        {
            name: "id",
            type: "input",
            message: "Please enter employee's id",
            validate: textValidation
        },
        {
            name: "email",
            type: "input",
            message: "Please enter email address",
            validate: emailValidation
        }
    ])
};

//manager information
function managerInfo() {
    return inquirer.prompt([
        {
            name: "officeNumber",
            type: "input",
            message: "Please enter office number",
            validate: textValidation
        }
    ])
};

//engineer information
function engineerInfo() {
    return inquirer.prompt([
        {
            name: "github",
            type: "input",
            message: "Please enter employee's github username",
            validate: textValidation
        }
    ])
};

//intern information
function internInfo() {
    return inquirer.prompt([
        {
            name: "school",
            type: "input",
            message: "Please enter employee's school",
            validate: textValidation
        }
    ])
};

//prompt for input
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
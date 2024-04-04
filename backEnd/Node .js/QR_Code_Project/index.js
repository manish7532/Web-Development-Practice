import fs from 'fs'
import qr from 'qr-image'
import inquirer from 'inquirer'

inquirer.prompt([
    {
        "message": "Type your URL",
        "name": "URL"
    }
])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url,{type:"png"});
        qr_svg.pipe(fs.createWriteStream(`${url}.png`));
    })
    .catch((err) => {
        if (err.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("An Error Occured :", err)
        } else {
            // Something else went wrong
        }
    })
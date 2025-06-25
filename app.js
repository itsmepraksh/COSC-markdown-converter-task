const fs = require('fs')
const marked = require('marked')

const inputFilePath = 'input.md' // ITS INPUT FILE THAT I'M PROVIDING 
const outputFilePath = 'output.html' //ITS OUTPUT FILE WHICH I WILL GET IN THE FOLDERS


try{

    //SYNCHRONOUS METHOD TO READ THE MD FILE AND ENCODING
    const fileContent = fs.readFileSync(inputFilePath,'utf8');
    console.log('--- File Content ---');

    //HERE PRINTING THE CONTENT OF THE FILE
    console.log(fileContent);
    console.log('--------------------');

    //CONVERTING MD TO HTML
    const htmlContent = marked.parse(fileContent)
    console.log('\n---Converted HTML Content ---')
    console.log(htmlContent)
    console.log('--------------------');

    //SYNCHRONOUS METHOD TO WRITE/CREATE A FILE AND ENDCODING
    fs.writeFileSync(outputFilePath,htmlContent,'utf8')

    console.log(`\nFile sucessfully read and converted to HTML and saved to ${outputFilePath}!`);


}catch(error){
    console.error('Error reading file:',error.message)
}
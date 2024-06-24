import inquirer from 'inquirer';

 async function main() {
    const input = await inquirer.prompt([
        {
            name: "name1",
            type: "input",
            message: "Write the sentence for count the words:"
        }
    ]);

    // Trim and split the input to count words
    const counting = input.name1.trim().split(" ");
    console.log(counting); 
    console.log(`Total words: ${counting.length}`);
}

main();

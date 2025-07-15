let i = 0;
let todo = [];
let task = 'new';


while (task !== 'quit') {
    task = prompt("What would you like to do?");
    if (task === 'new') {
        todo[i++] = prompt("Enter new todo:");
        console.log(`${todo[i - 1]} added to list`);
    } else if (task === 'list') {
        console.log('**********');
        let count = 1;
        for (let to of todo){
            console.log(`${count++}: ${to}`);
        }
        console.log('**********');
    } else if (task === 'delete') {
        let k = prompt("Enter the task # of todo to remove: ");
        console.log(`${todo.splice(k-1, 1)} has been removed!`);
        i--;
    } else console.log('Invalid input. Please try again!')
}

console.log('Thanks for using todo! Bye bye. :)');
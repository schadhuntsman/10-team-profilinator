const Manager = require('../lib/Manager');
const Manager = new Manager('Frank', '343', 'frankocon@gmail.com', '117');

test('check if the constructor are displayed', () => {
    expect(manager.name).toBE('Frank');
    expect(manager.id).toBE('343');
    expect(manager.email).toBE('frankocon@gmail.com');
    expect(manager.officeNumber).toBE('117');
}); 


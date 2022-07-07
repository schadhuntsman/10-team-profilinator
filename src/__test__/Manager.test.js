const Manager = require('../src/lib/Manager');
const manager = new Manager('Frank', '343', 'frankocon@gmail.com', '117');

test('check if info from the constructor are displayed', () => {
    expect(manager.name).toBe('Frank');
    expect(manager.id).toBe('343');
    expect(manager.email).toBe('frankocon@gmail.com');
    expect(manager.officeNumber).toBe('117');
}); 

test('to see if we can get name with getName()', () => {
    expect(manager.getName()).toBe('Frank');
});

test('try to get manager id through the getId()', () => {
    expect(manager.getId()).toBe('343');
});

test('try to get the email with getEmail()', () => {
    expect(manager.getEmail()).toBe('frankocon@gmail.com');
});

test('try to get office number with getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('117');
})

test('try to get role with getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
})



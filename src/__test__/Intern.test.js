const Intern = require('../lib/Intern');
const intern = new Intern('Thing3', '333', 'Thingmanji@gmail.com');

test('check if info from the constructor are displayed', () => {
    expect(intern.name).toBe('Thing3');
    expect(intern.id).toBe('333');
    expect(intern.email).toBe('Thingmanji@gmail.com');
}); 

test('to see if we can get name with getName()', () => {
    expect(intern.getName()).toBe('Thing3');
});

test('try to get intern id through the getId()', () => {
    expect(intern.getId()).toBe('333');
});

test('try to get the email with getEmail()', () => {
    expect(intern.getEmail()).toBe('Thingmanji@gmail.com');
});

test('try to get role with getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
})



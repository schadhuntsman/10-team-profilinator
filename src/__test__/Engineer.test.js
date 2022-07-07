const Engineer = require('../src/lib/Engineer');
const engineer = new Engineer('Nerdelbaum Frink Jr II', '777', 'nerdamajig@gmail.com');

test('check if info from the engineer constructor are displayed', () => {
    expect(engineer.name).toBe('Nerdelbaum Frink Jr II');
    expect(engineer.id).toBe('777');
    expect(engineer.email).toBe('nerdamajig@gmail.com');
}); 

test('to see if we can get name with getName() from engineer', () => {
    expect(engineer.getName()).toBe('Nerdelbaum Frink Jr II');
});

test('try to get engineer id through the getId()', () => {
    expect(engineer.getId()).toBe('777');
});

test('try to get the email with getEmail()', () => {
    expect(engineer.getEmail()).toBe('nerdamajig@gmail.com');
});

test('try to get role with getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
})
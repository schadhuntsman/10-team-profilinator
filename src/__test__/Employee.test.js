const Employee = require('../lib/Employee');
const employee = new Employee('Fredfirst Von Chadford-Socks XVII', '666', 'freddybadelly@gmail.com');

test("test to see if we can get the employee info to show", () => {
    expect(employee.name).toBe('Fredfirst Von Chadford-Socks XVII');
    expect(employee.id).toBe('666');
    expect(employee.email).toBe('freddybadelly@gmail.com');
});

test('to see if we can use get the name from the getName()', () => {
    expect(employee.getName()).toBe('Fredfirst Von Chadford-Socks XVII');

})

test('try to get the email with getEmail()', () => {
    expect(employee.getEmail()).toBe('freddybadelly@gmail.com')
});

test('try to get employee id through the getId()', () => {
    expect(employee.getId).toBe(666);
});

test('try to get role with getRole()', () => {
    expect(employee.getRole).toBe('Employee')
})
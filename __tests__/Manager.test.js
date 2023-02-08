// Import engineer class
const Manager = require('../lib/Manager');

// test the class works 
test('a new employee object can be created from the class', () => {
    const manager = new Manager();
    expect(typeof manager).toBe('object')
})

// test we can add a name
test('a name can be added', () => {
    const name = 'Andy';
    const manager = new Manager(name)
    expect(manager.name).toBe('Andy')
})

// test we can add id 
test('an idd can be added', () => {
    const name = 'Andy';
    const id = '323456';
    const manager = new Manager(name, id)
    expect(manager.id).toBe(id)
})

// test we can add email
test('an email can be added', () => {
    const name = 'Andy';
    const id = '323456';
    const email = 'andy@andy.com'
    const manager = new Manager(name, id, email)
    expect(manager.email).toBe(email)
})

// test we can add office number
test('office number can be added', () => {
    const name = 'Andy';
    const id = '323456';
    const email = 'andy@andy.com'
    const officeNumber = '0725486218'
    const manager = new Manager(name, id, email, officeNumber)
    expect(manager.officeNumber).toBe(officeNumber)
})

// test name method
test('name method gets getName', () => {
    const test = 'Andy';
    const manager = new Manager(test)

    expect(manager.getName()).toBe(test)
})

// test id method
test('id method gets getId', () => {
    const test = 'Andy';
    const id = '323456';
    const manager = new Manager(test, id)

    expect(manager.getId()).toBe(id)
})

// test email method
test('email method gets getEmail', () => {
    const test = 'Andy';
    const id = '323456';
    const email = 'andy@andy.com'
    const manager = new Manager(test, id, email)

    expect(manager.getEmail()).toBe(email)
})

// test office number method
test('office number method gets getOfficeNumber', () => {
    const test = 'Andy';
    const id = '323456';
    const email = 'andy@andy.com'
    const officeNumber = '0725486218'
    const manager = new Manager(test, id, email, officeNumber)

    expect(manager.getOfficeNumber()).toBe(officeNumber)
})
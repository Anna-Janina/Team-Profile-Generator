// Import engineer class
const Engineer = require('../lib/Engineer');

// test the class works 
test('a new employee object can be created from the class', () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe('object')
})

// test we can add a name
test('a name can be added', () => {
    const name = 'Lola';
    const engineer = new Engineer(name)
    expect(engineer.name).toBe('Lola')
})

// test we can add id 
test('an idd can be added', () => {
    const name = 'Lola';
    const id = '223456';
    const engineer = new Engineer(name, id)
    expect(engineer.id).toBe(id)
})

// test we can add email
test('an email can be added', () => {
    const name = 'Lola';
    const id = '223456';
    const email = 'lola@lola.com'
    const engineer = new Engineer(name, id, email)
    expect(engineer.email).toBe(email)
})

// test we can add github
test('github can be added', () => {
    const name = 'Lola';
    const id = '223456';
    const email = 'lola@lola.com'
    const github = 'Lola-loa'
    const engineer = new Engineer(name, id, email, github)
    expect(engineer.github).toBe(github)
})

// test name method
test('name method gets getName', () => {
    const test = 'Lola';
    const engineer = new Engineer(test)

    expect(engineer.getName()).toBe(test)
})

// test id method
test('id method gets getId', () => {
    const test = 'Lola';
    const id = '223456';
    const engineer = new Engineer(test, id)

    expect(engineer.getId()).toBe(id)
})

// test email method
test('email method gets getEmail', () => {
    const test = 'Lola';
    const id = '223456';
    const email = 'lola@lola.com'
    const engineer = new Engineer(test, id, email)

    expect(engineer.getEmail()).toBe(email)
})

// test github method
test('github method gets getGithub', () => {
    const test = 'Lola';
    const id = '223456';
    const email = 'lola@lola.com'
    const github = 'Lola-loa'
    const engineer = new Engineer(test, id, email, github)

    expect(engineer.getGithub()).toBe(github)
})
// Import intern class
const Intern = require('../lib/Intern');

// test the class works 
test('a new employee object can be created from the class', () => {
    const intern = new Intern();
    expect(typeof intern).toBe('object')
})

// test we can add a name
test('a name can be added', () => {
    const name = 'Lea';
    const intern = new Intern(name)
    expect(intern.name).toBe('Lea')
})

// test we can add id 
test('an idd can be added', () => {
    const name = 'Lea';
    const id = '423456';
    const intern = new Intern(name, id)
    expect(intern.id).toBe(id)
})

// test we can add email
test('an email can be added', () => {
    const name = 'Lea';
    const id = '423456';
    const email = 'lea@lea.com'
    const intern = new Intern(name, id, email)
    expect(intern.email).toBe(email)
})

// test we can add school
test('school can be added', () => {
    const name = 'Lea';
    const id = '423456';
    const email = 'lea@lea.com'
    const school = 'Melbourne Uni'
    const intern = new Intern(name, id, email, school)
    expect(intern.school).toBe(school)
})

// test name method
test('name method gets getName', () => {
    const test = 'Lea';
    const intern = new Intern(test)

    expect(intern.getName()).toBe(test)
})

// test id method
test('id method gets getId', () => {
    const test = 'Lea';
    const id = '423456';
    const intern = new Intern(test, id)

    expect(intern.getId()).toBe(id)
})

// test email method
test('email method gets getEmail', () => {
    const test = 'Lea';
    const id = '423456';
    const email = 'lea@lea.com'
    const intern = new Intern(test, id, email)

    expect(intern.getEmail()).toBe(email)
})

// test school method
test('school method gets getSchool', () => {
    const test = 'Lea';
    const id = '423456';
    const email = 'lea@lea.com'
    const school = '0725486218'
    const intern = new Intern(test, id, email, school)

    expect(intern.getSchool()).toBe(school)
})
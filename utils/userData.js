import { faker } from '@faker-js/faker';

class UserData {
    getFirstName() {
        return faker.person.firstName();
    }

    getLastName() {
        return faker.person.lastName();
    }

    getEmail(firstName = null, lastName = null) {
        const fname = firstName || faker.person.firstName();
        const lname = lastName || faker.person.lastName();
        return faker.internet.email({ firstName: fname, lastName: lname });
    }

    getPassword(options = {}) {
        const defaults = {
            length: 12,
            memorable: false
        };
        return faker.internet.password({ ...defaults, ...options });
    }

    getUser() {
        const firstName = this.getFirstName();
        const lastName = this.getLastName();
        
        return {
            firstName,
            lastName,
            email: this.getEmail(firstName, lastName),
            password: this.getPassword()
        };
    }

    getUsername() {
        return `${faker.person.firstName()}${faker.string.numeric(2)}`;
    }
}

export default new UserData();
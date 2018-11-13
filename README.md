# Node.js project
Node.js project example. Environment configured using Vagrant and Ansible. 

## Getting Started 
These instructions will let you know how to setting your local environment up for development and testing purposes. 

### Prerequisites
Install [Virtualbox](https://www.virtualbox.org) and [Vagrant](https://www.vagrantup.com).
```
Virtualbox ^5.1.12
Vagrant ^2.2.0 
```

### Boot the virtual machines
Use Vagrant to boot the virtual machines. 
```bash
vagrant up
```
After running the above command, two virtual machines will be configured:
- nodejs: server with node.js.\
  Password: vagrant          
- db: virtual machine with mongodb database.

Destroy the virtual machines: 
```bash
vagrant destroy
```

SSH into the virtual machines:
```bash
vagrant ssh nodejs
vagrant ssh db
```

### Run the app
SSH into the nodejs machine: 
```bash
vagrant ssh nodejs
```
Install dependencies: 
```bash
npm install
```
Run the app: 
```bash
npm run start
```

## Running the test
SSH into the nodejs machine: 
```bash
vagrant ssh nodejs
```

Run the tests: 
```bash
npm run test
```

## License
[MIT](https://github.com/navarrojoseluis/node_api_web/blob/development/LICENSE)
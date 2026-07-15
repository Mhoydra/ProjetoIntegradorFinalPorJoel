# Pré Requisitos para não ocorrer explosões:

Intalar: 

- Node.js
- MySQL

# Comandos: 

## Frontend(bash):
    
```bash

npm install

```

## Backend(Bash):

```bash

npm install;
npm init -y;
npm install express cors dotenv bcrypt mysql2;
npm install -D nodemon
npm run dev;

```

## Extras(Bash):

- Windows (CMD/PowerShell):

```bash
netstat -ano | findstr :3000
tasklist /FI "PID eq 12345"
```

- Linux:

```bash
ss -ltnp | grep :3000
# alternativa: sudo lsof -i :3000
```

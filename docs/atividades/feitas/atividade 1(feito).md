1. Abra a raiz do projeto do grupo. (
    feito
);
2. Identifique se existe React separado, pasta pública ou ambos. (
    tem
);
3. Localize package.json do front-end e/ou back-end. (
    - frontend: /projeto-integrador/frontend-api/pachage.json
    - backend: /projeto-integrador/backend-api/package.json
);
4. Liste os scripts: dev, build, start ou equivalentes. (
    - front -> "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "oxlint",
        "preview": "vite preview"
    },
    - back -> "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "node server.js"
    },
);
5. Lista de portas locais usadas por front-end, API e MySQL. (
    - front -> 5173;
    - api/backend -> 3000
    - Mysql -> 3306
);
6. Liste as variáveis ​​de ambiente já usadas ou possíveis.(
    - DB_HOST=localhost
    - DB_USER=teste
    - DB_PASSWORD=teste
    - DB_NAME=biblioversoDB
    - DB_PORT=3306
    - JWT_SECRET=chave_super_secreta_mesmo
    - JWT_EXPIRES_IN=1h
    - PORT=3000
);
7. Registre se há uploads ou arquivos que precisam permanecer. (
    BiblioversoDB.sql, 
    .env.example,
    assets(no futuro)
    docs e readme.md
)
8. Escreva tudo no arquivo markdown em anexo

- sem ficheiro no arquivo -
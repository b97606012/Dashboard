Steps to start the project


1. Frontend folder(Dashboard folder)
# `npm install`
install all dependency from package.json

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\



2. Backend folder(server folder)

# `npm install`
install all dependency from package.json

## `npm run configure` (initiate PostgreSQL DB)
create the PostgreSQL Database, with all the mock data (Email, password, dashboard)

if wish to create new role with password for PostgresDB, can use below comment after db created

CREATE USER node_user with SUPERUSER PASSWORD 'node_password'

password can be update inside 'configuredb.sh' file

### `npm start`

Runs the server on [http://localhost:4000]
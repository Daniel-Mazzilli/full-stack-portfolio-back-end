DROP DATABASE IF EXISTS travel_dev;
CREATE DATABASE travel_dev;

\c travel_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    home_country TEXT NOT NULL
);

CREATE TABLE trips (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    when TEXT NOT NULL,
    country TEXT NOT NULL,
    go_back BOOL NOT NULL,
    image TEXT,
    description TEXT,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);
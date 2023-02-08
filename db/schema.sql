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
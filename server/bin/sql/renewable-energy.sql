CREATE TABLE users(
    id serial,
    email character varying(50),
    passwordHash character varying(255)
);

CREATE TABLE energy(
    id serial,
    usage int,
    asDate bigint
);

CREATE TABLE energysum(
    id serial,
    totalChargedEnergy int,
    totalRevenue int,
    totalChargeSession int,
    periods int
);

INSERT INTO users(email,passwordHash)
VALUES
('super_admin@test.com','$2b$10$jBMHb0PUoOJN1QcOPUzVTuL1NZJKIXgk8XK3sIWZfNFvzPXUhP8m6');

INSERT INTO energy(usage, asDate)
VALUES
(81, 1677427200000),
(95, 1677513600000),
(84, 1677600000000),
(79, 1677686400000),
(96, 1677772800000),
(108, 1677859200000),
(87, 1677945600000);

INSERT INTO energysum(totalChargedEnergy, totalRevenue, totalChargeSession, periods)
VALUES
(115, 93.8, 9.5, 7),
(492, 401, 40, 30),
(5988, 4888, 492, 365);


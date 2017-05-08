--INSTALL REQUIRED POSTGRES DB EXTENSIONS
CREATE EXTENSION IF NOT EXISTS cube;
CREATE EXTENSION IF NOT EXISTS earthdistance;

--DROP EXISTING SCHEMA OBJECTS
DROP TABLE IF EXISTS PUBLIC.PROFILE;
DROP TABLE IF EXISTS PUBLIC.MESSAGE;

--CREATE PROFILE TABLE
CREATE TABLE PUBLIC.PROFILE
(
    ID BIGSERIAL PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    LASTNAME TEXT NOT NULL,
    EMAIL TEXT NOT NULL,
    AGE INTEGER NOT NULL,
    BIO TEXT NOT NULL,
    PHOTO TEXT NOT NULL
);

--CREATE MESSAGE TABLE
CREATE TABLE PUBLIC.MESSAGE
(
    ID BIGSERIAL PRIMARY KEY NOT NULL,
    PROFILEID BIGINT REFERENCES PROFILE(ID) ON DELETE CASCADE,
    DATE BIGINT NOT NULL,
    VALUE TEXT NOT NULL,
    LIKECOUNTER BIGINT DEFAULT 0,
    LOVECOUNTER BIGINT DEFAULT 0,
    FUNCOUNTER BIGINT DEFAULT 0,
    WOWCOUNTER BIGINT DEFAULT 0,
    SADCOUNTER BIGINT DEFAULT 0,
    ANGRYCOUNTER BIGINT DEFAULT 0,
    REPORTCOUNTER BIGINT DEFAULT 0
);

--CREATE INDEXES
CREATE UNIQUE INDEX PROFILE_ID_IDX ON PROFILE (ID);
CREATE UNIQUE INDEX MESSAGE_ID_IDX ON MESSAGE (ID);
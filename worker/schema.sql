-- زهرة الكتان: anonymous survey responses. No name, email or IP is ever stored here.
CREATE TABLE IF NOT EXISTS responses (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT    NOT NULL,           -- ISO time (UTC)
  day        TEXT    NOT NULL,           -- calendar day in Libya time, YYYY-MM-DD
  score      INTEGER NOT NULL,           -- recomputed on the server, 0-8
  age  INTEGER, city INTEGER,
  k0 INTEGER, k1 INTEGER, k2 INTEGER, k3 INTEGER, k4 INTEGER, k5 INTEGER, k6 INTEGER, k7 INTEGER,
  p1 INTEGER, p1b INTEGER, p2 INTEGER, p2b INTEGER, p3 INTEGER, p4 INTEGER,
  s1 INTEGER, s1b TEXT NOT NULL DEFAULT '[]', s2 TEXT NOT NULL DEFAULT '[]', s3 INTEGER
);
CREATE INDEX IF NOT EXISTS responses_day ON responses(day);

-- Rate limiting: a salted hash of the IP and a 10-minute window. Rows older than a day are deleted.
CREATE TABLE IF NOT EXISTS rate (
  key    TEXT    PRIMARY KEY,            -- sha256(salt + ip) + ':' + window
  hits   INTEGER NOT NULL,
  window INTEGER NOT NULL
);

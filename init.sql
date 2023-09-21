-- User Table
CREATE TABLE profile (
  id UUID PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(1000) NOT NULL,
  status ENUM('online', 'offline', 'away', 'busy') NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Room Table
CREATE TABLE room (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Message Table
CREATE TABLE message (
  id UUID PRIMARY KEY,
  profile_id UUID NOT NULL,
  room_id UUID NOT NULL,
  body VARCHAR(1000) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (profile_id) REFERENCES profile (id),
  FOREIGN KEY (room_id) REFERENCES room (id)
);

-- User Status on a Room Table
CREATE TABLE profile_room (
  profile_id UUID NOT NULL,
  room_id UUID NOT NULL,
  status ENUM('pending', 'member', 'blocked', 'ignored', 'admin', 'owner') NOT NULL,
  PRIMARY KEY (profile_id, room_id),
  FOREIGN KEY (profile_id) REFERENCES profile (id),
  FOREIGN KEY (room_id) REFERENCES room (id)
);

CREATE TABLE profile_relation (
  from_profile_id UUID NOT NULL,
  to_profile_id UUID NOT NULL,
  status ENUM('pending', 'friend', 'blocked', 'ignored', 'requested') NOT NULL,
  PRIMARY KEY (from_profile_id, to_profile_id),
  FOREIGN KEY (from_profile_id) REFERENCES profile (id),
  FOREIGN KEY (to_profile_id) REFERENCES profile (id)
);

DELIMITER //
CREATE TRIGGER before_profile_insert
BEFORE INSERT ON profile
FOR EACH ROW
BEGIN
  SET NEW.id = UUID();
END;
//

CREATE TRIGGER profile_updated_at 
BEFORE UPDATE ON profile 
FOR EACH ROW 
BEGIN
  SET NEW.updated_at = NOW();
END;
//

CREATE TRIGGER before_room_insert
BEFORE INSERT ON room
FOR EACH ROW
BEGIN
  SET NEW.id = UUID();
END;
//

CREATE TRIGGER room_updated_at
BEFORE UPDATE ON room
FOR EACH ROW
BEGIN
  SET NEW.updated_at = NOW();
END;
//

CREATE TRIGGER before_message_insert
BEFORE INSERT ON message
FOR EACH ROW
BEGIN
  SET NEW.id = UUID();
END;
//

CREATE TRIGGER message_updated_at
BEFORE UPDATE ON message
FOR EACH ROW
BEGIN
  SET NEW.updated_at = NOW();
END;
//

DELIMITER ;

INSERT INTO profile (id, username, password, status) VALUES 
  (UUID(), 'John', 'f29afg7p24', 'online'),
  (UUID(), 'Jane', 'f29afg7p24', 'offline'),
  (UUID(), 'Bob', 'f29afg7p24', 'away'),
  (UUID(), 'Alice', 'f29afg7p24', 'busy'),
  (UUID(), 'Eve', 'f29afg7p24', 'online'),
  (UUID(), 'Mallory', 'f29afg7p24', 'offline'),
  (UUID(), 'Trent', 'f29afg7p24', 'away'),
  (UUID(), 'Carol', 'f29afg7p24', 'busy'),
  (UUID(), 'Dave', 'f29afg7p24', 'online'),
  (UUID(), 'Oscar', 'f29afg7p24', 'offline');

INSERT INTO room (id, name) VALUES
  (UUID(), 'General'),
  (UUID(), 'Random'),
  (UUID(), 'Music'),
  (UUID(), 'Programming'),
  (UUID(), 'Gaming');

INSERT INTO profile_room (profile_id, room_id, status) VALUES
(
  (SELECT id FROM profile WHERE username = 'John'),
  (SELECT id FROM room WHERE name = 'General'),
  'admin'
),
(
  (SELECT id FROM profile WHERE username = 'Jane'),
  (SELECT id FROM room WHERE name = 'General'),
  'member'
),
(
  (SELECT id FROM profile WHERE username = 'Bob'),
  (SELECT id FROM room WHERE name = 'Music'),
  'muted'
),
(
  (SELECT id FROM profile WHERE username = 'Alice'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'owner'
),
(
  (SELECT id FROM profile WHERE username = 'Eve'),
  (SELECT id FROM room WHERE name = 'Gaming'),
  'banned'
),
(
  (SELECT id FROM profile WHERE username = 'Mallory'),
  (SELECT id FROM room WHERE name = 'General'),
  'ignored'
),
(
  (SELECT id FROM profile WHERE username = 'Trent'),
  (SELECT id FROM room WHERE name = 'Random'),
  'admin'
),
(
  (SELECT id FROM profile WHERE username = 'Carol'),
  (SELECT id FROM room WHERE name = 'Music'),
  'member'
),
(
  (SELECT id FROM profile WHERE username = 'Dave'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'muted'
),
(
  (SELECT id FROM profile WHERE username = 'Oscar'),
  (SELECT id FROM room WHERE name = 'Gaming'),
  'owner'
);

INSERT INTO profile_relation (from_profile_id, to_profile_id, status) VALUES
(
  (SELECT id FROM profile WHERE username = 'John'),
  (SELECT id FROM profile WHERE username = 'Jane'),
  'friend'
),
(
  (SELECT id FROM profile WHERE username = 'Jane'),
  (SELECT id FROM profile WHERE username = 'Bob'),
  'requested'
),
(
  (SELECT id FROM profile WHERE username = 'Bob'),
  (SELECT id FROM profile WHERE username = 'Jane'),
  'pending'
),
(
  (SELECT id FROM profile WHERE username = 'Alice'),
  (SELECT id FROM profile WHERE username = 'Eve'),
  'friend'
),
(
  (SELECT id FROM profile WHERE username = 'Eve'),
  (SELECT id FROM profile WHERE username = 'Mallory'),
  'blocked'
),
(
  (SELECT id FROM profile WHERE username = 'Mallory'),
  (SELECT id FROM profile WHERE username = 'Trent'),
  'friend'
),
(
  (SELECT id FROM profile WHERE username = 'Trent'),
  (SELECT id FROM profile WHERE username = 'Carol'),
  'requested'
),
(
  (SELECT id FROM profile WHERE username = 'Carol'),
  (SELECT id FROM profile WHERE username = 'Dave'),
  'ignored'
),
(
  (SELECT id FROM profile WHERE username = 'Dave'),
  (SELECT id FROM profile WHERE username = 'Oscar'),
  'friend'
),
(
  (SELECT id FROM profile WHERE username = 'Oscar'),
  (SELECT id FROM profile WHERE username = 'John'),
  'blocked'
);



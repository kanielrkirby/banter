CREATE TABLE profile (
  id UUID PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(1000) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE room (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

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
  status ENUM('pending', 'friend', 'blocked', 'ignored') NOT NULL,
  PRIMARY KEY (from_profile_id, to_profile_id),
  FOREIGN KEY (from_profile_id) REFERENCES profile (id),
  FOREIGN KEY (to_profile_id) REFERENCES profile (id)
);

CREATE TABLE profile_status (
  profile_id UUID NOT NULL,
  status ENUM('online', 'offline', 'away', 'busy') NOT NULL,
  PRIMARY KEY (profile_id),
  FOREIGN KEY (profile_id) REFERENCES profile (id)
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

INSERT INTO profile (id, username, password) VALUES 
  (UUID(), 'John', 'f29afg7p24'),
  (UUID(), 'Jane', 'f29afg7p24'),
  (UUID(), 'Bob', 'f29afg7p24'),
  (UUID(), 'Alice', 'f29afg7p24'),
  (UUID(), 'Eve', 'f29afg7p24'),
  (UUID(), 'Mallory', 'f29afg7p24'),
  (UUID(), 'Trent', 'f29afg7p24'),
  (UUID(), 'Carol', 'f29afg7p24'),
  (UUID(), 'Dave', 'f29afg7p24'),
  (UUID(), 'Oscar', 'f29afg7p24');

INSERT INTO room (id, name) VALUES
  (UUID(), 'General'),
  (UUID(), 'Random'),
  (UUID(), 'Music'),
  (UUID(), 'Programming'),
  (UUID(), 'Gaming');

INSERT INTO profile_room (profile_id, room_id) VALUES
(
  (SELECT id FROM profile WHERE username = 'John'),
  (SELECT id FROM room WHERE name = 'General')
),
(
  (SELECT id FROM profile WHERE username = 'Jane'),
  (SELECT id FROM room WHERE name = 'General')
),
(
  (SELECT id FROM profile WHERE username = 'Bob'),
  (SELECT id FROM room WHERE name = 'Music')
),
(
  (SELECT id FROM profile WHERE username = 'Alice'),
  (SELECT id FROM room WHERE name = 'Programming')
),
(
  (SELECT id FROM profile WHERE username = 'Eve'),
  (SELECT id FROM room WHERE name = 'Gaming')
),
(
  (SELECT id FROM profile WHERE username = 'Mallory'),
  (SELECT id FROM room WHERE name = 'General')
),
(
  (SELECT id FROM profile WHERE username = 'Trent'),
  (SELECT id FROM room WHERE name = 'Random')
),
(
  (SELECT id FROM profile WHERE username = 'Carol'),
  (SELECT id FROM room WHERE name = 'Music')
),
(
  (SELECT id FROM profile WHERE username = 'Dave'),
  (SELECT id FROM room WHERE name = 'Programming')
),
(
  (SELECT id FROM profile WHERE username = 'Oscar'),
  (SELECT id FROM room WHERE name = 'Gaming')
);


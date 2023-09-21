-- "User Status" Table
CREATE TABLE profile_status (
  profile_status_name VARCHAR(50) PRIMARY KEY
);

INSERT INTO profile_status (profile_status_name) VALUES 
('online'), 
('offline'), 
('away'), 
('busy');

-- "User Relation Status" Table
CREATE TABLE profile_relation_status (
  relation_status_name VARCHAR(50) PRIMARY KEY
);

INSERT INTO profile_relation_status (relation_status_name) VALUES 
('pending'), 
('friend'), 
('blocked'), 
('ignored'), 
('requested');

-- "Room Status" Table
CREATE TABLE room_status (
  room_status_name VARCHAR(50) PRIMARY KEY
);

INSERT INTO room_status (room_status_name) VALUES 
('pending'), 
('member'), 
('blocked'), 
('ignored'), 
('admin'), 
('owner');

-- "Message Status" Table
CREATE TABLE message_status (
  message_status_name VARCHAR(50) PRIMARY KEY
);

INSERT INTO message_status (message_status_name) VALUES 
('sent'), 
('delivered'), 
('read');

-- "User "Table
CREATE TABLE profile (
  -- this is the username
  id VARCHAR(100) PRIMARY KEY,
  hashed_password VARCHAR(1000) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  profile_status_name VARCHAR(50) NOT NULL DEFAULT 'offline',
  FOREIGN KEY (profile_status_name) REFERENCES profile_status (status_name)
);

-- "Room" Table
CREATE TABLE room (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- "Message" Table
CREATE TABLE message (
  id UUID PRIMARY KEY,
  sender_id VARCHAR(100) NOT NULL,
  room_id UUID NOT NULL,
  body VARCHAR(1000) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (profile_id) REFERENCES profile (id),
  FOREIGN KEY (room_id) REFERENCES room (id)
);

-- "User Status on a Room" Table
CREATE TABLE profile_room (
  profile_id VARCHAR(100) NOT NULL,
  room_id UUID NOT NULL,
  room_status_name VARCHAR(50) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (profile_id, room_id),
  FOREIGN KEY (profile_id) REFERENCES profile (id),
  FOREIGN KEY (room_id) REFERENCES room (id),
  FOREIGN KEY (room_status_name) REFERENCES room_status (status_name)
);

-- "User Relation" Table
CREATE TABLE profile_relation (
  sender_profile_id VARCHAR(100) NOT NULL,
  receiver_profile_id VARCHAR(100) NOT NULL,
  relation_status_name VARCHAR(50) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (requester_profile_id, receiver_profile_id),
  FOREIGN KEY (requester_profile_id) REFERENCES profile (id),
  FOREIGN KEY (receiver_profile_id) REFERENCES profile (id),
  FOREIGN KEY (relation_status_name) REFERENCES profile_relation_status (status_name)
);

-- "User Message" Table
CREATE TABLE profile_message (
  sender_profile_id VARCHAR(100) NOT NULL,
  receiver_profile_id VARCHAR(100) NOT NULL,
  message_id UUID NOT NULL,
  message_status_name VARCHAR(50) NOT NULL DEFAULT 'pending',
  PRIMARY KEY (requester_profile_id, receiver_profile_id, message_id),
  FOREIGN KEY (requester_profile_id) REFERENCES profile (id),
  FOREIGN KEY (receiver_profile_id) REFERENCES profile (id),
  FOREIGN KEY (message_id) REFERENCES message (id),
  FOREIGN KEY (message_status_name) REFERENCES message_status (status_name)
);

-- "Updated At" Triggers
CREATE TRIGGER profile_updated_at 
BEFORE UPDATE ON profile 
FOR EACH ROW 
BEGIN
  SET NEW.updated_at = NOW();
END;
//

CREATE TRIGGER message_updated_at
BEFORE UPDATE ON message
FOR EACH ROW
  BEGIN
    SET NEW.updated_at = NOW();
END;
//

CREATE TRIGGER room_updated_at
BEFORE UPDATE ON room
FOR EACH ROW
  BEGIN
    SET NEW.updated_at = NOW();
END;
//

-- "UUID" Triggers
CREATE TRIGGER before_message_insert
BEFORE INSERT ON message
FOR EACH ROW
  BEGIN
    SET NEW.id = UUID();
END;
//

CREATE TRIGGER before_room_insert
BEFORE INSERT ON room
FOR EACH ROW
BEGIN
  SET NEW.id = UUID();
END;
//

DELIMITER ;

INSERT INTO profile (username, password, profile_status_name) VALUES 
  ('John', 'f29afg7p24', 'online'),
  ('Jane', 'f29afg7p24', 'offline'),
  ('Bob', 'f29afg7p24', 'away'),
  ('Alice', 'f29afg7p24', 'busy'),
  ('Eve', 'f29afg7p24', 'online'),
  ('Mallory', 'f29afg7p24', 'offline'),
  ('Trent', 'f29afg7p24', 'away'),
  ('Carol', 'f29afg7p24', 'busy'),
  ('Dave', 'f29afg7p24', 'online'),
  ('Oscar', 'f29afg7p24', 'offline');

INSERT INTO room (id, name) VALUES
  (UUID(), 'General'),
  (UUID(), 'Random'),
  (UUID(), 'Music'),
  (UUID(), 'Programming'),
  (UUID(), 'Gaming');

INSERT INTO profile_room (profile_id, room_id, room_status_name) VALUES
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

INSERT INTO profile_relation (requester_profile_id, receiver_profile_id, relation_status_name) VALUES
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

INSERT INTO message (profile_id, room_id, body) VALUES
(
  (SELECT id FROM profile WHERE username = 'John'),
  (SELECT id FROM room WHERE name = 'General'),
  'Hello everyone in the General room!'
),
(
  (SELECT id FROM profile WHERE username = 'Jane'),
  (SELECT id FROM room WHERE name = 'General'),
  'Hi John! How are you?'
),
(
  (SELECT id FROM profile WHERE username = 'Alice'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'Anyone familiar with SQL triggers?'
),
(
  (SELECT id FROM profile WHERE username = 'Dave'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'Yes, Alice. What do you need help with?'
),
(
  (SELECT id FROM profile WHERE username = 'Bob'),
  (SELECT id FROM room WHERE name = 'Music'),
  'Any recommendations for good rock songs?'
),
(
  (SELECT id FROM profile WHERE username = 'Eve'),
  (SELECT id FROM room WHERE name = 'Gaming'),
  'Has anyone tried the new game "Endless Horizon"?'
),
(
  (SELECT id FROM profile WHERE username = 'Oscar'),
  (SELECT id FROM room WHERE name = 'Gaming'),
  'Yes, Eve. I played it last night. It''s awesome!'
),
(
  (SELECT id FROM profile WHERE username = 'Carol'),
  (SELECT id FROM room WHERE name = 'Music'),
  'I love classic jazz. Any recommendations?'
),
(
  (SELECT id FROM profile WHERE username = 'Mallory'),
  (SELECT id FROM room WHERE name = 'Random'),
  'Did anyone watch the lunar eclipse yesterday?'
),
(
  (SELECT id FROM profile WHERE username = 'Trent'),
  (SELECT id FROM room WHERE name = 'Random'),
  'I missed it! Any good pictures?'
),
(
  (SELECT id FROM profile WHERE username = 'John'),
  (SELECT id FROM room WHERE name = 'General'),
  'By the way, there''s a team meeting tomorrow at 10 AM.'
),
(
  (SELECT id FROM profile WHERE username = 'Bob'),
  (SELECT id FROM room WHERE name = 'Music'),
  'Check out "Bohemian Rhapsody" by Queen. A classic!'
),
(
  (SELECT id FROM profile WHERE username = 'Alice'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'I figured out the SQL trigger issue. Thanks, Dave!'
),
(
  (SELECT id FROM profile WHERE username = 'Jane'),
  (SELECT id FROM room WHERE name = 'General'),
  'Thanks for the heads up, John.'
),
(
  (SELECT id FROM profile WHERE username = 'Dave'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'No problem, Alice. Always here to help!'
),
(
  (SELECT id FROM profile WHERE username = 'Eve'),
  (SELECT id FROM room WHERE name = 'Gaming'),
  'Oscar, let''s team up for a multiplayer session tonight.'
),
(
  (SELECT id FROM profile WHERE username = 'Oscar'),
  (SELECT id FROM room WHERE name = 'Gaming'),
  'Sounds like a plan, Eve!'
),
(
  (SELECT id FROM profile WHERE username = 'Mallory'),
  (SELECT id FROM room WHERE name = 'Random'),
  'I captured some amazing shots of the lunar eclipse. Will share them soon.'
),
(
  (SELECT id FROM profile WHERE username = 'Trent'),
  (SELECT id FROM room WHERE name = 'Random'),
  'Looking forward to it, Mallory!'
),
(
  (SELECT id FROM profile WHERE username = 'Carol'),
  (SELECT id FROM room WHERE name = 'Music'),
  'Thanks for the jazz recommendations. Loving it!'
),
(
  (SELECT id FROM profile WHERE username = 'Bob'),
  (SELECT id FROM room WHERE name = 'Music'),
  'Glad you liked it, Carol!'
),
(
  (SELECT id FROM profile WHERE username = 'Jane'),
  (SELECT id FROM room WHERE name = 'General'),
  'Can we postpone the team meeting to 11 AM?'
),
(
  (SELECT id FROM profile WHERE username = 'John'),
  (SELECT id FROM room WHERE name = 'General'),
  'Sure, Jane. I''ll make the change.'
),
(
  (SELECT id FROM profile WHERE username = 'Alice'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'Anyone attending the tech conference next week?'
),
(
  (SELECT id FROM profile WHERE username = 'Dave'),
  (SELECT id FROM room WHERE name = 'Programming'),
  'I am, Alice. Let''s catch up there!'
);


-- ----------------------------------------
-- Lookup Tables --------------------------
-- ----------------------------------------

-- "Profile Status" Lookup Table
CREATE TABLE profile_status (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL UNIQUE
);

INSERT INTO profile_status (name) VALUES
  ('deleted'),
  ('active'),
  ('offline'),
  ('busy');

-- "Profile Relation Status" Lookup Table
CREATE TABLE profile_relation_status (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL UNIQUE
);

INSERT INTO profile_relation_status (name) VALUES
  ('friend'),
  ('requested'),
  ('received'),
  ('blocked'),
  ('ignored');

-- "Profile Message Status" Lookup Table
CREATE TABLE profile_message_status (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL UNIQUE
);

INSERT INTO profile_message_status (name) VALUES
  ('read'),
  ('sent'),
  ('delivered'),
  ('deleted');

-- "Profile Room Status" Lookup Table
CREATE TABLE profile_room_status (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(20) NOT NULL UNIQUE
);

INSERT INTO profile_room_status (name) VALUES
  ('owner')
  ('admin'),
  ('member'),
  ('muted'),
  ('banned'),
  ('ignored');

-- ----------------------------------------
-- Primary Tables -------------------------
-- ----------------------------------------

-- "Profile" Table
CREATE TABLE profile (
  id UUID PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL,
  hashed_password VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  updated_at DATETIME NOT NULL DEFAULT NOW(),
  profile_status_id INT NOT NULL,
  FOREIGN KEY (profile_status_id) REFERENCES profile_status (id)
);

-- "Message" Table
CREATE TABLE message (
  id UUID PRIMARY KEY NOT NULL,
  profile_id UUID NOT NULL,
  room_id UUID NOT NULL,
  body VARCHAR(1000) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  updated_at DATETIME NOT NULL DEFAULT NOW(),
  FOREIGN KEY (profile_id) REFERENCES profile (id),
  FOREIGN KEY (room_id) REFERENCES room (id)
);

-- "Room" Table
CREATE TABLE room (
  id UUID PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  updated_at DATETIME NOT NULL DEFAULT NOW()
);

-- ----------------------------------------
-- Junction Tables ------------------------
-- ----------------------------------------

-- "Profile Relation" Table
CREATE TABLE profile_relation (
  requester_profile_id UUID NOT NULL,
  receiver_profile_id UUID NOT NULL,
  relation_status_id INT NOT NULL,
  PRIMARY KEY (requester_profile_id, receiver_profile_id),
  FOREIGN KEY (requester_profile_id) REFERENCES profile (id),
  FOREIGN KEY (receiver_profile_id) REFERENCES profile (id),
  FOREIGN KEY (relation_status_id) REFERENCES profile_relation_status (id)
);

-- "Profile Message Status" Junction Table
CREATE TABLE profile_message_status (
  profile_id UUID NOT NULL,
  message_id UUID NOT NULL,
  message_status_id INT NOT NULL,
  PRIMARY KEY (profile_id, message_id),
  FOREIGN KEY (profile_id) REFERENCES profile (id),
  FOREIGN KEY (message_id) REFERENCES message (id),
  FOREIGN KEY (message_status_id) REFERENCES message_status (id)
);

-- "Profile Room" Table
CREATE TABLE profile_room (
  profile_id UUID NOT NULL,
  room_id UUID NOT NULL,
  profile_room_status_id INT NOT NULL,
  PRIMARY KEY (profile_id, room_id),
  FOREIGN KEY (profile_id) REFERENCES profile (id),
  FOREIGN KEY (room_id) REFERENCES room (id),
  FOREIGN KEY (room_status_id) REFERENCES profile_room_status (id)
);

-- ----------------------------------------
-- Triggers -------------------------------
-- ----------------------------------------

DELIMITER //

--
CREATE PROCEDURE DeleteEmptyRooms(IN deleted_profile_id UUID)
BEGIN
  DELETE r.* FROM room r
  JOIN profile_room pr
  ON pr.user_id = deleted_profile_id
  LEFT JOIN profile p
  ON p.id = pr.user_id
  WHERE pr.profile_room_status_id != 3 -- muted
  AND pr.profile_room_status_id != 4 -- banned
  AND pr.profile_room_status_id != 5 -- ignored
  AND p.profile_status_id != 1 -- deleted
END;
//

CREATE TRIGGER after_profile_status_update
AFTER UPDATE ON profile
FOR EACH ROW
BEGIN
    IF NEW.profile_status_id = 4 THEN 
      -- 4 = deleted
        CALL DeleteEmptyRooms(NEW.id);
    END IF;
END;
//


CREATE TRIGGER after_profile_status_update
AFTER UPDATE ON profile
FOR EACH ROW
BEGIN
    IF NEW.profile_status_id = 4 THEN
      -- 4 = deleted
      DeleteEmptyRooms(NEW.id);
    END IF;
END;
//



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
CREATE TRIGGER before_profile_insert
BEFORE INSERT ON profile
FOR EACH ROW
  BEGIN
    SET NEW.id = UUID();
END;
//

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


-- ----------------------------------------
-- Prepared Procedures --------------------
-- ----------------------------------------

-- "Create Profile" Procedure
CREATE PROCEDURE CreateProfile(
  IN username VARCHAR(100),
  IN hashed_password VARCHAR(1000),
  IN profile_status_id INT
)
BEGIN
  INSERT INTO profile (username, hashed_password, profile_status_id)
  VALUES (username, hashed_password, profile_status_id);
END;
//

-- "Create Message" Procedure
CREATE PROCEDURE CreateMessage(
  IN sender_id UUID,
  IN room_id UUID,
  IN body VARCHAR(1000)
)
BEGIN
  DECLARE message_id UUID;
  INSERT INTO message (profile_id, room_id, body)
  VALUES (sender_id, room_id, body);
  SET message_id = LAST_INSERT_ID();
  INSERT INTO profile_message_status (profile_id, message_id, message_status_id)
  -- 1 = sent
  VALUES (profile_id, message_id, 1);
END;
//

-- "Create Room" Procedure
CREATE PROCEDURE CreateRoom(
  IN name VARCHAR(100),
  IN profile_id VARCHAR(100)
)
BEGIN
  DECLARE room_id UUID;
  INSERT INTO room (name) VALUES (name);
  SET room_id = LAST_INSERT_ID();
  INSERT INTO profile_room (profile_id, room_id, room_status_name)
  VALUES (profile_id, room_id, 'admin');
END;
//

-- "Create Profile Relation" Procedure
CREATE PROCEDURE CreateProfileRelation(
  IN requester_profile_id VARCHAR(100),
  IN receiver_profile_id VARCHAR(100),
  IN relation_status_id INT
)
BEGIN
  INSERT INTO profile_relation (requester_profile_id, receiver_profile_id, relation_status_id)
  VALUES (requester_profile_id, receiver_profile_id, relation_status_id);
END;
//

-- "Update Profile Relation" Procedure
CREATE PROCEDURE UpdateProfileRelation(
  IN requester_profile_id VARCHAR(100),
  IN receiver_profile_id VARCHAR(100),
  IN relation_status_id INT
)
BEGIN
  UPDATE profile_relation
  SET relation_status_id = relation_status_id
  WHERE requester_profile_id = requester_profile_id
  AND receiver_profile_id = receiver_profile_id;
END;
//

-- "Send Friend Request" Procedure
CREATE PROCEDURE SendFriendRequest(
  IN requester_profile_id VARCHAR(100),
  IN receiver_profile_id VARCHAR(100)
)
BEGIN
  CALL CreateProfileRelation(requester_profile_id, receiver_profile_id, 1);
  CALL CreateProfileRelation(receiver_profile_id, requester_profile_id, 2);
  -- 1 = requested
  -- 2 = received
END;
//

-- "Accept Friend Request" Procedure
CREATE PROCEDURE AcceptFriendRequest(
  IN requester_profile_id VARCHAR(100),
  IN receiver_profile_id VARCHAR(100)
)
BEGIN
  CALL UpdateProfileRelation(requester_profile_id, receiver_profile_id, 1);
  CALL UpdateProfileRelation(receiver_profile_id, requester_profile_id, 1);
  -- 1 = friend
END;
//

-- "Block Profile" Procedure
CREATE PROCEDURE BlockProfile(
  IN requester_profile_id VARCHAR(100),
  IN receiver_profile_id VARCHAR(100)
)
BEGIN
  CALL UpdateProfileRelation(requester_profile_id, receiver_profile_id, 4);
  -- 4 = blocked
END;
//

-- "Ignore Profile" Procedure
CREATE PROCEDURE IgnoreProfile(
  IN requester_profile_id VARCHAR(100),
  IN receiver_profile_id VARCHAR(100)
)
BEGIN
  CALL UpdateProfileRelation(requester_profile_id, receiver_profile_id, 5);
  -- 5 = ignored
END;
//

-- "Delete Profile" Procedure
CREATE PROCEDURE DeleteProfile(
  IN profile_id VARCHAR(100)
)
BEGIN
  UPDATE profile
  SET profile_status_id = 1
  WHERE id = profile_id;
  -- 1 = deleted
END;
//

-- "Delete Message" Procedure
CREATE PROCEDURE DeleteMessage(
  IN profile_id VARCHAR(100),
  IN message_id UUID
)
BEGIN
  UPDATE profile_message_status
  SET message_status_id = 4
  WHERE profile_id = profile_id
  AND message_id = message_id;
  -- 4 = deleted
END;
//

-- "Delete Room" Procedure
CREATE PROCEDURE DeleteRoom(
  IN profile_id VARCHAR(100),
  IN room_id UUID
)
BEGIN
  UPDATE profile_room
  SET room_status_id = 4
  WHERE profile_id = profile_id
  AND room_id = room_id;
  -- 4 = ignored
END;
//


DELIMITER ;

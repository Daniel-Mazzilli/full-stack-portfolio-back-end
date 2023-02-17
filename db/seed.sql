\c travel_dev;

INSERT INTO users (full_name, email, username, password, home_country) VALUES
('daniel mazzilli', 'd@email.it', 'dan16', '$2b$10$y.8KQFYbMfi.kMKY/CcQ4ejBTyyj7jlQ.0vh3WwkhG9GBOJGUyjcS', 'Italy' ),
('siqi li', 's@email.com', 'siqi', '$2b$10$yp/NW8hwqKk3jzJ.MEe1q.azNjaAzmvh4EMHlrbk6Xg/6h/QQCUQy', 'China' ),
('sara m', 'sara@email.com', 'sara18', '$2b$10$SzZ3rwuZYcmZ.3rj6w7N4e0EIuY32XeayPZGTGMuIIz/ZeqRp8RFK', 'Italy' );

INSERT INTO trips (name, circa, country, go_back, image, description, user_id) VALUES
('Miami with NY friends', 'June 2021', 'United States of America', false, 'https://drive.google.com/uc?export=view&id=1hY0t4sUtleOy06G88sIrVAljr5xdQ7LH', 'Miami was fun. I enjoyed the beaches and loved Wynwood graffiti.', 1),
('Sardegna', 'August 2021', 'Italy', true, 'https://drive.google.com/uc?export=view&id=1iCcBEnhiDe-OfaIoWuHkvKsCi8C41e7D', 'The beaches were incredible. Clear and beautiful water. So amazing to go on a trip with my friends from home.', 1),
('Vienna visiting Gianluca', 'March 2022', 'Austria', true, 'https://drive.google.com/uc?export=view&id=1hcisyuyg2l7ON9Wi0lYCqbtLh3t_OUA4', 'Visiting Gianluca in Vienna was great. While he was working during the day I checked out museums and the main attractions. On the weekend we partied together and got to meet his friends and cousin. Should go back to visit sometime.', 1),
('Israel', 'Spring 2022', 'Israel', true, 'https://drive.google.com/uc?export=view&id=1hdWJNFKISLC6vrnwYkMWuUkkN3sqN1MF', 'Israel was awesome. Met lots of great people. The food was amazing. The spiritual energy in Jerusalem is unmatched. Hoping to be back soon.', 1 ),
('Ireland with Jacob', 'June 2022', 'Ireland', false, 'https://drive.google.com/uc?export=view&id=1hj-wFsPg4XOFUK4F-_QvMCzeR1M_-BsF', 'Dublin was lots of fun. Loved Giant''s Causeway in Northern Ireland. We actually went to a Hurling game!', 1),
('Amsterdam and Qlimax', 'Nov 2022', 'Netherlands', false, 'https://drive.google.com/uc?export=view&id=1i23HGfBub80aJoY2lMrprHI0JfLTQ2nl', 'Spent some days solo traveling in Amsterdam. Loved the museums and just walking around the city. Later I met friends and we attended Qlimax, a hard dance music event held every year in Arnhem. It was nice to be back since my first visit in 2012.', 1),
('Venezia, finally!', 'Feb 2023', 'Italy', true, 'https://drive.google.com/uc?export=view&id=1iFHUUq735B0249paEvaf1NSryVDKcA6V', 'Finally visited Venezia! It is such a dreamy place. It is so unique. Burano and Murano were also nice. We were there when Carnevale started.', 1),
('Colorado', 'March 2020', 'United States of America', true, 'no image', 'Amazing hiking and loved all the outdoor activities. Definitely coming back.', 2),
('Costa Rica w friends', 'May 2022', 'Costa Rica', true, 'no image', 'What an amazing trip it was. Tried surfing and ziplining for the first time. Visited an animal sanctuary too.', 3),
('Barcelona with Giorgia', 'Jan 2023', 'Spain', false, 'no image', 'Tons of fun with Giorgia. Great food and beautiful city.', 3);

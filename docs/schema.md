# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
url   			| string    | not null

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    | not null

## favorites
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
image_id       | integer   | not null, foreign key (references images), indexed
user_id        | integer   | not null, foreign key (references users), indexed

## collected_images
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
image_id       | integer   | not null, foreign key (references images), indexed
collection_id  | integer   | not null, foreign key (references collections), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_id    | integer   | not null, foreign key (references images), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160909042159) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collected_images", force: :cascade do |t|
    t.integer  "image_id",      null: false
    t.integer  "collection_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "collected_images", ["collection_id"], name: "index_collected_images_on_collection_id", using: :btree
  add_index "collected_images", ["image_id"], name: "index_collected_images_on_image_id", using: :btree

  create_table "collections", force: :cascade do |t|
    t.string   "title",                   null: false
    t.text     "description"
    t.integer  "user_id",     default: 1
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "collections", ["description"], name: "index_collections_on_description", using: :btree
  add_index "collections", ["title"], name: "index_collections_on_title", using: :btree
  add_index "collections", ["user_id"], name: "index_collections_on_user_id", using: :btree

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "image_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "favorites", ["image_id"], name: "index_favorites_on_image_id", using: :btree
  add_index "favorites", ["user_id"], name: "index_favorites_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "url",         null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "thumbUrl",    null: false
  end

  add_index "images", ["description"], name: "index_images_on_description", using: :btree
  add_index "images", ["title"], name: "index_images_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

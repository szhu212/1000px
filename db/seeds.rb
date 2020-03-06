# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

sz = User.create(username:"Skylar", email:"sz1@gmail.com", password:"aaa111")
danny = User.create(username:"Danny", email:"db@gmail.com", password:"1234ab")

Picture.destroy_all

winter = Picture.create(title:"Winter Morning", description:" Beautiful winter morning @halfmoon bay, CA.", author_id:sz.id, equipment_or_material:"Wacom Intuo 4 Tablet", editors_choice:"true")
cat = Picture.create(title:"Fur ball", description:"Cat sketch <3<3<3",author_id:danny.id, equipment_or_material:"Water color", editors_choice:"false")


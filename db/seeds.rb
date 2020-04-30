# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.destroy_all
user = Hash.new()
user[0] = User.create!(username:"Skylar", email:"sz1@gmail.com", password:"aaa111")
user[1] = User.create!(username:"Danny", email:"db@gmail.com", password:"1234ab")
user[2] = User.create!(username:"KOMA", email:"koma@gmail.com", password:"erfv2d")
user[3] = User.create!(username:"Callarin", email:"cala@gmail.com", password:"3fvfvab")
user[4] = User.create!(username:"Rei", email:"rei@gmail.com", password:"1ewrgbc2")
user[5] = User.create!(username:"Mary_painting", email:"mp@gmail.com", password:"wer4rf")
user[6] = User.create!(username:"Chris Green", email:"cg@gmail.com", password:"ssssdfb")
user[7] = User.create!(username:"Jane Brown", email:"jane@gmail.com", password:"sefsweref19")
user[8] = User.create!(username:"Egon", email:"ee@gmail.com", password:"wrfertg")

user.keys.each do |n|
    file = open("https://100illusts-dev.s3-us-west-1.amazonaws.com/20#{n}.png")
    user[n].avatar.attach(io: file, filename: "20#{n}.png")
end

Picture.destroy_all

p = Hash.new()
p[0] = Picture.create!(title:"Attach on Titan - Levi", description:"Digital painting of Levi from Attach on Titan", author_id:user[0].id, equipment_or_material:"Wacom Intuo 4 Tablet", editors_choice:"true")
p[1] = Picture.create!(title:"Cat sketch", description:"Like a little fur call <3",author_id:user[1].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[2] = Picture.create!(title:"Winter Sakura", description:"Let him only see the thorns who has eyes to see the rose.",author_id:user[5].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[3] = Picture.create!(title:"Girl figure", description:"Poster for a dear friend's new book.",author_id:user[4].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[4] = Picture.create!(title:"City", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[5].id, equipment_or_material:"Oil paiting", editors_choice:"true")
p[5] = Picture.create!(title:"starry sky", description:"I have my stars in the sky, but oh for my little lamp unlit in my house.",author_id:user[5].id, equipment_or_material:"Watercolor", editors_choice:"true")
p[6] = Picture.create!(title:"Cat and birds", description:"Little fur balls",author_id:user[3].id, equipment_or_material:"Watercolor", editors_choice:"true")
p[7] = Picture.create!(title:"Rabbits", description:"Poster for Amausa Bakery",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[8] = Picture.create!(title:"Rabbits in coffee cup", description:"Poster for Amausa Bakery",author_id:user[7].id, equipment_or_material:"Wacom Intuos Tablet", editors_choice:"true")
p[9] = Picture.create!(title:"Sakura", description:"Sakura blossom",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[10] = Picture.create!(title:"Gemstones", description:"You are worth more than the emeralds that people compare your eyes to.",author_id:user[2].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[11] = Picture.create!(title:"Sword", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[3].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[12] = Picture.create!(title:"Fur balls", description:"Cat sketch <3<3<3",author_id:user[1].id, equipment_or_material:"color pencil", editors_choice:"true")
p[13] = Picture.create!(title:"Ocean sunset", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[5].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[14] = Picture.create!(title:"watercolor", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[15] = Picture.create!(title:"Fur ball", description:"Lovely little bird",author_id:user[5].id, equipment_or_material:"color pencil", editors_choice:"false")
p[16] = Picture.create!(title:"IFF Toronto Mascot Design", description:"Mascot design for IFF Toronto event.",author_id:user[4].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[17] = Picture.create!(title:"Rabbits", description:"Poster for Amausa Bakery",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[18] = Picture.create!(title:"Gold Fish", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[19] = Picture.create!(title:"Portrait", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[4].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[20] = Picture.create!(title:"Country side", description:"The familiar rhythm of the crickets chirps creates the soundtrack for each day.",author_id:user[2].id, equipment_or_material:"Color pencil", editors_choice:"true")
p[21] = Picture.create!(title:"Cat eyes", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[22] = Picture.create!(title:"Whale", description:"New painting for my exhibition @Kyoto city museum.",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[23] = Picture.create!(title:"Blue butterflies", description:"To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to.",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[24] = Picture.create!(title:"Tokyo JK", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Color pencil", editors_choice:"true")
p[25] = Picture.create!(title:"Lolita", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[26] = Picture.create!(title:"Kyoto city view", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[27] = Picture.create!(title:"Lilium", description:"Lovely little bird",author_id:user[5].id, equipment_or_material:"color pencil", editors_choice:"false")
p[28] = Picture.create!(title:"Summer day", description:"Mascot design for IFF Toronto event.",author_id:user[4].id, equipment_or_material:"Water color", editors_choice:"true")
p[29] = Picture.create!(title:"game scene design", description:"I'm so excited to design game scenes for the first time!",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[30] = Picture.create!(title:"Sketch", description:"A little town in a magical world.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[31] = Picture.create!(title:"Game character design", description:"I'm so excited to design game scenes for the first time!",author_id:user[4].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[32] = Picture.create!(title:"Miku", description:"Illustration for a dear friend's new book.",author_id:user[2].id, equipment_or_material:"Color pencil", editors_choice:"true")
p[33] = Picture.create!(title:"Watercolor sketch", description:"Love the layers created with watercolor!",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[34] = Picture.create!(title:"A scene from my favorite game", description:"Do you know which game this is?",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[35] = Picture.create!(title:"Animation characters", description:"Poster for a dear friend's new book.",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[36] = Picture.create!(title:"Classroom", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[0].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[37] = Picture.create!(title:"Your shadow", description:"Let him only see the thorns who has eyes to see the rose.",author_id:user[5].id, equipment_or_material:"Water color", editors_choice:"false")
p[38] = Picture.create!(title:"Game charactor design", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[4].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[39] = Picture.create!(title:"starry sky", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[5].id, equipment_or_material:"Oil paiting", editors_choice:"true")
p[40] = Picture.create!(title:"Girl in blue", description:"I have my stars in the sky, but oh for my little lamp unlit in my house.",author_id:user[5].id, equipment_or_material:"Watercolor", editors_choice:"true")
p[41] = Picture.create!(title:"Japanese festivals", description:"Little fur balls",author_id:user[3].id, equipment_or_material:"Watercolor", editors_choice:"true")
p[42] = Picture.create!(title:"Pink", description:"Preparing for my coming exhibition",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[43] = Picture.create!(title:"Japanese flower art", description:"Potrait of a girl doing flower art in moonlight.",author_id:user[7].id, equipment_or_material:"Digital", editors_choice:"true")
p[44] = Picture.create!(title:"Dancing Miku", description:"Dancing miku in city view",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[45] = Picture.create!(title:"Sakura", description:"Oil painting of sakura blossom.",author_id:user[2].id, equipment_or_material:"Wacom Pro Tablet", editors_choice:"true")
p[46] = Picture.create!(title:"Group portrait", description:"Characters from Jojo's Bizarre Advanture.",author_id:user[3].id, equipment_or_material:"Wacom Intuos Tablet", editors_choice:"true")
p[47] = Picture.create!(title:"Man in the sky", description:"Poster for a dear friend's new book.",author_id:user[7].id, equipment_or_material:"Wacom Bamboo Tablet", editors_choice:"true")
p[48] = Picture.create!(title:"Flying in sunset", description:"Have you ever imagined flying in the sky like this?",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[49] = Picture.create!(title:"Alice in the wonderland", description:"Painting characters from my favourite fairy tale.",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[50] = Picture.create!(title:"Fairies", description:"Illustration for a dear friend's new book.",author_id:user[8].id, equipment_or_material:"Wacom Intuos Tablet", editors_choice:"true")

p.keys.each do |n|
    file = open("https://100illusts-dev.s3-us-west-1.amazonaws.com/#{n}.jpg")
    p[n].picture.attach(io: file, filename: "0#{n}.jpg")
end

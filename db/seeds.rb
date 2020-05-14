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
p[0] = Picture.create!(title:"Fairies", description:"Illustration for a dear friend's new book.",author_id:user[8].id, equipment_or_material:"Wacom Intuos Tablet", editors_choice:"true")
p[1] = Picture.create!(title:"Cat sketch", description:"Like a little fur call <3",author_id:user[1].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[2] = Picture.create!(title:"Winter Sakura", description:"Let him only see the thorns who has eyes to see the rose.",author_id:user[5].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[3] = Picture.create!(title:"Girl figure", description:"Poster for a dear friend's new book.",author_id:user[4].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[4] = Picture.create!(title:"City", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[5].id, equipment_or_material:"Oil paiting", editors_choice:"true")
p[5] = Picture.create!(title:"Group portrait", description:"Characters from Jojo's Bizarre Advanture.",author_id:user[3].id, equipment_or_material:"Wacom Intuos Tablet", editors_choice:"false")
p[6] = Picture.create!(title:"Cat and birds", description:"Little fur balls",author_id:user[3].id, equipment_or_material:"Watercolor", editors_choice:"true")
p[7] = Picture.create!(title:"Rabbits", description:"Poster for Amausa Bakery",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[8] = Picture.create!(title:"Rabbits in coffee cup", description:"Poster for Amausa Bakery",author_id:user[7].id, equipment_or_material:"Wacom Intuos Tablet", editors_choice:"false")
p[9] = Picture.create!(title:"Miku in the dusk", description:"It's Mikuuuu!",author_id:user[6].id, equipment_or_material:"Wacom Tablet", editors_choice:"false")
p[10] = Picture.create!(title:"Man in the sky", description:"Poster for a dear friend's new book.",author_id:user[7].id, equipment_or_material:"Wacom Bamboo Tablet", editors_choice:"false")
p[11] = Picture.create!(title:"Sword", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[3].id, equipment_or_material:"Wacom Tablet", editors_choice:"false")
p[12] = Picture.create!(title:"Fur balls", description:"Cat sketch <3<3<3",author_id:user[1].id, equipment_or_material:"color pencil", editors_choice:"false")
p[13] = Picture.create!(title:"Ocean sunset", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[5].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[14] = Picture.create!(title:"watercolor", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[15] = Picture.create!(title:"Fur ball", description:"Lovely little bird",author_id:user[5].id, equipment_or_material:"color pencil", editors_choice:"false")
p[16] = Picture.create!(title:"IFF Toronto Mascot Design", description:"Mascot design for IFF Toronto event.",author_id:user[4].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[17] = Picture.create!(title:"Rabbits", description:"Poster for Amausa Bakery",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[18] = Picture.create!(title:"Gold Fish", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[19] = Picture.create!(title:"Portrait", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[4].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[20] = Picture.create!(title:"Country side", description:"The familiar rhythm of the crickets chirps creates the soundtrack for each day.",author_id:user[2].id, equipment_or_material:"Color pencil", editors_choice:"false")
p[21] = Picture.create!(title:"Cat eyes", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[22] = Picture.create!(title:"Whale", description:"New painting for my exhibition @Kyoto city museum.",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[23] = Picture.create!(title:"Blue butterflies", description:"To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to.",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[24] = Picture.create!(title:"Tokyo JK", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Color pencil", editors_choice:"true")
p[25] = Picture.create!(title:"Lolita", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Wacom Tablet", editors_choice:"false")
p[26] = Picture.create!(title:"Kyoto city view", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[27] = Picture.create!(title:"Lilium", description:"Lovely little bird",author_id:user[5].id, equipment_or_material:"color pencil", editors_choice:"false")
p[28] = Picture.create!(title:"Summer day", description:"Mascot design for IFF Toronto event.",author_id:user[4].id, equipment_or_material:"Water color", editors_choice:"false")
p[29] = Picture.create!(title:"game scene design", description:"I'm so excited to design game scenes for the first time!",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[30] = Picture.create!(title:"Sketch", description:"A little town in a magical world.",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[31] = Picture.create!(title:"Game character design", description:"I'm so excited to design game scenes for the first time!",author_id:user[4].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[32] = Picture.create!(title:"Miku", description:"Illustration for a dear friend's new book.",author_id:user[2].id, equipment_or_material:"Color pencil", editors_choice:"true")
p[33] = Picture.create!(title:"Watercolor sketch", description:"Love the layers created with watercolor!",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[34] = Picture.create!(title:"A scene from my favorite game", description:"Do you know which game this is?",author_id:user[3].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[35] = Picture.create!(title:"Animation characters", description:"Poster for a dear friend's new book.",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"false")
p[36] = Picture.create!(title:"Classroom", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[0].id, equipment_or_material:"Wacom Tablet", editors_choice:"false")
p[37] = Picture.create!(title:"Your shadow", description:"Let him only see the thorns who has eyes to see the rose.",author_id:user[5].id, equipment_or_material:"Water color", editors_choice:"false")
p[38] = Picture.create!(title:"Game charactor design", description:"Let me think that there is one among those stars that guides my life through the dark unknown.",author_id:user[4].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[39] = Picture.create!(title:"starry sky", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",author_id:user[5].id, equipment_or_material:"Oil paiting", editors_choice:"false")
p[40] = Picture.create!(title:"Girl in blue", description:"I have my stars in the sky, but oh for my little lamp unlit in my house.",author_id:user[5].id, equipment_or_material:"Watercolor", editors_choice:"false")
p[41] = Picture.create!(title:"Japanese festivals", description:"Little fur balls",author_id:user[3].id, equipment_or_material:"Watercolor", editors_choice:"true")
p[42] = Picture.create!(title:"Pink", description:"Preparing for my coming exhibition",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"false")
p[43] = Picture.create!(title:"Japanese flower art", description:"Potrait of a girl doing flower art in moonlight.",author_id:user[7].id, equipment_or_material:"Digital", editors_choice:"true")
p[44] = Picture.create!(title:"Dancing Miku", description:"Dancing miku in city view",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"true")
p[45] = Picture.create!(title:"Sakura", description:"Oil painting of sakura blossom.",author_id:user[2].id, equipment_or_material:"Wacom Pro Tablet", editors_choice:"false")
p[46] = Picture.create!(title:"Japan Impression", description:"I have my stars in the sky, but oh for my little lamp unlit in my house.",author_id:user[5].id, equipment_or_material:"Watercolor", editors_choice:"true")
p[47] = Picture.create!(title:"Gemstones", description:"You are worth more than the emeralds that people compare your eyes to.",author_id:user[2].id, equipment_or_material:"Wacom Tablet", editors_choice:"true")
p[48] = Picture.create!(title:"Flying in sunset", description:"Have you ever imagined flying in the sky like this?",author_id:user[6].id, equipment_or_material:"Oil painting", editors_choice:"false")
p[49] = Picture.create!(title:"Alice in the wonderland", description:"Painting characters from my favourite fairy tale.",author_id:user[7].id, equipment_or_material:"Wacom Tablet", editors_choice:"false")
p[50] = Picture.create!(title:"Attack on Titan - Levi", description:"Digital painting of Levi from Attach on Titan", author_id:user[0].id, equipment_or_material:"Wacom Intuo 4 Tablet", editors_choice:"true")


p.keys.each do |n|
    file = open("https://100illusts-dev.s3-us-west-1.amazonaws.com/#{n}.jpg")
    p[n].picture.attach(io: file, filename: "0#{n}.jpg")
end


Like.destroy_all
l = Hash.new()
l[0] = Like.create(liker_id: user[0].id, picture_id: p[1].id)
l[1] = Like.create(liker_id: user[0].id, picture_id: p[2].id)
l[2] = Like.create(liker_id: user[0].id, picture_id: p[9].id)
l[3] = Like.create(liker_id: user[0].id, picture_id: p[25].id)
l[4] = Like.create(liker_id: user[0].id, picture_id: p[47].id)
l[5] = Like.create(liker_id: user[1].id, picture_id: p[0].id)
l[6] = Like.create(liker_id: user[1].id, picture_id: p[46].id)
l[7] = Like.create(liker_id: user[1].id, picture_id: p[4].id)
l[8] = Like.create(liker_id: user[1].id, picture_id: p[5].id)
l[9] = Like.create(liker_id: user[1].id, picture_id: p[8].id)
l[10] = Like.create(liker_id: user[2].id, picture_id: p[40].id)
l[11] = Like.create(liker_id: user[2].id, picture_id: p[3].id)
l[12] = Like.create(liker_id: user[2].id, picture_id: p[4].id)
l[13] = Like.create(liker_id: user[2].id, picture_id: p[21].id)
l[14] = Like.create(liker_id: user[3].id, picture_id: p[0].id)
l[15] = Like.create(liker_id: user[3].id, picture_id: p[2].id)
l[16] = Like.create(liker_id: user[3].id, picture_id: p[7].id)
l[17] = Like.create(liker_id: user[3].id, picture_id: p[6].id)
l[18] = Like.create(liker_id: user[3].id, picture_id: p[8].id)
l[19] = Like.create(liker_id: user[3].id, picture_id: p[9].id)
l[20] = Like.create(liker_id: user[3].id, picture_id: p[10].id)
l[21] = Like.create(liker_id: user[4].id, picture_id: p[0].id)
l[22] = Like.create(liker_id: user[4].id, picture_id: p[43].id)
l[23] = Like.create(liker_id: user[4].id, picture_id: p[13].id)
l[24] = Like.create(liker_id: user[4].id, picture_id: p[7].id)
l[25] = Like.create(liker_id: user[4].id, picture_id: p[18].id)
l[26] = Like.create(liker_id: user[4].id, picture_id: p[19].id)
l[27] = Like.create(liker_id: user[4].id, picture_id: p[26].id)
l[28] = Like.create(liker_id: user[4].id, picture_id: p[27].id)
l[29] = Like.create(liker_id: user[4].id, picture_id: p[28].id)
l[30] = Like.create(liker_id: user[4].id, picture_id: p[15].id)
l[31] = Like.create(liker_id: user[4].id, picture_id: p[16].id)
l[32] = Like.create(liker_id: user[4].id, picture_id: p[17].id)
l[33] = Like.create(liker_id: user[5].id, picture_id: p[30].id)
l[34] = Like.create(liker_id: user[5].id, picture_id: p[31].id)
l[35] = Like.create(liker_id: user[5].id, picture_id: p[32].id)
l[36] = Like.create(liker_id: user[5].id, picture_id: p[33].id)
l[37] = Like.create(liker_id: user[5].id, picture_id: p[34].id)
l[38] = Like.create(liker_id: user[5].id, picture_id: p[35].id)
l[39] = Like.create(liker_id: user[5].id, picture_id: p[36].id)
l[40] = Like.create(liker_id: user[5].id, picture_id: p[37].id)
l[41] = Like.create(liker_id: user[5].id, picture_id: p[38].id)
l[42] = Like.create(liker_id: user[6].id, picture_id: p[33].id)
l[43] = Like.create(liker_id: user[6].id, picture_id: p[34].id)
l[44] = Like.create(liker_id: user[6].id, picture_id: p[29].id)
l[45] = Like.create(liker_id: user[6].id, picture_id: p[23].id)
l[46] = Like.create(liker_id: user[6].id, picture_id: p[10].id)
l[47] = Like.create(liker_id: user[6].id, picture_id: p[4].id)
l[48] = Like.create(liker_id: user[6].id, picture_id: p[5].id)
l[49] = Like.create(liker_id: user[0].id, picture_id: p[5].id)
l[50] = Like.create(liker_id: user[2].id, picture_id: p[5].id)
l[51] = Like.create(liker_id: user[2].id, picture_id: p[50].id)
l[52] = Like.create(liker_id: user[2].id, picture_id: p[47].id)
l[53] = Like.create(liker_id: user[2].id, picture_id: p[46].id)
l[54] = Like.create(liker_id: user[2].id, picture_id: p[48].id)
l[55] = Like.create(liker_id: user[7].id, picture_id: p[48].id)
l[56] = Like.create(liker_id: user[7].id, picture_id: p[46].id)
l[57] = Like.create(liker_id: user[7].id, picture_id: p[47].id)
l[58] = Like.create(liker_id: user[7].id, picture_id: p[45].id)
l[59] = Like.create(liker_id: user[7].id, picture_id: p[44].id)
l[60] = Like.create(liker_id: user[7].id, picture_id: p[43].id)
l[61] = Like.create(liker_id: user[8].id, picture_id: p[50].id)
l[62] = Like.create(liker_id: user[8].id, picture_id: p[47].id)
l[63] = Like.create(liker_id: user[8].id, picture_id: p[46].id)
l[64] = Like.create(liker_id: user[8].id, picture_id: p[43].id)
l[65] = Like.create(liker_id: user[8].id, picture_id: p[39].id)








































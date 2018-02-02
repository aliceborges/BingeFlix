# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{email: "Demo User", password: 'goodpassword'}])

movies = Movie.create([{
  title: "Chopt",
  year: 2017,
  blurb: "The best cooking competition in America",
  image_url: "https://i.imgur.com/8YXXp42.jpg",
  video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517522776/chopping_food_da8avs.mp4"},
  {
    title: "Best Friend",
    year: 2015,
    blurb: "How did our four-legged bestie evolve from the savage wolf?",
    image_url: "",
    video_url: ""
  },
  {
    title: "Your Brain",
    year: 2011,
    blurb: "An in-depth look at the evolution of the human brain",
    image_url: "",
    video_url: ""
  },
  {
    title: "Puppet Show",
    year: 2009,
    blurb: "Hilarious puppets doing nothing but living and loving life",
    image_url: "",
    video_url: ""
  },
  {
    title: "Witch Town",
    year: 2010,
    blurb: "The award-winning drama about a town full of witches who lead double lives",
    image_url: "",
    video_url: ""
  },
  {
    title: "Seeking Soulmate",
    year: 2013,
    blurb: "Young people attempt to find love off the web",
    image_url: "",
    video_url: ""
  }
  ])

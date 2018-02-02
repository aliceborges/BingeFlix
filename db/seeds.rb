# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{email: "Demo User", password: 'goodpassword'}])

movies = Movie.create([{
    title: "The Mighty Avocado",
    year: 2017,
    blurb: "Learn about the history and the healing powers of this green super food",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517562206/the_mighty_avocado_fgjkrw.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517559820/the_mighty_avocado_h4dd5r.mp4"
  },
  {
    title: "Chopt",
    year: 2017,
    blurb: "The best cooking competition in America",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517542229/Chopt_rti3y0.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542186/chopt_c7vlkb.mp4"},
  {
    title: "Best Friend",
    year: 2015,
    blurb: "How did our four-legged bestie evolve from the savage wolf?",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517542228/best_friend_pqsepo.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542097/best_friend_jzq8wh.mp4"
  },
  {
    title: "Your Brain",
    year: 2011,
    blurb: "An in-depth look at the evolution of the human brain",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517542504/your_brain_bfn58w.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542195/your_brain_fbeam5.mp4"
  },
  {
    title: "Puppet Show",
    year: 2009,
    blurb: "Hilarious puppets doing nothing but living and loving life",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517542229/puppet_show_wfqpku.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542210/puppet_show_-_1697_w69oas.mp4"
  },
  {
    title: "Witch Town",
    year: 2010,
    blurb: "The award-winning drama about a town full of witches who lead double lives",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517542229/witch_town_u0bugl.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542174/witch_town_ozeygy.mp4"
  },
  {
    title: "Seeking Soulmate",
    year: 2013,
    blurb: "Young people attempt to find love off the web",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/e_auto_contrast/v1517558025/seeking-soulmate_baob0s.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542215/seeking_soulmate_g3oswu.mp4"
  },
  {
    title: "Puss in Boot",
    year: 2013,
    blurb: "A litte cat takes on a big adventure",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/e_auto_contrast/v1517558024/puss_in_boots_ao0aqc.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558185/puss_in_boots_mp82xv.mp4"
  },
  {
    title: "Happy Feet",
    year: "The world of professional power walkers",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/e_auto_contrast/v1517558024/happy_feet_xdlirp.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558112/happy_feet_bb6ifj.mp4"
  },
  {
    title: "Baking Bread",
    blurb: "A high school chemistry teacher recently diagnosed with cancer supports his family the only way he knows how: baking bread",
    year: 2007,
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517558024/baking_bread_xyuavn.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558186/baking_bread_pklizk.mp4"
  },
  {
    title: "20/20 Rock",
    year: 2006,
    blurb: "Enter the opulent world of Hollywood's wealthiest optitians",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517558024/20_20_rock_rmxhrf.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558060/20_20_rock_zezixn.mp4"
  },
  {
    title: "The Fresh Prince of Bunckingham Palace",
    year: 2009,
    blurb: "He's a prince and didn't even know it. Watch him shake things up in Westminster",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517558025/the_fresh_prince_of_buckingham_palace_qkgzap.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558091/the-fresh-prince-of-buckingham-palace_evwe5v.mp4"
  },
  {
    title: "Sabrina the Teenage Snitch",
    year: 2007,
    blurb: "Watch as Sabrina learns to navigate her new life in a youth detention center",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517558023/sabrina_the_teenage_snitch_evhi7l.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558150/sabrina_the_teenage_snitch_d1vckp.mp4"
  },
  {
    title: "Postmodern Family",
    year: 2011,
    blurb: "A family of French postmodernists just living life the only way they know how",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517558023/postmodern-family_lreu5j.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558090/postmodern-family_fjbais.mp4"
  }
  ])

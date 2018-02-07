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
    blurb: "Learn about the healing powers of this tasty superfood",
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
    blurb: "How did our four-legged bestie evolve from a savage wolf?",
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
    blurb: "The award-winning drama about a town full of witches leading double lives",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517542229/witch_town_u0bugl.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542174/witch_town_ozeygy.mp4"
  },
  {
    title: "Seeking Soulmate",
    year: 2013,
    blurb: "Young people attempt to find love OFF the web",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/e_auto_contrast/v1517558025/seeking-soulmate_baob0s.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517542215/seeking_soulmate_g3oswu.mp4"
  },
  {
    title: "Puss in Boots",
    year: 2013,
    blurb: "A litte cat takes on a big adventure",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/e_auto_contrast/v1517558024/puss_in_boots_ao0aqc.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558185/puss_in_boots_mp82xv.mp4"
  },
  {
    title: "Happy Feet",
    year: 2006,
    blurb: "Enter the world of professional power walkers",
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
    blurb: "A family of French postmodernists living life the only way they know how",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517558023/postmodern-family_lreu5j.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517558090/postmodern-family_fjbais.mp4"
  },
  {
    title: "2018",
    year: 2018,
    blurb: "It's the end of the world as we know it. Or is it a new beginning?",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517803970/2018_ob6d5f.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517804063/2018_g4ip6h.mp4"
  },
  {
    title: "Ghost Town",
    year: 2017,
    blurb: "Learn about Casper's backstory and how he got the big part.",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517803977/ghost-town_q39thq.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517804074/ghost-town_ehrhj2.mp4"
  },
  {
    title: "It's a Snoopy Halloween",
    year: 2012,
    blurb: "Come trick-or-treating with the whole Peanuts gang. Hold on to your socks.",
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517803971/its-a-snoopy-halloween_sftrnt.png",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517804077/It_s_a_Snoopy_Halloween_lliftb.mp4"
  },
  {
    title: "Manhattan Medium",
    blurb: "Communicating with the dead of the Upper East Side",
    year: 2009,
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517803975/manhattan-medium_xpthf1.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517804083/manhattan-medium_ufy51f.mp4"
  },
  {
    title: "Super Moon",
    blurb: "Bill Nye the Science Guy stars in his first horror film.",
    year: 2008,
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517803970/super-moon_dmskb6.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517804099/super-moon_dum5nv.mp4"
  },
  {
    title: "Two Rich Girls",
    blurb: "It's not all a cakewalk. Follow the immense struggles of the top 1%",
    year: 2006,
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517805735/two-rich-girls_cceaqk.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517805517/two-rich-girls_ienc1h.mp4"
  },
  {
    title: "The Song That Changed the World",
    blurb: "The title says it all",
    year: 2016,
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517805734/the-song-that-changed-the-world_enlqr3.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517805577/the-song-that-changed-the-world_wozpqi.mp4"
  },
  {
    title: "23 Minutes in Santorini",
    blurb: "Contestants are placed in beautiful Santorini with 23 minutes to find a spouse",
    year: 2018,
    image_url: "http://res.cloudinary.com/dnr7kz5ge/image/upload/v1517805734/23-minutes-in-santorini_bsbcai.jpg",
    video_url: "http://res.cloudinary.com/dnr7kz5ge/video/upload/v1517805547/23-minutes-in-santorini_fsxhao.mp4"
  }
  ])

genres = Genre.create([
  {
    name: "Binge-worthy TV Shows"
  },
  {
    name: "BingeFlix Originals"
  },
  {
    name: "Movies"
  },
  {
    name: "Best cult comedies"
  },
  {
    name: "Best new fall dramas"
  },
  {
    name: "Classic horror"
  }
  ])

  genre_movies = GenreMovie.create([
    {
      movie_id: 1, # The Mighty Avocado
      genre_id: 2

    },
    {
      movie_id: 1,
      genre_id: 3

    },
    {
      movie_id: 1,
      genre_id: 8
    },
    {
      movie_id: 2, # Chopt
      genre_id: 5
    },
    {
      movie_id: 3, #Best Friend
      genre_id: 3
    },
    {
      movie_id: 3,
      genre_id: 6
    },
    {
      movie_id: 3,
      genre_id: 9
    },
    {
      movie_id: 4, #Your Brain
      genre_id: 3
    },
    {
      movie_id: 4,
      genre_id: 9
    },
    {
      movie_id: 5, #Puppet Show
      genre_id: 1
    },
    {
      movie_id: 5,
      genre_id: 2
    },
    {
      movie_id: 5,
      genre_id: 4
    },
    {
      movie_id: 6, #Witch Town
      genre_id: 1
    },
    {
      movie_id: 6,
      genre_id: 5
    },
    {
      movie_id: 6,
      genre_id: 6
    },
    {
      movie_id: 7, #Seeking Soulmate
      genre_id: 1
    },
    {
      movie_id: 7,
      genre_id: 5
    },
    {
      movie_id: 7,
      genre_id: 8
    },
    {
      movie_id: 8, #Puss in Boots
      genre_id: 3
    },
    {
      movie_id: 8,
      genre_id: 4
    },
    {
      movie_id: 8,
      genre_id: 5
    },
    {
      movie_id: 8,
      genre_id: 2
    },
    {
      movie_id: 9, #Happy Feet
      genre_id: 1
    },
    {
      movie_id: 9,
      genre_id: 2
    },
    {
      movie_id: 9,
      genre_id: 9
    },
    {
      movie_id: 10, #Baking Bread
      genre_id: 1
    },
    {
      movie_id: 10,
      genre_id: 2
    },
    {
      movie_id: 10,
      genre_id: 9
    },
    {
      movie_id: 11, #20/20 Rock
      genre_id: 1
    },
    {
      movie_id: 11,
      genre_id: 5
    },
    {
      movie_id: 12, # The Fresh Prince
      genre_id: 1
    },
    {
      movie_id: 12,
      genre_id: 4
    },
    {
      movie_id: 12,
      genre_id: 5
    },
    {
      movie_id: 13, #Sabrina
      genre_id: 1
    },
    {
      movie_id: 13,
      genre_id: 4
    },
    {
      movie_id: 14,
      genre_id: 1
    },
    {
      movie_id: 14,
      genre_id: 2
    },
    {
      movie_id: 14, #Postmodern Family
      genre_id: 6
    },
    {
      movie_id: 14,
      genre_id: 5
    },
    {
      movie_id: 15, #2018
      genre_id: 1
    },
    {
      movie_id: 15,
      genre_id: 4
    },
    {
      movie_id: 15,
      genre_id: 5
    },
    {
      movie_id: 15,
      genre_id: 8
    },
    {
      movie_id: 16, #Ghost Town
      genre_id: 2
    },
    {
      movie_id: 16,
      genre_id: 3
    },
    {
      movie_id: 16,
      genre_id: 6
    },
    {
      movie_id: 17, # It's a Snoopy Halloween
      genre_id: 3
    },
    {
      movie_id: 17,
      genre_id: 4
    },
    {
      movie_id: 17,
      genre_id: 6
    },
    {
      movie_id: 18, # Manhattan Medium
      genre_id: 3
    },
    {
      movie_id: 18,
      genre_id: 6
    },
    {
      movie_id: 19,
      genre_id: 1
    },
    {
      movie_id: 19, # Super Moon
      genre_id: 5
    },
    {
      movie_id: 19,
      genre_id: 6
    },
    {
      movie_id: 20,
      genre_id: 2
    },
    {
      movie_id: 20, #Two Rich Girls
      genre_id: 3
    },
    {
      movie_id: 20,
      genre_id: 6
    },
    {
      movie_id: 21, #The Song that Changed the World
      genre_id: 1
    },
    {
      movie_id: 21,
      genre_id: 2
    },
    {
      movie_id: 21,
      genre_id: 4
    },
    {
      movie_id: 22, # 23 Minutes in Santorini
      genre_id: 2
    },
    {
      movie_id: 22,
      genre_id: 3
    },
    {
      movie_id: 22,
      genre_id: 4
    },
    {
      movie_id: 22,
      genre_id: 5
    },
    {
      movie_id: 22,
      genre_id: 6
    },
    {
      movie_id: 23,
      genre_id: 1
    },
    {
      movie_id: 23,
      genre_id: 2
    },
    {
      movie_id: 23,
      genre_id: 4
    },
    {
      movie_id: 23,
      genre_id: 5
    }
  ])

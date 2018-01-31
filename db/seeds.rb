# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{email: "Demo User", password: 'goodpassword'},
                  {email: 'avocadotheblackcat', password:'avocado'}])


movies = Movie.create([{
  title: "The Mighty Avocado",
  year: 2017,
  blurb: "Learn about the history and the healing powers of this green super food",
  image_url: "/assets/images/avocado.jpg"},
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # },
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # },
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # },
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # },
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # },
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # },
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # },
  # {
  #   title: "The Mighty Avocado",
  #   year: 2017,
  #   blurb: "Learn about the history and the healing powers of this green super food",
  #   image_url: "/assets/images/avocado.jpg"
  # }
])

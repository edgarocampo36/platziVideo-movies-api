const moviesMock = [
  {
    id: "4477ac8f-2afd-4d8c-b9b4-23eda4a7a591",
    title: "Cry Wolf",
    year: 1993,
    cover: "http://dummyimage.com/114x234.jpg/dddddd/000000",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    duration: 148,
    contentRating: "G",
    source: "http://yandex.ru/integer/pede/justo/lacinia/eget/tincidunt.png",
    tags: "Crime|Drama|Mystery|Thriller",
  },
  {
    id: "c06ca820-1a1d-4c1d-9cc5-46d094a3ff4e",
    title: "Moulin Rouge",
    year: 2010,
    cover: "http://dummyimage.com/201x174.png/cc0000/ffffff",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    duration: 227,
    contentRating: "PG-13",
    source: "http://google.ca/mauris.xml",
    tags: "Drama|Musical|Romance",
  },
  {
    id: "f61e01a3-e8b9-48e2-a7ca-dc901188186b",
    title: "The Aggression Scale",
    year: 2010,
    cover: "http://dummyimage.com/206x228.bmp/ff4444/ffffff",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    duration: 42,
    contentRating: "PG",
    source: "https://ibm.com/nibh.jpg",
    tags: "Action|Crime|Thriller",
  },
  {
    id: "0e801328-115a-4c6e-99a5-82b01b3b207a",
    title: "Wanted! (Nachbarinnen)",
    year: 2006,
    cover: "http://dummyimage.com/219x201.png/ff4444/ffffff",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    duration: 124,
    contentRating: "PG-13",
    source: "https://unc.edu/lacus.html",
    tags: "Drama",
  },
  {
    id: "25cc94bd-2a18-4199-bb20-df110d57ed87",
    title: "Last Summer of La Boyita, The (El último verano de la Boyita)",
    year: 2009,
    cover: "http://dummyimage.com/250x120.jpg/ff4444/ffffff",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    duration: 243,
    contentRating: "R",
    source: "https://thetimes.co.uk/sem/mauris/laoreet.aspx",
    tags: "Drama",
  },
  {
    id: "66eb2814-75db-4ab7-bedc-f17f99c02de2",
    title: "Man Without a Past, The (Mies vailla menneisyyttä)",
    year: 2002,
    cover: "http://dummyimage.com/219x207.png/cc0000/ffffff",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    duration: 276,
    contentRating: "R",
    source: "https://omniture.com/ac.jsp",
    tags: "Comedy|Crime|Drama",
  },
  {
    id: "a45be117-e3d1-4d06-8337-2d30647f1981",
    title: "Death Proof",
    year: 1994,
    cover: "http://dummyimage.com/194x225.bmp/dddddd/000000",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    duration: 81,
    contentRating: "PG",
    source: "https://devhub.com/nulla/nunc.json",
    tags: "Action|Adventure|Crime|Horror|Thriller",
  },
  {
    id: "2dc54c68-31e4-405b-a852-1e681a3fb52c",
    title:
      "Godzilla: Tokyo S.O.S. (Gojira tai Mosura tai Mekagojira: Tôkyô S.O.S.)",
    year: 2005,
    cover: "http://dummyimage.com/127x226.jpg/dddddd/000000",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    duration: 108,
    contentRating: "PG",
    source: "https://wikispaces.com/morbi/non/quam.xml",
    tags: "Action|Fantasy|Sci-Fi",
  },
  {
    id: "830b4765-5228-43d8-b34b-0847589d15a8",
    title: "Masterminds",
    year: 2007,
    cover: "http://dummyimage.com/210x133.jpg/5fa2dd/ffffff",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    duration: 210,
    contentRating: "G",
    source: "http://drupal.org/orci/luctus.html",
    tags: "Action|Comedy|Thriller",
  },
  {
    id: "535285fa-532b-4f77-a6f5-d2e2bdad2579",
    title: "Encore",
    year: 2009,
    cover: "http://dummyimage.com/241x177.jpg/dddddd/000000",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    duration: 43,
    contentRating: "NC-17",
    source: "http://miibeian.gov.cn/blandit/lacinia/erat/vestibulum/sed.js",
    tags: "Comedy|Drama",
  },
  {
    id: "b5faf5c8-196e-45cd-874e-e33310c952cd",
    title: "Blackball",
    year: 2001,
    cover: "http://dummyimage.com/110x237.jpg/ff4444/ffffff",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    duration: 184,
    contentRating: "NC-17",
    source: "https://blogger.com/at/nunc/commodo/placerat.html",
    tags: "Comedy|Drama",
  },
  {
    id: "0e01f67f-88f4-4813-9231-c146e633c8b5",
    title: "Virgin Territory",
    year: 2002,
    cover: "http://dummyimage.com/170x120.bmp/5fa2dd/ffffff",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    duration: 93,
    contentRating: "G",
    source: "http://mapy.cz/magna.jsp",
    tags: "Adventure|Comedy|Romance",
  },
  {
    id: "42c17a23-0f0e-4baa-a368-a9a99eb75429",
    title: "Generation Um...",
    year: 1991,
    cover: "http://dummyimage.com/227x156.bmp/ff4444/ffffff",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    duration: 209,
    contentRating: "G",
    source: "https://google.co.uk/ante/ipsum/primis/in.aspx",
    tags: "Drama",
  },
  {
    id: "05daa28c-6617-4192-b3c8-d4949f85d3a6",
    title: "Raging Bull",
    year: 2004,
    cover: "http://dummyimage.com/150x181.bmp/dddddd/000000",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    duration: 66,
    contentRating: "R",
    source: "http://sakura.ne.jp/sed/interdum.aspx",
    tags: "Drama",
  },
  {
    id: "233ee3df-b138-4638-b2b5-306818c92804",
    title: "Happy, Happy (Sykt lykkelig)",
    year: 2001,
    cover: "http://dummyimage.com/117x136.png/ff4444/ffffff",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    duration: 90,
    contentRating: "R",
    source:
      "http://biblegateway.com/placerat/ante/nulla/justo/aliquam/quis.png",
    tags: "Comedy|Drama",
  },
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, filteredMoviesMock, MoviesServiceMock };

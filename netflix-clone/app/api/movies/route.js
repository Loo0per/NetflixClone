export async function GET() {
    const movies = [
        {
            id: 1,
            title: "Asterix & Obelix: The Big Fight",
            poster: "/images/movie1.jpg",
          },
          {
            id: 2,
            title: "Dragon",
            poster: "/images/movie2.jpg",
          },
          {
            id: 3,
            title: "Exterritorial",
            poster: "/images/movie3.jpg",
          },
          {
            id: 4,
            title: "Squid Game",
            poster: "/images/movie4.jpg",
          },
          {
            id: 5,
            title: "Havoc",
            poster: "/images/movie5.jpg",
          },
    ];
  
    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
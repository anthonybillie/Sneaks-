
  new Vue({
        el: "#app",
        delimiters: ["[[", "]]"],
        data: {
          shoes: [],
          header: "Find My Sneaks",
          search: "",
          brands: "",
          profile: 1,
          next:1,
          previous:'',    
        },
        methods: {
          homeSneaks() {
            this.profile = 1
            fetch(
                "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=20&page=1",
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
                  "X-RapidAPI-Key":
                    "1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                this.shoes = data.results;
              });
          },
          upcomingSneaks() {
            this.profile = 1
            fetch(
                "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100&releaseDate=gte:2022-06-01",
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
                  "X-RapidAPI-Key":
                    "1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                this.shoes = data.results;
              });
          },
          brandSneaks(brand) {
            this.profile = 1
            fetch(
              `https://the-sneaker-database.p.rapidapi.com/search?limit=100&query=${brand}`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
                  "X-RapidAPI-Key":
                    "1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                this.shoes = data.results;
                this.header = brand;
              })
              .catch((err) => console.error(err));
          }, //END OF BRAND SNEAKS
          // NEXT PAGE 
          nextPage(next){
            this.profile= 1
            this.next= next +=1
            fetch(
                `https://the-sneaker-database.p.rapidapi.com/sneakers?limit=20&page=${next}`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
                  "X-RapidAPI-Key":
                    "1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                this.shoes = data.results;
              });
          },
          // previous page
          previousPage(previous){
            this.profile= 1
            this.previous= this.next -=1
            fetch(
                `https://the-sneaker-database.p.rapidapi.com/sneakers?limit=20&page=${previous}`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
                  "X-RapidAPI-Key":
                    "1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                this.shoes = data.results;
              });
          },
  // search sneaks
          searchSneaks(search) {
            this.profile = 1
            fetch(
              `https://the-sneaker-database.p.rapidapi.com/search?limit=50&query=${search}`,
              {
                method: "GET",
                headers: {
                  "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
                  "X-RapidAPI-Key":
                    "1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                this.shoes = data.results;
                this.search='';
              })
              .catch((err) => console.error(err));
          },
          //END OF search

          allBrands() {
            this.profile = 1
            fetch("https://the-sneaker-database.p.rapidapi.com/brands", {
              method: "GET",
              headers: {
                "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
                "X-RapidAPI-Key":
                  "1917ad3211msh4712239feeda776p1e22c8jsndc955214cb00",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                this.brands = data.results;
              })
              .catch((err) => console.error(err));

            // END OF ALL BRANDS
          },
          profileSwitch(){
            this.profile = 3
          },
          favProfile(){
            this.profile = 2
          }
        },
        created: function () {
           this.homeSneaks();
           this.allBrands();
        },
      });
   
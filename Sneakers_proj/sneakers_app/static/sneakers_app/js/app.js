
  new Vue({
        el: "#app",
        delimiters: ["[[", "]]"],
        data: {
          shoes: [],
          header: "Find My Sneaks",
          search: "",
          brands: "",
          profile: true,
          next: '2',    
        },
        methods: {
          homeSneaks() {
            this.profile = true
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
            this.profile = true
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
            this.profile = true
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
            this.profile=true
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
  // search sneaks
          searchSneaks(search) {
            this.profile = true
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
            this.profile = true
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
            console.log('profile switch', this.profile)
            this.profile = false
            console.log('profile switch', this.profile)
          },
          
        },
        created: function () {
           this.homeSneaks();
           this.allBrands();
        },
      });
   

   new Vue({
        el: "#app",
        delimiters: ["[[", "]]"],
        data: {
          shoes: [],
          header: "Find My Sneaks",
          search: "",
          brands: "",
          profile: true,    
        },
        methods: {
          homeSneaks() {
            fetch(
                "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100&sort=releaseYear:asc",
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
          searchSneaks(search) {
            
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
              })
              .catch((err) => console.error(err));
          },
          //END OF search

          allBrands() {
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
            this.profile = 'false'
          },
          
        },
        created: function () {
           this.homeSneaks();
           this.allBrands();
        },
      });
   
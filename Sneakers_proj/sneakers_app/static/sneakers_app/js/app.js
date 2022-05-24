
   new Vue({
        el: "#app",
        delimiters: ["[[", "]]"],
        data: {
          shoes: [],
          header: "Find My Sneaks",
          search: "",
          brands: "",
          mainPage:'true',
        },
        methods: {
          homeSneaks() {
            fetch(
              "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100&sort=retailPrice:desc",
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
                // this.header = "Home Sneaks";
              });
          },
          brandSneaks(brand) {
            this.mainPage=true,
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
            this.mainPage=true,
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
          clearSearch() {
            this.search = "";
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
          


        },
        created: function () {
          this.homeSneaks();
          // this.brandSneaks();
          this.allBrands();
        },
      });
   
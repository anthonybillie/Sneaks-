
 
  
  let vm = new Vue({
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
          favorite:[], 
          csrf_token:"",
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
                "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100&releaseDate=gte:2022-06-07&sort=releaseDate:asc",
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
            axios({
              method:'get',
              url:'/favorite/'
            }).then(response=>{
             this.favorite = response.data
            })
          },
       
        favShoe(shoe){
          axios({
            method:'post',
            url:'/favorite/',
            headers: {
              'X-CSRFToken':this.csrf_token,
            },
            data: {
              "name": shoe.name,
              "brand": shoe.brand,
              "releaseDate": shoe.releaseDate,
              "retailPrice": shoe.retailPrice,
              "flightClub": shoe.links.flightClub,
              "goat": shoe.links.goat,
              // "image":shoe.image.thumbnail
            }
          }).then(response=>{
            console.log('RESPONSE',response.data)
          })
          .catch(error=>{
            console.log('Error', error.response)
          })
        },
        delFavShoe(fav){
          this.profile = 2
          axios.delete(`/favorite/${fav.id}`,{
            headers:{
              'X-CSRFToken':this.csrf_token
            }
          })
             .then(response => {
                 console.log();

             })
             .catch(function (error) {
                console.log(error.response)
             })
        },
        },
        created: function () {
           this.homeSneaks();
           this.allBrands();
        },
        mounted: function(){
          this.csrf_token = document.querySelector("input[name=csrfmiddlewaretoken]").value
        },
      });
   
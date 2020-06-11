const source = document.getElementById('carpentor').innerHTML;

const template = Handlebars.compile(source);

const context = {
    carpentorArray: [
        {
            name: "Basin-Sink",
            services: [
                {
                    name: "Waste Pipe",
                    price: "Rs. #",
                    text: "Includes All",
                    image:"../img/pigeon-install.jpg"
                },
                {
                    name: "Washbasin repair",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Wash Basin & Sink Installation",
                    price: "Rs. #",
                    text: "Doesn't includes Roof Drilling"
                }
            ]
        },
        {
            name: "Bath-Fitting",
            services: [
                {
                    name: "Bath Fitting Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Shower Installation- Ceiling Mounted",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Shower Installation- Wall Mounted or Handled",
                    price: "Rs. #",
                    text: "Includes All"
                }
                
            ]
        },
        {
            name: "Blockage",
            services: [
                {
                    name: "Balcony Pipe",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Drainage Pipe(Overground)",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Drainage Pipe(Underground)",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Toilet Pot",
                    price: "Rs. #",
                    text: "Includes all"
                }
            ]
        },
        {
            name: "Tap-Mixer",
            services: [
                {
                    name: "Hot & Cold Water Mixer Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Hot & Cold Water Mixer Repair",
                    price: "Rs. #",
                    text: "For Wooden Doors Only"
                },
                {
                    name: "Tap Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Tap Repair",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Tap Replacement",
                    price: "Rs. #",
                    text: "Includes All"
                }
            ]
        }
        
]};

const compiledHtml = template(context);

const container = document.getElementById('mainContainer');
container.innerHTML = compiledHtml;
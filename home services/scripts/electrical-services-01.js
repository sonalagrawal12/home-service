const source = document.getElementById('carpentor').innerHTML;

const template = Handlebars.compile(source);

const context = {
    carpentorArray: [
        {
            name: "Switch-Socket",
            services: [
                {
                    name: "AC Switchbox Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Switchboard Installation",
                    price: "Rs. #",
                    text: "Upto 6 switches"
                },
                {
                    name: "Switchboard Repair",
                    price: "Rs. #",
                    text: "Upto 6 switches"
                },
                {
                    name: "Switch/Socket Replacement",
                    price: "Rs. #",
                    text: "Includes All"
                }
            ]
        },
        {
            name: "Fan",
            services: [
                {
                    name: "Ceiling Fan Regulator Replacement",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Decorative Ceiling Fan Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Fan Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Fan Repair",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Fan Replacement",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Fan Uninstallation",
                    price: "Rs. #",
                    text: "Includes All"
                }
            ]
        },
        {
            name: "Light",
            services: [
                {
                    name: "Bulbs/Tubes Replacement",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Decorative Wall Light/Ceiling Light",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Tubelight or Bed Lamp",
                    price: "Rs. #",
                    text: "Includes all"
                }
                
            ]
        },
        {
            name: "MCB-Fuse",
            services: [
                {
                    name: "3 Phase Changeover Switch Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Fuse Replacemnet",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Single Pole MCB Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Sub meter Installation",
                    price: "Rs. #",
                    text: "Includes All"
                }
            ]
        },
        {
            name: "Wiring",
            services: [
                {
                    name: "Internal Wiring",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "Casing Wiring",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Wiring without casing",
                    price: "Rs. #",
                    text: "Includes all"
                }
                
            ]
        }
        
]};

const compiledHtml = template(context);

const container = document.getElementById('mainContainer');
container.innerHTML = compiledHtml;
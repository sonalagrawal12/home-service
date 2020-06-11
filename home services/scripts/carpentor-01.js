const source = document.getElementById('carpentor').innerHTML;

const template = Handlebars.compile(source);

const context = {
    carpentorArray: [
        {
            name: "Balcony",
            services: [
                {
                    name: "Pigeon Net Installation",
                    price: "Rs. #",
                    text: "Rs. # for every square feet.",
                    image:"../img/pigeon-install.jpg"
                },
                {
                    name: "Clothes Ceiling Hanger Installation",
                    price: "Rs. #",
                    text: "Includes Roof Drilling"
                },
                {
                    name: "Clothes Wall Hanger Installation",
                    price: "Rs. #",
                    text: "Doesn't includes Roof Drilling"
                }
            ]
        },
        {
            name: "Bed",
            services: [
                {
                    name: "Bed Support Repair",
                    price: "Rs. #",
                    text: "Includes whole support repair"
                },
                {
                    name: "Bed Legs/Headboard Repair",
                    price: "Rs. #",
                    text: "Includes repair of either single leg or headboard"
                }
            ]
        },
        {
            name: "Cupboard-Drawer",
            services: [
                {
                    name: "Cubboard Hinge",
                    price: "Rs. #",
                    text: "Installation/Repair"
                },
                {
                    name: "Channel Repair",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Channel Replacement",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Handle Replacement",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Lock Installation",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Lock Replacement",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Lock Repair",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Sliding Door Repair",
                    price: "Rs. #",
                    text: "Includes all"
                },
                {
                    name: "Shelf Installation",
                    price: "Rs. #",
                    text: "Wooden/Glass Shelf Installation using clamps"
                }
                
            ]
        },
        {
            name: "Door",
            services: [
                {
                    name: "Accessory Installation",
                    price: "Rs. #",
                    text: "Any one of Latch,Chain,Stopper,Magnet"
                },
                {
                    name: "Door Installation",
                    price: "Rs. #",
                    text: "For Wooden Doors Only"
                }
            ]
        }
        
]};

const compiledHtml = template(context);

const container = document.getElementById('mainContainer');
container.innerHTML = compiledHtml;
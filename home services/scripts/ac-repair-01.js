const source = document.getElementById('carpentor').innerHTML;

const template = Handlebars.compile(source);

const context = {
    carpentorArray: [
        {
            name: "AC-Service-Repair",
            services: [
                {
                    name: "AC General Cleaning",
                    price: "Rs. #",
                    text: "Includes All",
                },
                {
                    name: "AC Deep Cleaning",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "AC Repair & Service",
                    price: "Rs. #",
                    text: "Per Visit"
                }
            ]
        },
        {
            name: "AC-Installation-Uninstallation",
            services: [
                {
                    name: "AC Installation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "AC Uninstallation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "AC Uninstallation & Intallation",
                    price: "Rs. #",
                    text: "Includes All"
                },
                {
                    name: "AC Gas Filling",
                    price: "Rs. #",
                    text: "Includes All"
                }
            ]
        }
]};

const compiledHtml = template(context);

const container = document.getElementById('mainContainer');
container.innerHTML = compiledHtml;
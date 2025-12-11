document.addEventListener('DOMContentLoaded', function () {
    const hotspots = document.querySelectorAll('.hotspot');
    const popups = document.querySelectorAll('.popup');

    hotspots.forEach(spot => {
        // mouse on the map
        spot.addEventListener('mouseenter', function () {
            
            popups.forEach(p => p.style.display = 'none');

            
            const targetId = spot.getAttribute('data-target');
            const targetPopup = document.getElementById(targetId);

            
            if (targetPopup) {
                targetPopup.style.display = 'block';
                
                targetPopup.style.top = spot.style.top;
                targetPopup.style.left = spot.style.left;
                
                targetPopup.style.transform = 'translate(-50%, -120%)';
            }
        });

        // leave to mouse
        spot.addEventListener('mouseleave', function () {
            const targetId = spot.getAttribute('data-target');
            const targetPopup = document.getElementById(targetId);
            
            if (targetPopup) {
                targetPopup.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const countryButtons = document.querySelectorAll('.country-button');
    const countryImg = document.getElementById('country-img');
    const countryName = document.getElementById('country-name');
    const countryInfo = document.getElementById('country-info');

    const countryData = {
        china: {
            image: 'images/china.png',
            name: 'China',
            description: 'This porcelain piece is a blue-and-white porcelain from the Ming Dynasty in China. Blue-and-white porcelain is a distinctive style characterized by blue patterns painted on white ceramic. It is one of the most iconic and celebrated styles in Chinese ceramics. This piece features floral patterns and cloud motifs, reflecting a harmony with nature. During the Ming Dynasty, blue-and-white porcelain was used by the imperial court and later exported to Europe and the Middle East, greatly influencing the history of global ceramics. This piece is an excellent example of Chinese blue-and-white porcelain, showcasing the technological advancements and cultural significance of the Ming era. It represents the beauty and refinement of Chinese porcelain craftsmanship.'
        },
        japan: {
            image: 'images/japan.png',
            name: 'Japan',
            description: "This porcelain piece is an example of Arita ware, a style of Japanese porcelain that was influenced by Chinese blue-and-white porcelain but developed with a distinct Japanese aesthetic. Produced in Arita, Japan, during the early 17th century, Arita ware features the traditional blue-and-white design with floral motifs and scenic landscapes inspired by nature. While it follows the basic principles of Chinese blue-and-white porcelain, it incorporates Japanese cultural elements and naturalistic designs, making it unique in its approach to porcelain art. The Arita ware is a product of Japan's adaptation of Chinese porcelain techniques, but it diverges from Chinese traditions by emphasizing subtle and simple color schemes and more serene, minimalist designs. The export of Arita ware to Europe and the Middle East made it a key player in the global porcelain trade, and it remains an essential part of Japan's ceramic heritage today."
        },
        turkey: {
            image: 'images/turkey.png',
            name: 'Turkey',
            description: 'Turkey’s Iznik pottery, influenced by Chinese blue-and-white porcelain, became a symbol of Ottoman ceramics, blending Eastern and Western styles. The style incorporates Chinese floral patterns and blue-and-white designs, but with a distinct Turkish flair. During the 16th century, Iznik ware flourished under the Ottoman Empire and became an iconic symbol of Ottoman ceramics. It was heavily influenced by Chinese porcelain but evolved into a unique style that blended Eastern traditions with Western tastes, making it an important piece of cultural exchange between East and West.'
        },
        netherlands: {
            image: 'images/netherland.png',
            name: 'Netherlands',
            description: 'Delftware from the Netherlands was directly influenced by Chinese porcelain and became a popular style in Europe during the 17th century. The Dutch, particularly in the city of Delft, began producing blue-and-white porcelain in imitation of the highly prized Chinese porcelain that was imported into Europe. Delftware often incorporated Chinese-inspired motifs like dragons, flowers, and landscapes, but with European adaptations. The popularity of Delftware grew as it was seen as a luxury item and became one of the most prominent forms of ceramic artistry in Europe during the Dutch Golden Age.'
        },
        england: {
            image: 'images/england.png',
            name: 'England',
            description: 'In England, Chinese porcelain influenced the development of English pottery, especially during the 18th century with the rise of porcelain manufacturing. English porcelain manufacturers, such as Wedgwood, were greatly influenced by Chinese blue-and-white porcelain, and many of the early English porcelain pieces were modeled after Chinese styles. During the 18th century, Chinoiserie—a style that incorporated Chinese decorative arts—became very fashionable among the English aristocracy. The English porcelain industry flourished with the help of Chinese influences, but eventually English manufacturers developed their own distinct styles.'
        },
        mexico: {
            image: 'images/mexico.png',
            name: 'Mexico',
            description: 'Mexican Talavera pottery was influenced by Chinese porcelain, with bright colors and floral patterns being integrated into the local traditions. Talavera pottery, especially from the Puebla region of Mexico, was deeply influenced by Chinese blue-and-white porcelain. This influence is most evident in the use of blue-and-white designs, but bright colors like red, yellow, and green were added to suit Mexican tastes. Over time, Talavera pottery evolved into a distinct Mexican style, characterized by bold floral motifs, geometric patterns, and vibrant colors that still reflect the influence of Chinese porcelain, especially in its intricate designs and craftsmanship.'
        },
        india: {
            image: 'images/india.png',
            name: 'India',
            description: "India's porcelain has been influenced by Chinese blue-and-white porcelain, which spread across the region through trade routes and cultural exchange. India adopted Chinese blue-and-white porcelain techniques, blending them with their own artistic traditions. Indian porcelain, especially during the Mughal Empire, was influenced by Chinese designs, with many pieces featuring blue floral patterns and landscape motifs similar to Chinese styles. However, Indian porcelain also incorporated local motifs and designs that reflect India’s rich artistic heritage, making it a fusion of Eastern influences with Indian tradition."
        }
    };

    countryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const country = button.getAttribute('data-country');
            countryImg.src = countryData[country].image;
            countryName.textContent = countryData[country].name;
            countryInfo.textContent = countryData[country].description;
        });
    });
});
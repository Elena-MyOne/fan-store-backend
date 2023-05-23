const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4200;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const data = {
  products: [
    {
      id: 1,
      category: 'Wands',
      faculty: 'Gryffindor',
      name: 'Elder wand',
      image: '../assets/wands/elder-wand.webp',
      length: '15 ins',
      core: 'thestral hair',
      wood: 'elder',
      description:
        'The Elder Wand is one of the most powerful wands in the wizarding world, made of elder wood and containing a core of thestral tail hair. According to legend, it was created by Death himself and whoever possessed it was said to be invincible. It was famously wielded by Albus Dumbledore and then by Harry Potter, who ultimately chose to destroy it.',
      price: 35.0,
      rate: 5.0,
      sale: 0,
    },
    {
      id: 2,
      category: 'Wands',
      name: 'Dolores Umbridge wand',
      faculty: 'Slytherin',
      image: '../assets/wands/dolores-umbridge-wand.webp',
      length: '8 ins',
      core: 'dragon heartstring',
      wood: 'birch',
      description:
        "Dolores Umbridge's wand is made of birch and has a core of dragon heartstring. It is shorter than most wands at only eight inches, reflecting Umbridge's preference for neatness and order. Umbridge is known to have used her wand to cast a variety of dark spells and curses, including the Cruciatus Curse.",
      price: 29.85,
      rate: 4.8,
      sale: 20,
    },
    {
      id: 3,
      category: 'wands',
      name: "Hermione Granger's wand",
      faculty: 'Gryffindor',
      image: '../assets/wands/hermione-granger-wand.webp',
      length: '10 3/4 ins',
      core: 'dragon heartstring',
      wood: 'grapevine',
      description:
        "Hermione Granger's wand is made of grapevine wood and has a core of dragon heartstring. It is known for being particularly good at charms and spells that require a delicate touch, which is fitting for Hermione's studious and precise personality. Hermione is known to have used her wand to cast a wide variety of spells, from levitation to conjuring a Patronus.",
      price: 35.0,
      rate: 4.9,
      sale: 0,
    },
    {
      id: 4,
      category: 'wands',
      name: 'Alastor Moody wand',
      faculty: 'Gryffindor',
      image: '../assets/wands/alastor-moody-wand.webp',
      length: '15 ins',
      core: 'unknown',
      wood: 'unknown',
      description:
        "Alastor Moody's wand is a mystery, as its wood and core are unknown. However, Moody is known to have been an incredibly skilled wizard, and his wand undoubtedly played a role in his many successes as an Auror. After Moody's death, his wand was buried with him.",
      price: 25.99,
      rate: 4.8,
      sale: 20,
    },
    {
      id: 5,
      category: 'wands',
      faculty: 'Beauxbatons',
      name: 'Fleur Delacour wand',
      image: '../assets/wands/fleur-delacour-wand.webp',
      length: '9 1/2 ins',
      core: 'weila hair',
      wood: 'Pink tree',
      description:
        "Fleur Delacour's wand is made of Pink tree wood and has a core of Veela hair. It is particularly good for charms and spells that require a touch of finesse and grace, reflecting Fleur's elegant personality. Fleur is known to have used her wand to cast spells such as the Patronus Charm and the Bubble-Head Charm.",
      price: 33.25,
      rate: 4.6,
      sale: 15,
    },
    {
      id: 6,
      category: 'wands',
      name: 'Cedric Diggory wand',
      faculty: 'Hufflepuff',
      image: '../assets/wands/cedric-diggory-wand.webp',
      length: '12 1/4 ins',
      core: 'unicorn hair',
      wood: 'ash',
      description:
        'The wand of Cedric Diggory is made of ash with a unicorn hair core. It is described as being "pleasantly springy".',
      price: 28.5,
      rate: 4.8,
      sale: 0,
    },
    {
      id: 7,
      category: 'wands',
      name: 'Neville Longbottom wand',
      faculty: 'Gryffindor',
      image: '../assets/wands/neville-longbottom-wand.webp',
      length: '13 ins',
      core: 'unicorn hair',
      wood: 'cherry tree',
      description:
        'The wand of Neville Longbottom is made of cherry wood with a unicorn hair core. It is described as being "quite whippy".',
      price: 29.99,
      rate: 4.9,
      sale: 0,
    },
    {
      id: 8,
      category: 'wands',
      name: 'Quirinus Quirrell wand',
      faculty: 'Ravenclaw',
      image: '../assets/wands/quirinus-quirrell-wand.webp',
      length: '9 ins',
      core: 'unicorn hair',
      wood: 'elder',
      description:
        'A wand made of elder wood and unicorn hair, which was wielded by the duplicitous and treacherous Hogwarts professor Quirinus Quirrell. It is known for being highly effective in the casting of Dark Magic".',
      price: 28.69,
      rate: 4.5,
      sale: 10,
    },
    {
      id: 9,
      category: 'wands',
      faculty: 'Durmstrang',
      name: 'Viktor Krum wand',
      image: '../assets/wands/viktor-krum-wand.png',
      length: '10 1/4 ins',
      core: 'dragon heartstring',
      wood: 'hornbeam',
      description:
        'A wand made of hornbeam wood and dragon heartstring, which was wielded by the skilled and powerful Bulgarian wizard Viktor Krum. It is known for being highly effective in the casting of curses and hexes',
      price: 29.0,
      rate: 4.8,
      sale: 0,
    },
    {
      id: 10,
      category: 'wands',
      faculty: 'Hufflepuff',
      name: 'Mary Cattermole wand',
      image: '../assets/wands/mary-cattermole-wand.webp',
      length: '8 3/4 ins',
      core: 'unicorn hair',
      wood: 'cherry tree',
      description:
        'A wand made of cherry wood and unicorn hair, which was wielded by the timid and fearful Ministry of Magic employee Mary Cattermole. It is known for being highly effective in the casting of protective spells',
      price: 25.5,
      rate: 4.4,
      sale: 30,
    },
    {
      id: 11,
      category: 'wands',
      faculty: 'Ravenclaw',
      name: 'Luna Lovegood wand',
      image: '../assets/wands/luna-lovegood-wand.png',
      length: '12 ins',
      core: 'unicorn hair',
      wood: 'birch',
      description:
        'A wand made of birch wood and unicorn hair, which was wielded by the quirky and eccentric Hogwarts student Luna Lovegood. It is known for being highly effective in the casting of unconventional spells and hexes.',
      price: 29.5,
      rate: 4.8,
      sale: 0,
    },
    {
      id: 12,
      category: 'wands',
      name: 'Bellatrix Lestrange wand',
      faculty: 'Slytherin',
      image: '../assets/wands/bellatrix-lestrange-wand.webp',
      length: '12 3/4 ins',
      core: 'dragon heartstring',
      wood: 'walnut',
      description:
        'A wand made of walnut wood and dragon heartstring, which was wielded by the sadistic and ruthless Death Eater Bellatrix Lestrange. It is known for being highly effective in the casting of the Unforgivable Curses.',
      price: 27.05,
      rate: 4.7,
      sale: 0,
    },
    {
      id: 13,
      category: 'wands',
      faculty: 'Ravenclaw',
      name: 'Gilderoy Lockhart wand',
      image: '../assets/wands/gilderoy-lockhart-wand.png',
      length: '15 ins',
      core: 'thestral hair',
      wood: 'elder',
      description:
        'A wand made of elder wood and Thestral hair, which was wielded by the vain and inept Hogwarts professor Gilderoy Lockhart. It is known for being highly decorative and ornate, but otherwise unremarkable',
      price: 25.99,
      rate: 4.8,
      sale: 5,
    },
    {
      id: 14,
      category: 'wands',
      faculty: 'Gryffindor',
      name: 'Remus Lupin wand',
      image: '../assets/wands/remus_lupin_wand.webp',
      length: '10 1/4 ins',
      core: 'unicorn hair',
      wood: 'cypress',
      description:
        'A wand made of cypress wood and unicorn hair, which was wielded by the kind and compassionate Hogwarts professor Remus Lupin. It is known for being highly effective in the casting of defensive spells.',
      price: 32.85,
      rate: 4.9,
      sale: 0,
    },
    {
      id: 15,
      category: 'wands',
      faculty: 'Slytherin',
      name: 'Draco Malfoy wand',
      image: '../assets/wands/draco-malfoy-wand.webp',
      length: '10 ins',
      core: 'unicorn hair',
      wood: 'hawthorn',
      description:
        ' A wand made of hawthorn wood and unicorn hair, known for its flexibility and suitability for the Dark Arts. It was passed down through generations of the Malfoy family.',
      price: 35.0,
      rate: 5.0,
      sale: 0,
    },
    {
      id: 16,
      category: 'wands',
      name: 'Minerva McGonagall wand',
      faculty: 'Gryffindor',
      image: '../assets/wands/minerva-mcgonagall-wand.webp',
      length: '9 1/2 ins',
      core: 'dragon heartstring',
      wood: 'fir',
      description:
        'A wand is made of fir wood with a dragon heartstring core. It is a sturdy and powerful wand, capable of performing complex magic with precision and skill',
      price: 32.99,
      rate: 4.8,
      sale: 0,
    },
    {
      id: 17,
      category: 'wands',
      faculty: 'Slytherin',
      name: 'Lucius Malfoy wand',
      image: '../assets/wands/lucius_malfoy_wand.webp',
      length: '18 ins',
      core: 'dragon heartstring',
      wood: 'elm',
      description:
        'A wand is made of fir wood with a dragon heartstring core. It is a sturdy and powerful wand, capable of performing complex magic with precision and skill',
      price: 27.85,
      rate: 4.6,
      sale: 0,
    },
    {
      id: 18,
      category: 'wands',
      faculty: 'Gryffindor',
      name: 'Peter Pettigrew wand',
      image: '../assets/wands/peter-pettigrew-wand.webp',
      length: '9 1/4 ins',
      core: 'dragon heartstring',
      wood: 'chestnut tree',
      description:
        "Lucius Malfoy's wand is a wand made of elm wood with a dragon heartstring core. It is known for being highly suited for dark magic and manipulation, fitting for its former owner who was a powerful and influential Death Eater.",
      price: 27.85,
      rate: 4.7,
      sale: 5,
    },
    {
      id: 19,
      category: 'wands',
      faculty: 'Gryffindor',
      name: 'Harry Potter wand',
      image: '../assets/wands/harry-potter-wand.webp',
      length: '11 ins',
      core: 'phoenix feather fawkes',
      wood: 'holly',
      description:
        "A wand is a powerful and versatile tool, crafted from holly wood and containing a phoenix feather core. It is known for its unique ability to channel Harry's exceptional magical abilities, and played a crucial role in many of his adventures as a young wizard.",
      price: 35.0,
      rate: 5.0,
      sale: 0,
    },
    {
      id: 20,
      category: 'wands',
      faculty: 'Slytherin',
      name: 'Voldemort wand',
      image: '../assets/wands/voldemort-wand.png',
      length: '13 1/2 ins',
      core: 'tphoenix feather fawkes',
      wood: 'elder',
      description:
        "The first wand of Voldemort, which had a phoenix feather core from Fawkes, was highly powerful and effective in performing dark magic. It was also known for its ability to connect with Harry Potter's wand and create a unique effect known as the Priori Incantatem.",
      price: 35.0,
      rate: 5.0,
      sale: 0,
    },
    {
      id: 21,
      category: 'decorations',
      faculty: 'None',
      name: 'Hogwarts Crest Wall Art',
      image: '../assets/decorations/hogwarts-crest-wall-art.webp',
      description:
        'From The Wizarding World of Harry Potter™, finely sculpted and intricately detailed Hogwarts crest wall art.',
      price: 62.9,
      rate: 4.0,
      sale: 5,
    },
    {
      id: 22,
      category: 'decorations',
      faculty: 'Hufflepuff',
      name: 'Hufflepuff Crest Wall Art',
      image: '../assets/decorations/hufflepuff-house-crest-wall-art.webp',
      description:
        'Finely sculpted and intricately detailed, Hufflepuff house crest wall art from The Wizarding World of Harry Potter',
      price: 58.9,
      rate: 4.1,
      sale: 5,
    },
    {
      id: 23,
      category: 'decorations',
      faculty: 'Ravenclaw',
      name: 'Ravenclaw Crest Wall Art',
      image: '../assets/decorations/ravenclaw-house-crest-wall-art-1272680.webp',
      description:
        'Finely sculpted and intricately detailed, Ravenclaw house crest wall art from The Wizarding World of Harry Potter',
      price: 52.95,
      rate: 4.1,
      sale: 5,
    },
    {
      id: 24,
      category: 'decorations',
      faculty: 'Gryffindor',
      name: 'Gryffindor Crest Wall Art',
      image: '../assets/decorations/gryffindor-house-crest-wall-art-1272677.webp',
      description:
        'Finely sculpted and intricately detailed, Gryffindor house crest wall art from The Wizarding World of Harry Potter',
      price: 52.95,
      rate: 4.1,
      sale: 5,
    },
    {
      id: 25,
      category: 'decorations',
      faculty: 'None',
      name: 'Hogwarts Castle Water Globe',
      image: '../assets/decorations/hogwarts-castle-water-globe.webp',
      description:
        'Hand-painted water globe featuring Hogwarts castle from The Wizarding World of Harry Potter',
      price: 48.95,
      rate: 3.9,
      sale: 50,
    },
    {
      id: 26,
      category: 'pillows',
      faculty: 'Gryffindor',
      name: 'Gryffindor House Pillow',
      image: '../assets/pillow/gryffindor-house-pillow-1335574.webp',
      description:
        'Decorative pillow featuring house Gryffindor with an embroidered lion and house colors. Size 17" x 17", made from polyester and cotton.',
      price: 35.0,
      rate: 4.2,
      sale: 0,
    },
    {
      id: 27,
      category: 'pillows',
      faculty: 'Slytherin',
      name: 'Slytherin House Pillow',
      image: '../assets/pillow/slytherin-house-pillow.webp',
      description:
        'Decorative pillow featuring house Slytherin with an embroidered snake and house colors. Size 17" x 17", made from polyester and cotton.',
      price: 35.0,
      rate: 4.2,
      sale: 0,
    },
    {
      id: 28,
      category: 'pillows',
      faculty: 'Ravenclaw',
      name: 'Ravenclaw House Pillow',
      image: '../assets/pillow/ravenclaw-house-pillow.webp',
      description:
        'Decorative pillow featuring house Ravenclaw with an embroidered snake and house colors. Size 17" x 17", made from polyester and cotton.',
      price: 35.0,
      rate: 4.1,
      sale: 0,
    },
    {
      id: 29,
      category: 'pillows',
      faculty: 'None',
      name: 'Hogwarts Crest Pillow',
      image: '../assets/pillow/hogwarts-crest-pillow.webp',
      description:
        'Hogwarts crest woven decorative pillow. From The Wizarding World of Harry Potter. Size 17" x 17", made from polyester and cotton.',
      price: 32.0,
      rate: 4.3,
      sale: 10,
    },
    {
      id: 30,
      category: 'pillows',
      faculty: 'None',
      name: 'The Deathly Hallows Pillow',
      image: '../assets/pillow/the-deathly-hallows-pillow.webp',
      description:
        'Woven decorative pillow featuring The Deathly Hallows on soft, black fabric. Size 14" x 14", made from polyester and cotton.',
      price: 32.0,
      rate: 4.1,
      sale: 5,
    },
    {
      id: 31,
      category: 'sweaters',
      faculty: 'Hufflepuff',
      name: 'Hufflepuff Quidditch Adult Sweater',
      image: '../assets/sweaters/hufflepuff-quidditch-adult-sweater.webp',
      description:
        'This replica Quidditch Sweater matches those seen in the Harry Potter™ films. Made from Scottish-spun lambswool in the same mill as the film costumes, this jumper is prepared for high winds and limitless adventure in The Wizarding World of Harry Potter. 80% Lambswool/ 20% Polyamide.',
      price: 100.5,
      rate: 3.9,
      sale: 0,
    },
    {
      id: 32,
      category: 'sweaters',
      faculty: 'Ravenclaw',
      name: 'Ravenclaw Quidditch Adult Sweater',
      image: '../assets/sweaters/ravenclaw-quidditch-adult-sweater.webp',
      description:
        'This replica Quidditch Sweater matches those seen in the Harry Potter™ films. Made from Scottish-spun lambswool in the same mill as the film costumes, this jumper is prepared for high winds and limitless adventure in The Wizarding World of Harry Potter. 80% Lambswool/ 20% Polyamide.',
      price: 100.5,
      rate: 4.0,
      sale: 0,
    },
    {
      id: 33,
      category: 'sweaters',
      faculty: 'Slytherin',
      name: 'Slytherin Quidditch Adult Sweater',
      image: '../assets/sweaters/slytherin-quidditch-adult-sweater.webp',
      description:
        'This replica Quidditch Sweater matches those seen in the Harry Potter™ films. Made from Scottish-spun lambswool in the same mill as the film costumes, this jumper is prepared for high winds and limitless adventure in The Wizarding World of Harry Potter. 80% Lambswool/ 20% Polyamide.',
      price: 110.0,
      rate: 4.5,
      sale: 10,
    },
    {
      id: 34,
      category: 'sweaters',
      faculty: 'Gryffindor',
      name: 'Gryffindor Quidditch Adult Sweater',
      image: '../assets/sweaters/gryffindor-quidditch-adult-sweater.webp',
      description:
        'This replica Quidditch Sweater matches those seen in the Harry Potter™ films. Made from Scottish-spun lambswool in the same mill as the film costumes, this jumper is prepared for high winds and limitless adventure in The Wizarding World of Harry Potter. 80% Lambswool/ 20% Polyamide.',
      price: 110.0,
      rate: 4.5,
      sale: 0,
    },
    {
      id: 35,
      category: 'sweaters',
      faculty: 'Gryffindor',
      name: 'G For George Adult Sweater',
      image: '../assets/sweaters/for-george-adult-sweater.webp',
      description:
        'Replica G for George Sweater as seen in the films from The Wizarding World of Harry Potter. Made from the same wool and silk mixture as the film garment and in the same Scottish mill as the school wear from the films. 90% British Wool/ 10% Silk',
      price: 89.0,
      rate: 4.2,
      sale: 0,
    },
    {
      id: 36,
      category: 'sweaters',
      faculty: 'Gryffindor',
      name: 'F For Fred Adult Sweater',
      image: '../assets/sweaters/for-fred-adult-sweater.webp',
      description:
        'Replica F for Fred Sweater as seen in the films from The Wizarding World of Harry Potter. Made from the same wool and silk mixture as the film garment and in the same Scottish mill as the school wear from the films. 90% British Wool/ 10% Silk',
      price: 89.0,
      rate: 4.2,
      sale: 5,
    },
    {
      id: 37,
      category: 'sweaters',
      faculty: 'Gryffindor',
      name: 'H For Harry Adult Sweater',
      image: '../assets/sweaters/for-harry-adult-sweater.webp',
      description:
        'Replica H For Harry Sweater as seen in the films from The Wizarding World Of Harry Potter. Made from the same wool and silk mixture as the movie garment and in the same Scottish mill as the school wear from the films. 90% British Wool/ 10% Silk',
      price: 90.0,
      rate: 4.5,
      sale: 0,
    },
    {
      id: 38,
      category: 'sweaters',
      faculty: 'Gryffindor',
      name: 'R For Ron Adult Sweater',
      image: '../assets/sweaters/for-ron-adult-sweaterwebp.webp',
      description:
        'Replica R For Ron Sweater as seen in the films from The Wizarding World Of Harry Potter™. Made from the same wool and silk mixture as the film garment and in the same Scottish mill as the school wear from the films. 90% British Wool/ 10% Silk',
      price: 89.95,
      rate: 4.4,
      sale: 0,
    },
    {
      id: 39,
      category: 'souvenirs',
      faculty: 'None',
      name: 'Monster Book of Monsters Journal',
      image: '../assets/souvenirs/monster-book-of-monsters-journal.webp',
      description:
        'Journal inspired by the Monster Book of Monsters with embroidered detailing, ribbon bookmark, parchment-like textured pages, and clasp closure from The Wizarding World of Harry Potter. Size: 7" H x 4 1/2" W. Parchment-like sheets.',
      price: 35.0,
      rate: 3.4,
      sale: 0,
    },
    {
      id: 40,
      category: 'souvenirs',
      faculty: 'Gryffindor',
      name: 'Gryffindor Travel Tumbler',
      image: '../assets/souvenirs/gryffindor-travel-tumbler.webp',
      description:
        'Stay hydrated during your travels with this sleek, stainless steel tumbler featuring the Gryffindor crest over a matte-scarlet finish. Designed for both hot and cold beverages, this tumbler is insulated, has an ergonomic rubber grip, and fits most cup holders. From The Wizarding World of Harry Potter. Stainless steel, 9" H x 3 5/8" Diameter.',
      price: 32.0,
      rate: 4.5,
      sale: 0,
    },
    {
      id: 41,
      category: 'souvenirs',
      faculty: 'Slytherin',
      name: 'Slytherin Travel Tumbler',
      image: '../assets/souvenirs/slytherin-travel-tumbler.webp',
      description:
        'Stay hydrated during your travels with this sleek, stainless steel tumbler featuring the Slytherin crest over a matte-green finish. Designed for both hot and cold beverages, this tumbler is insulated, has an ergonomic rubber grip, and fits most cup holders. From The Wizarding World of Harry Potter. Stainless steel, 9" H x 3 5/8" Diameter.',
      price: 30.0,
      rate: 4.6,
      sale: 0,
    },
    {
      id: 42,
      category: 'souvenirs',
      faculty: 'Ravenclaw',
      name: 'Ravenclaw Travel Tumbler',
      image: '../assets/souvenirs/ravenclaw-travel-tumbler.webp',
      description:
        'Stay hydrated during your travels with this sleek, stainless steel tumbler featuring the Ravenclaw crest over a matte-green finish. Designed for both hot and cold beverages, this tumbler is insulated, has an ergonomic rubber grip, and fits most cup holders. From The Wizarding World of Harry Potter. Stainless steel, 9" H x 3 5/8" Diameter.',
      price: 30.0,
      rate: 4.2,
      sale: 0,
    },
    {
      id: 43,
      category: 'souvenirs',
      faculty: 'Hufflepuff',
      name: 'Hufflepuff Travel Tumbler',
      image: '../assets/souvenirs/hufflepuff-travel-tumbler.webp',
      description:
        'Stay hydrated during your travels with this sleek, stainless steel tumbler featuring the Hufflepuff crest over a matte-green finish. Designed for both hot and cold beverages, this tumbler is insulated, has an ergonomic rubber grip, and fits most cup holders. From The Wizarding World of Harry Potter. Stainless steel, 9" H x 3 5/8" Diameter.',
      price: 30.0,
      rate: 4.4,
      sale: 0,
    },
    {
      id: 44,
      category: 'souvenirs',
      faculty: 'None',
      name: 'Quill Stand And Ink Set',
      image: '../assets/souvenirs/quill-stand-and-ink-set.webp',
      description:
        'Feather quill pen complete with wooden stand and bottled blue ink from The Wizarding World of Harry Potter. Hen pheasant feather with metal nib and dark blue ink (1 bottle).  8 1/2" L (feather).',
      price: 45.62,
      rate: 4.8,
      sale: 10,
    },
    {
      id: 45,
      category: 'souvenirs',
      faculty: 'Slytherin',
      name: 'Slytherin Lined Journal',
      image: '../assets/souvenirs/slytherin-lined-journal.webp',
      description:
        'Slytherin journal with lined, parchment-like textured pages, metal house crest on front cover, sewn in green & silver ribbon bookmarks, and elastic band closure. From The Wizarding World of Harry Potter. 9 3/4" L x 6 3/4" W.',
      price: 35.6,
      rate: 4.2,
      sale: 0,
    },
    {
      id: 46,
      category: 'souvenirs',
      faculty: 'Hufflepuff',
      name: 'Hufflepuff Cup',
      image: '../assets/souvenirs/hufflepuff-cup.webp',
      description:
        'Replica Hufflepuff Cup from The Wizarding World of Harry Potter.  Metal, Zinc Alloy - Electroplating, 5 1/4 x 4" W',
      price: 50.42,
      rate: 4.0,
      sale: 15,
    },
    {
      id: 47,
      category: 'robes',
      faculty: 'Slytherin',
      name: 'Slytherin Robe',
      image: '../assets/robes/slytherin-schooluniform-accessories-robes.webp',
      description:
        'This authentic Slytherin robe has contrasting green lining, pockets, and features an embroidered patch of the house crest. 100% Polyester',
      price: 150.0,
      rate: 4.9,
      sale: 0,
    },
    {
      id: 48,
      category: 'robes',
      faculty: 'Gryffindor',
      name: 'Gryffindor Robe',
      image: '../assets/robes/gryffindor-schooluniform-accessories-robes.webp',
      description:
        'This authentic Slytherin robe has contrasting green lining, pockets, and features an embroidered patch of the house crest. 100% Polyester',
      price: 150.0,
      rate: 4.9,
      sale: 0,
    },
    {
      id: 49,
      category: 'robes',
      faculty: 'Ravenclaw',
      name: 'Ravenclaw Robe',
      image: '../assets/robes/ravenclaw-schooluniform-accessories-robes.webp',
      description:
        'This authentic Slytherin robe has contrasting green lining, pockets, and features an embroidered patch of the house crest. 100% Polyester',
      price: 150.0,
      rate: 4.6,
      sale: 5,
    },
    {
      id: 50,
      category: 'robes',
      faculty: 'Hufflepuff',
      name: 'Hufflepuff Robe',
      image: '../assets/robes/hufflepuff-schooluniform-accessories-robes.webp',
      description:
        'This authentic Slytherin robe has contrasting green lining, pockets, and features an embroidered patch of the house crest. 100% Polyester',
      price: 150.0,
      rate: 4.5,
      sale: 10,
    },
  ],
};

app.get('/', (req, res) => {
  res.send('App is working');
});

app.get('/products', (req, res) => {
  const { page, limit, category, faculty, name} = req.query;

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

  let filteredProducts = [...data.products];

  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  if (faculty && faculty !== 'All') {
    const formattedFaculty = faculty.charAt(0).toUpperCase() + faculty.slice(1);
    filteredProducts = filteredProducts.filter(product => product.faculty === formattedFaculty);
  }

  if (name) {
    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
  }

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const response = {
    totalProducts: filteredProducts.length,
    totalPages: Math.ceil(filteredProducts.length / limitNumber),
    currentPage: pageNumber,
    products: paginatedProducts
  };

  res.send(response);
});

app.get('/products/:productId', (req, res) => {
  const id = Number(req.params.productId);
  const product = data.products.find((p) => p.id === id);
  if (!product) {
    res.status(404).send('Product not found');
    return;
  }
  res.send(JSON.stringify(product));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

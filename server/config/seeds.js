const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: '1939' },
    { name: '1941' },
    { name: '1942' },
    { name: '1944' },
    { name: '1946' },
    { name: '1955' },
    { name: '1960' },
    { name: '1961' },
    { name: '1962' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'The Wizard of Oz (1939)',
      description:
        'There’s no place like home, and no classic movie as beloved as Dorothy’s adventures in Oz. The film left its imprint on the kinds of narratives and character types—wicked and good witches, scarecrows, tinmen, and cowardly lions, oh my—we see on film. “Somewhere Over the Rainbow,” sung beautifully by Judy Garlard, is the cherry on top.',
      image: '1.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Gone With The Wind (1939)',
      description:
        'The original "sweeping epic," this film stars Vivien Leigh as Scarlett O’Hara, the plucky Southern belle who romances Clark Gable Rhett Butler against the backdrop of the Civil War. Its one of the most indelible films ever made, and though it has been criticized for its racial politics, supporting actress Hattie McDaniel was the first African-American actor to win an Academy Award.',
      image: '2.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Casablanca (1942)',
      category: categories[2]._id,
      description:
        'Casablanca is up there with the Godfather for most quoted screenplay of all time. This WWII classic, directed by Michael Curtiz, pairs Scandinavian beauty Ingrid Bergman with tough guy Humphrey Bogart for a story of lovers ripped apart by war and reunited in a far flung Moroccan piano bar—of all the gin joints in the world.',
      image: '3.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Breakfast At Tiffanys (1961)',
      category: categories[7]._id,
      description:
        'A favorite of dorm-room posters and Halloween costumes, Blake Edwards’s comedy about girl-about-town Holly Golightly helped turn Audrey Hepburn into a fashion icon, thanks to her long black gown, elegant up-do, and signature black sunglasses. (She nails a trench coat too.) Adapted from a Truman Capote novel, it’s one of the most stylish films of the 20th century.',
      image: '4.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Lawrence of Arabia (1962)',
      category: categories[8]._id,
      description:
        'David Lean’s 70mm desert epic stars Peter O’Toole in the sweeping film about T.E. Lawrence, the British archaeologist, military officer, and World War I liaison to the Ottoman Empire. It was shot in Morocco, Spain, Jordan, and England—try to catch those stunning locations and O’Toole’s baby blues on the big screen if you can.',
      image: '5.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'West Side Story (1961)',
      category: categories[7]._id,
      description:
        'This musical about New York City gangs was directed by choreographer Jerome Robbins and Sound of Music director Robert Wise. The Sharks and the Jets dance their battles on the streets in this modernized take on Romeo and Juliet. The songs by Leonard Bernstein, with lyrics by Stephen Sondheim, are some of the best of the era.',
      image: '6.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Citizen Kane (1941)',
      category: categories[1]._id,
      description:
        'Its not easy living up to the title of "best film ever made," but Orson Welles depiction of a mad publishing billionaire really did remake an industry. Welles pioneered filmmaking techniques of deep focus and chiaroscuro lighting. He was inspired by the life story of publishing scion William Randolph Hearst, but you’ll have to watch it to see what exactly “Rosebud” means.',
      image: '7.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Pyscho (1960)',
      category: categories[6]._id,
      description:
        'Alfred Hitchcock’s experiment with exploitation cinema proved the Master of Suspense to be the Master of Marketing, and became his most notorious film in a career of classics. It also changed showers forever. Anthony Perkins’s Norman Bates is still one of the most memorable screen weirdos of all-time, and Bernard Herrmann’s screeching strings left a lasting influence on movie scores.',
      image: '8.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'The Women (1939)',
      category: categories[0]._id,
      description: 'For 1939, George Cukor’s The Women—about divorce, fashion and complicated female intimacies—was awfully forward thinking. Plus, no men have speaking roles in it! Starring Norma Shearer, Joan Crawford, and Rosalind Russell, The Women should be your next girls’ night movie selection (but feel free to skip the 2008 remake).',
      image: '9.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Laura (1944)',
      category: categories[3]._id,
      description:
        'Otto Preminger’s Laura is a blend of film noir and family melodrama that stars the stunning Gene Tierney as the titular Laura, a murder victim with whom the detective falls in love while investigating her death. This twisty tale features an array of wonderful character actors in supporting roles, including Clifton Webb and future horror impresario Vincent Price.',
      image: '10.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'The Best Years of Our Lives (1946)',
      category: categories[4]._id,
      description:
        'William Wyler’s World War II film has become the gold standard for films about soldiers who return home from the front and find reintegrating into life isn’t all that easy. The film even co-stars real war vet Harold Russell, who lost his hands, and won an Honorary Oscar for his performance.',
      image: '11.jpg',
      price: 9.99,
      quantity: 500
    },
    {
      name: 'Rebel Without a Cause (1955)',
      category: categories[5]._id,
      description:
        'Hollywood icon James Dean only starred in three films during his short life. Rebel Without A Cause, directed by Nicholas Ray, is the most memorable, and one of the earliest cinematic depictions of teen angst. Dean’s co-stars in the film, Natalie Wood and Sal Mineo, also met tragic early ends, which gives the film a mythical status.',
      image: '12.jpg',
      price: 9.99,
      quantity: 500
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'test',
    lastName: 'test',
    email: 'test@mail.com',
    password: '123456',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
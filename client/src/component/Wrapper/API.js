export const getDeveloper = new Promise(function (resolve) {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        service: "Dog Walker",
        name: "SpongeBob",
        zip: "30519",
        phone: "678-234-4234",
      },
      {
        id: 2,
        service: "Sitter",
        name: "Mr. Krabs",
        zip: "60067",
        phone: "678-234-4234",
      },
      {
        id: 3,
        service: "Dog Walker",
        service: "Sitter",
        name: "Squidward",
        zip: "30519",
        phone: "678-234-4234",
      },
      {
        id: 4,
        service: "Dog Walker",
        name: "Dexter",
        zip: "30019",
        phone: "678-234-4234",
      },
      {
        id: 5,
        service: "Sitter",
        name: "Courage",
        zip: "30058",
        phone: "678-234-4234",
      },
      {
        id: 6,
        service: "Boarder",
        name: "Doug Funnie",
        zip: "30066",
        phone: "678-234-4234",
      },
      {
        id: 7,
        service: "Boarder",
        name: "Bugs Bunny",
        zip: "30519",
        phone: "678-234-4234",
      },
      {
        id: 8,
        service: "Boarder",
        name: "Johnny Bravo",
        zip: "30087",
        phone: "678-234-4234",
      },
      {
        id: 9,
        service: "Sitter",
        name: "Tommy Pickles",
        zip: "30519",
        phone: "678-234-4234",
      },
      {
        id: 10,
        service: "Dog Walker",
        name: "Rocko",
        zip: "30095",
        phone: "678-234-4234",
      },
      {
        id: 11,
        service: "Boarder",
        name: "Captain Planet",
        zip: "30519",
        phone: "678-234-4234",
      },
      {
        id: 12,
        service: "Sitter",
        name: "Ickis",
        zip: "30005",
        phone: "678-234-4234",
      },
    ]);
  });
}, 1000);

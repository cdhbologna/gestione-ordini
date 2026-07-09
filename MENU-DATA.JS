/*
  MENU-DATA.JS
  Modifica i menu da qui, non dentro index.html.

  Regole:
  - Ogni macro menu ha: id, label, subtitle, sections.
  - Ogni sezione ha: id, label, items.
  - Ogni item ha: name, price, opzionale description.
  - I prezzi usano il punto per i decimali: 1.50, 5.50, 12.
  - Per calice/bottiglia crea due item separati. È più rapido in servizio.
*/

window.MENU_DATA = [
  {
    id: "bistro",
    label: "Bistro",
    subtitle: "Cena, piatti, croccantelle e vini",
    sections: [
      {
        id: "light_tasty",
        label: "Light & Tasty",
        items: [
          { name: "Bufala", price: 11, description: "Alla caprese" },
          { name: "Classico all'Italiana", price: 13, description: "Prosciutto crudo di Parma 24 mesi e mozzarella di bufala DOP" },
          { name: "Salmone in Rosa", price: 16, description: "Salmone affumicato e vinaigrette agli agrumi" },
          { name: "Salmon Salad", price: 14, description: "Salmone affumicato, lattuga, pomodorini, olive taggiasche, feta" },
          { name: "Insalatona dello Chef", price: 15, description: "Lattuga, radicchio, carote, pomodoro, uovo sodo, mais, tonno, mozzarella" },
          { name: "Caesar Salad", price: 15, description: "Insalata, petto di pollo, scaglie di parmigiano, salsa Caesar, crostini di pane" },
          { name: "Tagliere delle Eccellenze", price: 17, description: "Prosciutto crudo di Parma 24 mesi, salame Felino, mortadella, Parmigiano Reggiano DOP 22 mesi" }
        ]
      },
      {
        id: "main",
        label: "Main",
        items: [
          { name: "Tortelli", price: 12, description: "Farciti con ricotta ed erbette mantecati al burro e Parmigiano Reggiano" },
          { name: "Lasagna", price: 13, description: "Al ragù bolognese" },
          { name: "Trofie al pesto di basilico", price: 12, description: "Trofie with basil pesto" },
          { name: "Tagliatelle al ragù", price: 11, description: "Tagliatelle with meat sauce" },
          { name: "Pasta al pomodoro", price: 10, description: "Pasta with tomato sauce" },
          { name: "Zuppa del giorno", price: 10, description: "Soup of the day" },
          { name: "Club sandwich", price: 15, description: "Tacchino, pane, pomodoro, insalata, bacon e maionese" },
          { name: "Ossobuco di manzo", price: 19, description: "Servito con patate o verdure" },
          { name: "Filetto di salmone", price: 22, description: "Al forno servito con patate o verdure" },
          { name: "Petto di pollo", price: 16, description: "Alla griglia servito con patate o verdure" },
          { name: "Ribs di maiale", price: 17, description: "In salsa barbecue con patate" },
          { name: "Tacchino tonnato", price: 15, description: "Arrosto di tacchino con salsa tonnata e fiore del cappero" }
        ]
      },
      {
        id: "croccantella",
        label: "La Croccantella",
        items: [
          { name: "Croccantella Margherita", price: 10, description: "Con mozzarella e pomodoro" },
          { name: "Croccantella La Bolognese", price: 13, description: "Mortadella, bufala e granella di pistacchio" }
        ]
      },
      {
        id: "vini_bollicine",
        label: "Carta dei Vini · Bollicine",
        items: [
          { name: "Prosecco Sup Valdobbiadene Extra Dry DOCG - Calice", price: 6 },
          { name: "Prosecco Sup Valdobbiadene Extra Dry DOCG - Bottiglia", price: 28 },
          { name: "Franciacorta Brut DOCG - Calice", price: 7 },
          { name: "Franciacorta Brut DOCG - Bottiglia", price: 35 }
        ]
      },
      {
        id: "vini_bianchi",
        label: "Carta dei Vini · Bianchi",
        items: [
          { name: "Chardonnay Grave DOC - Calice", price: 6 },
          { name: "Chardonnay Grave DOC - Bottiglia", price: 25 },
          { name: "Pinot Grigio Veneto - Calice", price: 5 },
          { name: "Pinot Grigio Veneto - Bottiglia", price: 24 },
          { name: "Greco di Tufo DOCG - Calice", price: 7 },
          { name: "Greco di Tufo DOCG - Bottiglia", price: 27 },
          { name: "Vino bianco della Casa - Calice", price: 5 },
          { name: "Vino bianco della Casa - Bottiglia", price: 20 }
        ]
      },
      {
        id: "vini_rossi",
        label: "Carta dei Vini · Rossi",
        items: [
          { name: "Valpolicella Superiore Ripasso DOC - Calice", price: 7 },
          { name: "Valpolicella Superiore Ripasso DOC - Bottiglia", price: 30 },
          { name: "Chianti Colli Senesi DOCG - Calice", price: 6 },
          { name: "Chianti Colli Senesi DOCG - Bottiglia", price: 25 },
          { name: "Lambrusco Otello Nero DOC Emilia Romagna 375ml", price: 11 },
          { name: "Primitivo Tommasi Neprica Puglia - Calice", price: 6 },
          { name: "Primitivo Tommasi Neprica Puglia - Bottiglia", price: 25 },
          { name: "Nero d'Avola DOC Sicilia - Calice", price: 6 },
          { name: "Nero d'Avola DOC Sicilia - Bottiglia", price: 26 },
          { name: "Vino rosso della Casa - Calice", price: 5 },
          { name: "Vino rosso della Casa - Bottiglia", price: 20 }
        ]
      }
    ]
  },

  {
    id: "bar",
    label: "Bar",
    subtitle: "Caffetteria, snack, aperitivi e spirits",
    sections: [
      {
        id: "caffetteria",
        label: "Caffetteria",
        items: [
          { name: "Caffè Espresso", price: 1.50 },
          { name: "Caffè Decaffeinato", price: 1.50 },
          { name: "Caffè Macchiato", price: 1.50 },
          { name: "Caffè Americano", price: 3.00 },
          { name: "Caffè d'Orzo", price: 2.00 },
          { name: "Cappuccino", price: 2.50 },
          { name: "Cioccolata calda", price: 3.50 },
          { name: "Latte Macchiato", price: 3.50 },
          { name: "Selezione di tè con biscotti", price: 4.00 }
        ]
      },
      {
        id: "bar_snacks",
        label: "Bar Snacks",
        items: [
          { name: "Croissant", price: 1.50, description: "Fino alle 12:00" },
          { name: "Fetta di torta", price: 4.00 },
          { name: "Toastone classico", price: 6.00, description: "Prosciutto cotto e formaggio" },
          { name: "Sandwich crudo e mozzarella", price: 8.00 },
          { name: "Sandwich pomodoro e mozzarella", price: 6.00 }
        ]
      },
      {
        id: "soft_drinks",
        label: "Soft Drinks",
        items: [
          { name: "Pepsi Cola 330 ml", price: 3.00 },
          { name: "Pepsi Zero 330 ml", price: 3.00 },
          { name: "7up 330 ml", price: 3.00 },
          { name: "Tè limone o pesca 330 ml", price: 3.00 },
          { name: "Succo di frutta 200 ml", price: 3.00 },
          { name: "Spremuta di arancia fresca", price: 6.00 },
          { name: "Crodino", price: 4.00 },
          { name: "Fever Tree Tonic Water", price: 4.00 },
          { name: "Acqua naturale/frizzante lattina 330 ml", price: 2.00 },
          { name: "Acqua naturale/frizzante 750 ml", price: 3.00 }
        ]
      },
      {
        id: "birre_bar",
        label: "Birre",
        items: [
          { name: "Moretti Baffo d'Oro 400 ml", price: 7.00 },
          { name: "Ayinger Bräuweisse", price: 7.00 },
          { name: "Agricola 330 ml", price: 5.50 },
          { name: "Agricola Ambrata 330 ml", price: 6.00 },
          { name: "Nuda&Cruda 330 ml", price: 6.00 },
          { name: "Tipa 330 ml", price: 6.00 },
          { name: "Pizzica 330 ml", price: 6.00 }
        ]
      },
      {
        id: "spritz_life",
        label: "Spritz Life",
        items: [
          { name: "Aperol Spritz", price: 8.00 },
          { name: "Campari Spritz", price: 8.00 },
          { name: "Hugo Spritz", price: 8.00 },
          { name: "Limoncello Spritz", price: 8.00 }
        ]
      },
      {
        id: "aperitivo_italiano",
        label: "Aperitivo Italiano",
        items: [
          { name: "Americano", price: 9.00 },
          { name: "Negroni", price: 9.00 },
          { name: "Sbagliato", price: 9.00 },
          { name: "Campari Orange", price: 9.00 }
        ]
      },
      {
        id: "amari",
        label: "Amari",
        items: [
          { name: "Jefferson", price: 7.00 },
          { name: "Amaro Borghetti al Caffè", price: 5.00 },
          { name: "Amaro del Capo", price: 6.00 },
          { name: "Averna", price: 5.00 },
          { name: "Lucano", price: 5.00 },
          { name: "Montenegro", price: 5.00 },
          { name: "Fernet Branca", price: 5.00 },
          { name: "Jägermeister", price: 5.00 },
          { name: "Sambuca", price: 5.00 },
          { name: "Mirto Zedda Piras", price: 5.00 },
          { name: "Limoncello", price: 5.00 }
        ]
      },
      {
        id: "cognac_brandy",
        label: "Cognac | Brandy",
        items: [
          { name: "Stravecchio Branca", price: 6.00 }
        ]
      },
      {
        id: "gin_tonic",
        label: "Gin & Tonic",
        items: [
          { name: "Gin Tonic classico", price: 7.00 },
          { name: "Bombay Gin Tonic", price: 9.00 },
          { name: "Tanqueray London Dry Gin Tonic", price: 9.00 }
        ]
      },
      {
        id: "grappa",
        label: "Grappa",
        items: [
          { name: "Moscato Friulidoro", price: 5.00 },
          { name: "Poli Barrique", price: 7.00 }
        ]
      },
      {
        id: "long_drinks",
        label: "Long Drinks",
        items: [
          { name: "Manhattan", price: 10.00 },
          { name: "Moscow Mule", price: 10.00 },
          { name: "Cuba Libre", price: 10.00 },
          { name: "Tequila Sunrise", price: 10.00 },
          { name: "Long Island", price: 12.00 }
        ]
      },
      {
        id: "rum",
        label: "Rum | Rhum | Ron",
        items: [
          { name: "Barcelo", price: 8.00 },
          { name: "Havana 3", price: 6.00 },
          { name: "Bacardi Carta Blanca", price: 6.00 },
          { name: "Zacapa 23", price: 12.00 },
          { name: "Aggiunta Coca Cola", price: 3.00 }
        ]
      },
      {
        id: "vodka",
        label: "Vodka",
        items: [
          { name: "Wiborowa", price: 6.00 },
          { name: "Grey Goose", price: 8.00 },
          { name: "Aggiunta Acqua Tonica Fever Tree", price: 3.00 }
        ]
      },
      {
        id: "whisky",
        label: "Whisky | Whiskey",
        items: [
          { name: "J&B", price: 7.00 },
          { name: "Jack Daniel's", price: 7.00 },
          { name: "Johnnie Walker Black Label", price: 10.00 },
          { name: "Lagavulin 16 y.o.", price: 12.00 }
        ]
      }
    ]
  },

  {
    id: "birra_pizza",
    label: "Birra & Pizza",
    subtitle: "Birra Salento e pizze",
    sections: [
      {
        id: "birra_salento",
        label: "Birre Birra Salento",
        items: [
          { name: "Agricola 330 ml", price: 5.50, description: "Stile Lager 5%" },
          { name: "Agricola Ambrata 330 ml", price: 6.00, description: "Red Lager 5%" },
          { name: "Pizzica 330 ml", price: 6.00, description: "Belgian Blonde Ale con peperoncino 6,5%" },
          { name: "Nuda&Cruda 330 ml", price: 6.00, description: "Pils 4,5%" },
          { name: "Tipa 330 ml", price: 6.00, description: "IPA 4,8%" }
        ]
      },
      {
        id: "pizza",
        label: "Pizza",
        items: [
          { name: "L'Italiana", price: 14, description: "Mozzarella, prosciutto crudo di Parma 24 mesi, rucola, Parmigiano DOP 22 mesi" },
          { name: "Diavola", price: 13, description: "Pomodoro, mozzarella, spianata calabra, pecorino romano" },
          { name: "Pizza del Contadino", price: 12, description: "Pomodoro, mozzarella e verdure grigliate" },
          { name: "Margherita", price: 11, description: "Pomodoro, mozzarella, Parmigiano Reggiano DOP 22 mesi, olio EVO e basilico" },
          { name: "Aglio, Olio & Fantasia", price: 12, description: "Pomodoro, mozzarella, olio all'aglio, peperoncino, acciughe e olive taggiasche" }
        ]
      }
    ]
  }
];

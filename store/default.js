export const state = () => ({
  businesses: [
    {
      id: 1,
      logo: require('@/static/images/berg_logo.jpg'),
      preview_image: require('@/static/images/berg_preview.jpg'),
      title: 'Berg Bau',
      description:
        'Wir sind fit für die Herausforderungen von morgen und besitzen die Expertise für die Durchführung anspruchsvoller Baumaßnahmen und die Leidenschaft für die Entwicklung neuer intelligenter Lösungen, die Zukunftshorizonte eröffnen. Mit Blick auf morgen bauen und zuverlässig höchste Qualität von der Planung bis zur Fertigstellung bieten: Das war die Leitidee unseres Firmengründers Hans Berger im Jahr 1905. Aus dem Baugeschäft Hans Berger hat sich die BERGER GRUPPE entwickelt, ein familiengeführter, mittelständischer Unternehmensverbund der Bau- und Baustoffindustrie mit zahlreichen Niederlassungen, Tochter- und Beteiligungsgesellschaften im In- und Ausland und mit dem Hauptsitz in Berg am Bau. Heute sind wir eine feste Größe in der Bauindustrie.',
      tags: [
        'Beton- und Straßenbau',
        'Große Maschinen',
        'Teamarbeit',
        'International',
      ],
      is_liked: false,
    },
    {
      id: 4,
      logo: require('@/static/images/stock_logo.jpg'),
      preview_image: require('@/static/images/stock_preview.jpg'),
      title: 'StockImages and BusinessImages Company Co. und GmbH',
      description:
        'Zentrale Kompetenzfelder sind anspruchsvolles Bauen, Qualitätstransportbeton-Herstellung und -Anlieferung sowie Gewinnung und Aufbereitung hochwertiger Rohstoffe. Die Bündelung spezialisierter Geschäftseinheiten ermöglicht es auch, Projekte in Komplettleistung auszuführen. Das breite Leistungsspektrum und die hohe Wertschöpfungstiefe mit eigenen Beton- und Asphaltmischwerken, einem eigenen Fertigteilwerk, modernstem Fuhr- und Gerätepark sowie eigenen Roh- und Baustoffen und nicht zuletzt 2.900 fachkompetenten BERGER Mitarbeiter garantieren höchste Qualität und beste wirtschaftliche, kundenorientierte Lösungen aus einem Guss.',
      tags: ['Büroarbeiten', 'Anzug', 'Teamarbeit', 'International'],
      is_liked: true,
    },
    {
      id: 5,
      logo: require('@/static/images/airplane_logo.png'),
      preview_image: require('@/static/images/airplane_preview.jpg'),
      title: 'Airplanes Company',
      description:
        'Auf den unternehmerischen Grundfesten der FLUGZEUG GRUPPE, den gelebten Werten eines traditionell erfolgreichen Familienunternehmens, wächst unser Erfolg stetig und nachhaltig.',
      tags: ['Flugzeuge fliegen', 'Aero', 'Teamarbeit', 'International'],
      is_liked: false,
    },
  ],
})

export const getters = {}

export const actions = {}

export const mutations = {}

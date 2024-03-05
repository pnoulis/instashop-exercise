import { Injectable } from '@angular/core';
import { Landmark } from './landmark';

@Injectable({
  providedIn: 'root',
})
export class LandmarkService {
  landmarkList: Landmark[] = [
    {
      url: 'https://www.skidxb.com/',
      createdAt: '2019-03-25T11:37:22.067Z',
      updatedAt: '2021-05-25T14:51:46.402Z',
      title: 'Ski Dubai',
      short_info:
        'Ski Dubai is an indoor ski resort with 22,500 square meters of indoor ski area. The park maintains the temperature of -1 degree Celsius to 2 degrees Celsius through out the year. It is a part of the Mall of the Emirates, one of the largest shopping malls in the world, located in Dubai, United Arab Emirates. It was developed by Majid Al Futtaim Group, which also operates the Mall of the Emirates.',
      description:
        "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.\nIn 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      location: [55.198333, 25.117222],
      order: 9,
      photo:
        'https://landmarks.instashop.ae/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/77708551bf14a2bc55a854e85e5df8cf_SkiDubai7176.jpg',
      photo_thumb:
        'https://landmarks.instashop.ae/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/72b746fd83c1ce0699eaa258cc6ba7fa_SkiDubai7176_thumb.jpg',
      objectId: '0PCIQ6YkH5',
      className: 'Landmark',
    },
    {
      title: 'Burj Al Arab',
      createdAt: '2019-03-25T11:15:57.742Z',
      updatedAt: '2021-06-04T09:59:04.926Z',
      short_info:
        'The Burj Al Arab (Arabic: برج العرب‎, Tower of the Arabs) is a luxury hotel located in Dubai, United Arab Emirates. Of the tallest hotels in the world, it is the fifth tallest, although 39% of its total height is made up of non-occupiable space. Burj Al Arab stands on an artificial island 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge. The shape of the structure is designed to resemble the sail of a ship. It has a helipad near the roof at a height of 210 m (689 ft) above ground.',
      location: [55.186147, 25.141975],
      description:
        'The beachfront area where Burj Al Arab and Jumeirah Beach Hotel are located was previously called Miami Beach. The hotel is located on an island of reclaimed land 280 meters offshore of the beach of the former Chicago Beach Hotel. The locale\'s name had its origins in the Chicago Bridge & Iron Company which at one time welded giant floating oil storage tanks, known locally as Kazzans on the site.\n\nThe Burj Al Arab was designed by multidisciplinary consultancy Atkins led by architect Tom Wright, who has since become co-founder of WKK Architects. The design and construction were managed by Canadian engineer Rick Gregory also of WS Atkins. It is very similar to the Vasco da Gama Tower located in Lisbon, Portugal. Construction of the island began in 1994 and involved up to 2,000 construction workers during peak construction. It was built to resemble the billowing spinnaker sail of a J-class yacht. Two "wings" spread in a V to form a vast "mast", while the space between them is enclosed in a massive atrium. The architect Tom Wright said "The client wanted a building that would become an iconic or symbolic statement for Dubai; this is very similar to Sydney with its Opera House, London with Big Ben, or Paris with the Eiffel Tower. It needed to be a building that would become synonymous with the name of the city."[not in citation given]\n\nFletcher Construction from New Zealand was the lead joint venture partner in the initial stages of pre-construction and construction. The hotel was built by South African construction contractor Murray & Roberts and Al Habtoor Engineering and the interior works were delivered by UAE based Depa.\n\nThe building opened in December 1999.\n\nThe hotel’s helipad, one of the buildings most visible contributions was designed by Irish architect Rebecca Gernon who worked as a part of the Atkins team and later went onto founding her own architecture and interior design company (Serendipity By Design), headquartered in Dubai with offices in Manila and Dublin.',
      url: 'https://www.jumeirah.com/en/hotels-resorts/dubai/burj-al-arab/',
      order: 2,
      photo:
        'https://landmarks.instashop.ae/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/32512aa80d8177e70d3101f84ee883fa_Burj_Al_Arab_Dubai_by_Joi_Ito_Dec2007.jpg',
      photo_thumb:
        'https://landmarks.instashop.ae/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/0c88b426921a288e5c19468da6068aea_Burj_Al_Arab_Dubai_by_Joi_Ito_Dec2007_thumb.jpg',
      objectId: 'K5asFWhNrx',
      className: 'Landmark',
    },
  ];

  getAll(): Landmark[] {
    return this.landmarkList;
  }
}

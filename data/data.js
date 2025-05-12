export const data = {
	openingHours: [
		{ day: 'Måndag', hours: 'Stängt' },
		{ day: 'Tisdag', hours: '11:00 - sent' },
		{ day: 'Onsdag', hours: '11:00 - sent' },
		{ day: 'Torsdag', hours: '11:00 - sent' },
		{ day: 'Fredag', hours: '11:00 - sent' },
		{ day: 'Lördag', hours: '11:00 - sent' },
		{ day: 'Söndag', hours: '11:00 - sent' },
	],
	menus: [
		{
			id: 'weekly-wine',
			title: 'VECKANS VINER',
			description: '',
			type: 'wine',
			price: 165,
			items: [
				{
					id: 1,
					title: 'Rioja Blanco Las Laventadas',
					producer: 'Javier San Pedro',
					description:
						'Friskt vin med smak av stenfrukter och florala inslag. Perfekt till charkbrickan eller vår magiska Toast Skagen.',
					price: '',
				},
				{
					id: 2,
					title: 'Lux Fortis Cabernet Sauvignon',
					producer: 'Famille Fabre',
					description:
						'Smak av mörk frukt och kryddiga toner med silkeslena tanniner. Paras gärna med helgens hedersgäst: Steak Minute.',
					price: '',
				},
				{
					id: 3,
					title: 'Claret A La Fraîche',
					producer: 'Pauline Lapierre',
					description:
						'Josigt och fräscht med smak av röda frukter och bär. Perfekt att drickas sval i solen och funkar utmärkt med vår Oxtartar.',
					price: '',
				},
			],
		},
		{
			id: 'weekly-lunch',
			title: 'VECKANS LUNCH',
			description: 'Serveras tisdag till söndag mellan 11:00 och 15:00',
			type: 'lunch',
			price: '',
			items: [
				{
					id: 1,
					title: 'Klassiska köttbullar',
					description:
						'Pessgurka, rårörda lingon, gräddsås & potatispuré',
					price: 165,
				},
				{
					id: 2,
					title: 'Räksallad',
					description:
						'Handskalade räkor, ägg, gröna blad, krutonger, rädisor, tomat & citronmajonäs',
					price: 165,
				},
				{
					id: 3,
					title: 'Reuben sandwich',
					description:
						'Levainbröd, pastrami, lagrad ost, surkål, reubensås & pickles',
					price: 165,
				},
			],
		},
		{
			id: 'menu-always',
			title: 'ALLTID PÅ MENYN',
			description: '',
			type: 'all',
			price: '',
			items: [
				{
					id: 1,
					title: 'Toast Skagen',
					description:
						'Handskalade räkor, smörstekt levain från Två systrars bageri',
					price: 235,
				},
				{
					id: 2,
					title: 'Oxtartar',
					description: 'Pepparrotskräm, jordärtskocka & pommes',
					price: 235,
				},
				{
					id: 3,
					title: 'Burrata sallad',
					description:
						'Burrata, kronärtskocka, tomater, variation av grönt',
					price: 225,
				},
			],
		},
		{
			id: 'menu-sweets',
			title: 'DET SÖTA',
			description: '',
			type: 'sweets',
			price: '',
			items: [
				{
					id: 1,
					title: 'Varm bulle med glass',
					description:
						'Ert val av av kanel eller vaniljbulle gräddas i ugn och toppas med en kula vaniljglass',
					price: 80,
				},
				{
					id: 2,
					title: 'Blåbärsruta',
					description: 'Blåbärspudding & citronsmetana',
					price: 40,
				},
				{
					id: 3,
					title: 'Sorbet toppat med bubblor',
					description: '',
					price: 90,
				},
				{
					id: 4,
					title: 'Glass i olika smaker',
					description: 'Fråga om dagens smaker',
					price: 45,
				},
			],
		},
		{
			id: 'menu-snacks',
			title: 'SNACKS',
			description: '',
			type: 'small snack',
			price: '',
			items: [
				{
					id: 1,
					title: 'Västerbotten krokett',
					description: '',
					price: 69,
				},
				{
					id: 2,
					title: 'Serrano krokett',
					description: '',
					price: 69,
				},
				{
					id: 3,
					title: 'Charkuterier',
					description: '',
					price: 69,
				},
				{ id: 4, title: 'Ostar', description: '', price: 69 },
				{ id: 5, title: 'Oliver', description: '', price: 59 },
				{
					id: 6,
					title: 'Cornichons med smetana & honung',
					description: '',
					price: 59,
				},
				{
					id: 7,
					title: 'Surdegsbröd, smör',
					description: '',
					price: 59,
				},
				{
					id: 8,
					title: 'Marconamandlar',
					description: '',
					price: 59,
				},
				{
					id: 9,
					title: 'Chips med havssalt',
					description: '',
					price: 39,
				},
			],
		},
		{
			id: 'menu-bubbels',
			title: 'BUBBLOR',
			description: '',
			type: 'small',
			price: '',
			items: [
				{
					id: 1,
					title: 'Prosseco',
					description: '',
					price: 120,
				},
				{
					id: 2,
					title: 'Deutz Classic',
					description: '',
					price: 150,
				},
				{
					id: 3,
					title: 'Deutz 2018',
					description: '',
					price: 200,
				},
				{
					id: 4,
					title: 'Deutz Rosé',
					description: '',
					price: 200,
				},
				{
					id: 5,
					title: 'Amour',
					description: '',
					price: 350,
				},
				{
					id: 6,
					title: 'Amour Rosé',
					description: '',
					price: 375,
				},
			],
		},
		{
			id: 'menu-coctails',
			title: 'DRINKAR',
			description: '',
			type: 'small',
			price: '',
			items: [
				{
					id: 1,
					title: 'Tosterup Sprits',
					description: '',
					price: 150,
				},
				{
					id: 2,
					title: 'Negroni',
					description: '',
					price: 150,
				},
				{
					id: 3,
					title: 'Dry martini',
					description: '',
					price: 150,
				},
			],
		},
		{
			id: 'menu-beer',
			title: 'ÖL',
			description: '',
			type: 'small',
			price: '',
			items: [
				{
					id: 1,
					title: 'Hof',
					description: '',
					price: 75,
				},
				{
					id: 2,
					title: '1664 Blanc',
					description: '',
					price: 80,
				},

				{
					id: 3,
					title: 'Norrlandsljus',
					description: '',
					price: 80,
				},
			],
		},
	],
};

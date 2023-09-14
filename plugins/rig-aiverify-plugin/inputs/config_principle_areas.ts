export const areaConfigs = [
  {
    id: "IAMA_deel_1",
    area: "IAMA",
    short_description: "Impact Assessment Mensenrechten en Algoritmes",
    principles: [
        {
            principle: "Deel 1: Waarom?",
            name: "Deel 1: Waarom?",
            short_description: "Bij de eerste vraag van dit thema gaat het erom na te denken over wat nu eigenlijk de **aanleiding** is om een algoritme in te willen zetten: wat is het probleem waarvoor de beoogde inzet van het algoritme een oplossing zou moeten vormen? Het gaat hierbij dus om **probleemdefinitie en -afbakening**. Daarbij is het essentieel om het probleem zo concreet en precies mogelijk te krijgen. Soms kan het probleem of de aanleiding een interne aangelegenheid zijn: interne processen verlopen niet efficiënt of kunnen efficiënter worden gemaakt door de inzet van een algoritme. In andere gevallen kan een algoritme worden ingezet om een maatschappelijk probleem of een probleem bij een bepaalde bevolkingsgroep op te lossen.",
            short_description2: "deel 1",
            description: "Nog meer uitleg",
            cid: "iama_deel_1_process_checklist",
          },
        //   {
        //     principle: "Deel 2: Wat?",
        //     name: "Deel 2: Wat?",
        //     short_description: "Deel 2: Wat?",
        //     short_description2: "Deel 2",
        //     description: "Nog meer uitleg",
        //     cid: "iama_deel_2_process_checklist",
        //   },
    ] 
  },
].map((config: any, index) => {
  config.index = index;
  return config;
})

export const areaByID = areaConfigs.reduce((acc, config) => {
  acc[config.id] = config;
  return acc;
}, {})

export const areaByName = areaConfigs.reduce((acc, config) => {
  acc[config.area] = config;
  return acc;
}, {})

export const principleConfigMap = areaConfigs.reduce((acc, config) => {
  for (let principle of config.principles) {
    acc[principle.principle] = {
      principle,
      areaId: config.id,
    };
  }
  return acc;
}, {})


export const getPrincipleConfig = (principle) => {
  return principleConfigMap[principle];
}

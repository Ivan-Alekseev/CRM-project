export const allCalls = {
  label: 'Все звонки',
  options: [
    {value: 'allClients', label: 'Все клиенты', selected: 'true'},
    {
      value: 'newClients',
      label: 'Новые клиенты',
      selected: 'false',
      isNewCalls: 'true',
    },
    {value: 'allPerformers', label: 'Все исполнители', selected: 'false'},
    {value: 'application', label: 'Через приложение', selected: 'false'},
    {value: 'otherCalls', label: 'Прочие звонки', selected: 'false'},
  ],
};


export const allSources = {
  label: 'Все источники',
  options: [
    {value: 'allClients', label: 'Все клиенты', selected: 'true'},
    {
      value: 'newClients',
      label: 'Новые клиенты',
      selected: 'false',
      isNewCalls: 'true',
    },
    {value: 'allPerformers', label: 'Все исполнители', selected: 'false'},
    {value: 'application', label: 'Через приложение', selected: 'false'},
    {value: 'otherCalls', label: 'Прочие звонки', selected: 'false'},
  ],
};

export const allOrganizations = {
  label: 'Все организации',
  options: [
    {value: 'ИП Сидорова Александра Михайловна', label: 'ИП Сидорова Александра Михайловна', selected: 'true'},
    {value: 'ООО Грузчиков Сервис Запад',label: 'ООО Грузчиков Сервис Запад',selected: 'false'},
    {value: 'ИП Митрофанов М.М.', label: 'ИП Митрофанов М.М.', selected: 'false'},
    {value: 'ИП Иванов М.М.', label: 'ИП Иванов М.М.', selected: 'false'},
  ],
};

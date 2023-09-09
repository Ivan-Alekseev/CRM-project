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

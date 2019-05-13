const rules = [
  {
    id: 1,
    content:
      'If a cell is alive and it has exactly 2 or 3 live neighbors, it stays alive.'
  },
  {
    id: 2,
    content:
      'If a cell is alive and has less than 2 or 4+ live neighbors, it dies.'
  },
  {
    id: 3,
    content:
      'If a cell is dead and it has exactly 3 live neighbors, it comes to life.'
  }
];

export default rules;

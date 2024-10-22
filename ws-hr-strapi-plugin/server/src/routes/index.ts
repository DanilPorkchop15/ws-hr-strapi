export default [
  {
    method: 'GET',
    path: '/task-link/:uuid',
    handler: 'controller.validateLink',
    config: {
      policies: [],
    },
  },

  {
    method: 'POST',
    path: '/task-link',
    handler: 'controller.generateLink',
    config: {
      policies: [],
    },
  },
];

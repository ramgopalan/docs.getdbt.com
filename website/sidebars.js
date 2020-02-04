module.exports = {
  docs: {
    'Documentation': [
      'introduction',
    ],
  },
  tutorial: {
    'Getting Started': [
      "tutorial/setting-up",
      {
        type: 'category',
        label: 'Create a project',
        items: [
          "tutorial/create-a-project-dbt-cloud",
          "tutorial/create-a-project-dbt-cli"
        ],
      },
      "tutorial/build-your-first-models",
      "tutorial/test-and-document-your-project",
      "tutorial/deploy-your-project"
    ]
  },
  learn: {
    'Getting Started': [
      "learn/setting-up",
      {
        type: 'category',
        label: 'Create a project',
        items: [
          "learn/create-a-project-dbt-cloud",
          "learn/create-a-project-dbt-cli"
        ],
      },
      "learn/build-your-first-models",
      "learn/test-and-document-your-project"
    ]
  },
}
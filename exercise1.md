I've chosen Python as the language for this exercise. The results of a quick googling is that pylint and flake8 are quite popular linting tools. Flake8 combines PyFlakes, pycodestyle and Mccabe linters. Python seems to come with an built-in unittest testing library. Other popular testing libraries are robot framework and pytest. For building, it seems that fabricate and pybuild are quite popular options.

Alternatives for GitHub Actions and Jenkins include GitLab CI Pipelines, Bitbucket Pipelines, and from the same company Atlassian Bamboo, Travis, Circle CI. Some less known (atleast for me) include AWS CodePipeline from Amazon, TeamCity from JetBrains, Buddy, Drone.io, Cruise Control and UrbanCode from IBM.

Some of these services are self-hosted, others are cloud based.
Self-hosted solution will need setting up and maintaining, as well as installing needed plugins and maintain them once new versions are released. It's never as simple as just installing the software, there's always configuration needed and often the configuration is quite different from one service to another.

Most of these are free for small usage, then offer tiered pricing. Some of the services also provide self-hosted enterprise versions, which can be rather expensive. In a self-hosted solution the billing is constant, whereas in a cloud based solution the billing might be based on usage, and it might fluctuate if the company providing the services decides to change prices.

If a more specific or complicated setup is needed, such as the need for GPU, then cloud based solution would not work and a self-hosted setup might be required. On a self-hosted environment the team has full control of the software and the hardware, they can add and remove more hardware as they see fit. This will of course add one more thing for the team to maintain. In a cloud based solution the team can concentrate on the their actual job, instead of running and maintaining hardware for a CI pipeline.

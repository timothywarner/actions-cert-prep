
# GitHub Actions Certification Training Prompts

## Domain 1: Author and Maintain Workflows

### Triggering Workflows
- **Prompt to create a basic workflow that triggers on push:**
  ```markdown
  Create a GitHub Actions workflow that triggers on push events to the main branch and runs a shell script that prints "Hello, World!".
  ```
- **Prompt to create a scheduled workflow:**
  ```markdown
  Create a GitHub Actions workflow that runs every day at midnight and executes a script to back up a database.
  ```
- **Prompt to create a manual workflow trigger:**
  ```markdown
  Create a GitHub Actions workflow that can be triggered manually through the GitHub UI and runs a shell command.
  ```
- **Prompt to create a webhook-triggered workflow:**
  ```markdown
  Create a GitHub Actions workflow that triggers on a custom webhook event named `deploy` and runs a deployment script.
  ```

### Workflow Components
- **Prompt to create a workflow with multiple jobs:**
  ```markdown
  Create a GitHub Actions workflow with two jobs: one that builds a Node.js application and another that runs tests. The test job should depend on the build job.
  ```
- **Prompt to use conditional job steps:**
  ```markdown
  Create a GitHub Actions workflow that only runs a step to deploy if the previous step (tests) succeeded.
  ```
- **Prompt to use GitHub-hosted runners:**
  ```markdown
  Create a GitHub Actions workflow that runs on a GitHub-hosted runner and builds a Python application.
  ```
- **Prompt to use self-hosted runners:**
  ```markdown
  Create a GitHub Actions workflow that runs on a self-hosted runner and executes a custom build script.
  ```

### Environment Variables and Secrets
- **Prompt to use encrypted secrets:**
  ```markdown
  Create a GitHub Actions workflow that uses an encrypted secret named `API_KEY` and prints its value in a step.
  ```
- **Prompt to set custom environment variables:**
  ```markdown
  Create a GitHub Actions workflow that sets an environment variable `ENV` to `production` and uses it in a script.
  ```

### Publishing Artifacts and Caching
- **Prompt to cache dependencies:**
  ```markdown
  Create a GitHub Actions workflow that caches npm dependencies to speed up subsequent builds.
  ```
- **Prompt to upload build artifacts:**
  ```markdown
  Create a GitHub Actions workflow that uploads build artifacts to the workflow run for later download.
  ```

### Publishing to GitHub Packages and Container Registry
- **Prompt to publish to GitHub Packages:**
  ```markdown
  Create a GitHub Actions workflow that builds a Java application and publishes the JAR file to GitHub Packages.
  ```
- **Prompt to publish to GitHub Container Registry:**
  ```markdown
  Create a GitHub Actions workflow that builds a Docker image and publishes it to the GitHub Container Registry.
  ```

## Domain 2: Consume Workflows

### Workflow Logs and Artifacts
- **Prompt to diagnose a failed workflow run:**
  ```markdown
  Create a GitHub Actions workflow and demonstrate how to diagnose a failed workflow run by examining the logs.
  ```
- **Prompt to download workflow artifacts:**
  ```markdown
  Create a GitHub Actions workflow that uploads test results as artifacts and demonstrate how to download them from the GitHub UI.
  ```

### Matrix Builds and Caching
- **Prompt to configure caching of dependencies:**
  ```markdown
  Create a GitHub Actions workflow that caches Maven dependencies to speed up subsequent builds.
  ```
- **Prompt to define a matrix build:**
  ```markdown
  Create a GitHub Actions workflow that runs tests on multiple versions of Node.js using a matrix build configuration.
  ```

### Using Default and Custom Environment Variables
- **Prompt to use default environment variables:**
  ```markdown
  Create a GitHub Actions workflow that uses the `GITHUB_SHA` default environment variable to print the commit SHA of the current workflow run.
  ```
- **Prompt to pass custom environment variables:**
  ```markdown
  Create a GitHub Actions workflow that sets and uses custom environment variables in a job.
  ```

## Domain 3: Author and Maintain Actions

### Creating and Publishing Actions
- **Prompt to create a JavaScript action:**
  ```markdown
  Create a GitHub Action using JavaScript that prints "Hello, World!" and publish it to the GitHub Marketplace.
  ```
- **Prompt to create a Docker action:**
  ```markdown
  Create a GitHub Action using Docker that runs a Python script and publish it to the GitHub Marketplace.
  ```
- **Prompt to version and release an action:**
  ```markdown
  Create a GitHub Action and demonstrate how to version and release it using Git tags.
  ```

### Using and Troubleshooting Actions
- **Prompt to use an action from the GitHub Marketplace:**
  ```markdown
  Create a GitHub Actions workflow that uses the `actions/checkout` action to check out the repository code.
  ```
- **Prompt to troubleshoot a JavaScript action:**
  ```markdown
  Create a GitHub Action using JavaScript that includes error handling and logs errors to the console for troubleshooting.
  ```

## Domain 4: Manage GitHub Actions in the Enterprise

### Managing Runners and Secrets
- **Prompt to configure self-hosted runners:**
  ```markdown
  Create a GitHub Actions workflow that runs on a self-hosted runner configured for enterprise use.
  ```
- **Prompt to manage encrypted secrets:**
  ```markdown
  Create a GitHub Actions workflow that accesses encrypted secrets stored at the organization level and uses them in a job.
  ```

### Distributing Actions and Workflows
- **Prompt to distribute a reusable workflow:**
  ```markdown
  Create a reusable GitHub Actions workflow template that can be used across multiple repositories in an enterprise.
  ```
- **Prompt to control access to actions:**
  ```markdown
  Create a GitHub Actions workflow that uses an organization-level action and demonstrates how to control access to it.
  ```

## Hands-On Labs

### CI/CD Pipeline
- **Prompt to create a hands-on lab for CI/CD pipeline:**
  ```markdown
  Create a hands-on lab guide for setting up a continuous integration and continuous deployment (CI/CD) pipeline using GitHub Actions. The lab should include steps to build, test, and deploy a sample application.
  ```

### Security Scanning
- **Prompt to create a hands-on lab for security scanning:**
  ```markdown
  Create a hands-on lab guide for integrating security scanning into a GitHub Actions workflow. The lab should include steps to set up a workflow that scans code for vulnerabilities and generates a report.
  ```

These prompts will help you cover the key skills and knowledge areas required for the GitHub Actions certification exam while providing practical, hands-on examples for learners.

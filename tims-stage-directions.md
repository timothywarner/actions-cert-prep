# GitHub Actions Certification Prep Class

## Overview
This class is designed to cover all core competencies required for the GitHub Actions Certification exam. Demos will be shown in GitHub UI and VSCode, focusing on the exam domains: workflows, actions, and enterprise management.

---

### 1. Author and Maintain Workflows

#### 1.1 Configure Workflows for Events
- **Objective:** Configure workflows for one or more events, including `push`, `pull_request`, `schedule`, and `workflow_dispatch`.
- **Demo:**
  - Create a workflow triggered by a `push` event to the `main` branch.
  - Add a scheduled event (`cron`) for nightly builds at `12:00 AM`.
  - Manually trigger a workflow using `workflow_dispatch`.
  - **Practical:** Commit changes to the `main` branch and observe the workflow run in GitHub UI.

#### 1.2 Use Workflow Jobs and Steps
- **Objective:** Configure jobs with multiple steps, actions, and shell commands.
- **Demo:**
  - Create a multi-job workflow where Job A (build) is required before Job B (test).
  - Use `actions/checkout@v3` to check out the repository and run a shell command to install dependencies.
  - **Practical:** Add conditional steps using `if: success()` to ensure Job B runs only if Job A succeeds.

#### 1.3 Use Secrets and Environment Variables
- **Objective:** Demonstrate the use of encrypted secrets and environment variables.
- **Demo:**
  - Add an encrypted secret (`DEPLOY_API_KEY`) to the workflow.
  - Use `${{ secrets.DEPLOY_API_KEY }}` to reference the secret in a job.
  - Set a custom environment variable (`ENV_VAR`) and use it within the job.
  - **Practical:** Ensure that sensitive data is masked in the logs.

#### 1.4 Publish Artifacts and Releases
- **Objective:** Demonstrate publishing to GitHub Packages and deploying releases.
- **Demo:**
  - Use `actions/upload-artifact@v3` to store build artifacts.
  - **Practical:** Deploy a release using `actions/create-release@v1` and upload the compiled code.

---

### 2. Consume Workflows

#### 2.1 Troubleshoot and Diagnose Failed Workflows
- **Objective:** Diagnose a failed workflow using logs and workflow history.
- **Demo:**
  - Analyze a failed workflow run in GitHub Actions UI.
  - Show how to access and interpret detailed logs.
  - **Practical:** Fix the error, push the changes, and re-run the workflow to ensure the fix works.

#### 2.2 Use Caching to Improve Performance
- **Objective:** Configure caching of workflow dependencies.
- **Demo:**
  - Add `actions/cache@v3` to cache `npm` dependencies between workflow runs.
  - **Practical:** Demonstrate how caching reduces run times on subsequent runs.

#### 2.3 Pass Data Between Jobs
- **Objective:** Share data between workflow jobs.
- **Demo:**
  - Upload artifacts from Job A and download them in Job B using `actions/upload-artifact@v2` and `actions/download-artifact@v2`.
  - **Practical:** Pass data between jobs by defining outputs in Job A and referencing them in Job B.

---

### 3. Author and Maintain Actions

#### 3.1 Create a JavaScript Action
- **Objective:** Demonstrate how to create and maintain custom GitHub Actions.
- **Demo:**
  - Create a simple JavaScript action that outputs a greeting (`Hello, ${{ inputs.name }}`).
  - Define `action.yml` with inputs and outputs.
  - **Practical:** Use this custom action in a workflow and trigger it.

#### 3.2 Publish a Custom Action to GitHub Marketplace
- **Objective:** Publish and manage custom actions in the GitHub Marketplace.
- **Demo:**
  - Create a release for the custom JavaScript action using semantic versioning (`v1.0.0`).
  - **Practical:** Publish the action to the GitHub Marketplace and demonstrate how others can use it.

#### 3.3 Use and Troubleshoot Docker-based Actions
- **Objective:** Demonstrate how to use and troubleshoot Docker-based actions.
- **Demo:**
  - Create a simple Docker action.
  - Use the Docker action in a workflow.
  - **Practical:** Push a change to the Docker action, rebuild the image, and demonstrate how to update the workflow with the new action version.

---

### 4. Manage GitHub Actions for the Enterprise

#### 4.1 Set Up Self-Hosted Runners
- **Objective:** Configure and manage self-hosted runners.
- **Demo:**
  - Set up a self-hosted runner on a local machine or server (using your desktop as the example).
  - Configure the workflow to use the self-hosted runner instead of GitHub-hosted runners.
  - **Practical:** Demonstrate the process of adding, managing, and labeling runners.

#### 4.2 Manage Enterprise Secrets
- **Objective:** Explain the scope of encrypted secrets at the organization level.
- **Demo:**
  - Set up organization-level secrets in TWORG's organization.
  - **Practical:** Use the secret across multiple repositories within TWORG and restrict access based on repository needs.

#### 4.3 Implement Environment Protections and Approval Gates
- **Objective:** Implement environment protections and approval gates.
- **Demo:**
  - Set up environment protection rules to restrict deployment to production unless approved.
  - **Practical:** Show how an approval gate halts a workflow until a designated reviewer approves it.

#### 4.4 Define a Matrix of Job Configurations
- **Objective:** Run workflows with multiple configurations using job matrices.
- **Demo:**
  - Define a job matrix for testing on multiple operating systems (`ubuntu-latest`, `windows-latest`, `macos-latest`).
  - Use Node.js versions (`12`, `14`, `16`) as matrix values.
  - **Practical:** Run parallel jobs for each OS/Node.js combination and review the results.

---

### 5. Final Exam Prep

#### 5.1 Comprehensive Workflow Setup
- **Objective:** Demonstrate mastery of the full GitHub Actions workflow pipeline.
- **Scenario:**
  - Create a workflow in TWORG’s repository that builds, tests, caches dependencies, and deploys to production if approved.
  - Use a self-hosted runner for the build process.
  - **Practical:** Include everything learned: secrets, caching, matrix configurations, approval gates, and self-hosted runners.

#### 5.2 Mock Exam Review
- **Objective:** Ensure readiness for the certification exam.
- **Practical:** Review a series of common exam scenarios:
  - Debugging failed workflows.
  - Writing custom actions.
  - Using Docker actions.
  - Managing secrets across an enterprise.

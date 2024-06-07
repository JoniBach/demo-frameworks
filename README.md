# Demo Frameworks Repository

This repository serves as a parent project for multiple demo projects, each individually version-controlled. This setup allows easy management and collaboration on multiple projects within a single repository using Git submodules.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Setting Up the Repository](#setting-up-the-repository)
4. [Working with Submodules](#working-with-submodules)
5. [Contributing](#contributing)
6. [License](#license)

## Project Structure

The repository contains the following submodules:

- LandingPage: Demo for the landing page.
- TablePage: Demo for the table page.
- FormPage: Demo for the form page.
- ChartPage: Demo for the chart page.

Each submodule is a separate Git repository that can be worked on independently.

## Prerequisites

Before getting started, make sure you have the following:

- Git installed on your machine.
- A GitHub account for accessing and managing the repositories.

## Setting Up the Repository

Follow these steps to clone the repository and initialize the submodules:

1. Clone the Repository:

   ```
   git clone https://github.com/JoniBach/demo-frameworks.git
   cd demo-frameworks
   ```

2. Initialize and Update Submodules:
   ```
   git submodule update --init --recursive
   ```

## Working with Submodules

### Adding a New Submodule

To add a new submodule to the parent repository:

1. Navigate to the parent repository:

   ```
   cd path/to/demo-frameworks
   ```

2. Add the submodule:

   ```
   git submodule add <submodule-repository-url> <path-in-parent-repo>
   ```

   Example:

   ```
   git submodule add https://github.com/yourusername/project1.git project1
   ```

3. Commit the changes:
   ```
   git add .
   git commit -m "Add project1 as a submodule"
   git push origin main
   ```

### Updating Submodules

To update a submodule to the latest commit:

1. Navigate to the submodule directory:

   ```
   cd path/to/submodule
   ```

2. Fetch the latest changes and checkout the desired branch/commit:

   ```
   git fetch
   git checkout main
   git pull origin main
   ```

3. Go back to the parent repository and commit the changes:
   ```
   cd ..
   git add <submodule-path>
   git commit -m "Update submodule <submodule-name> to latest commit"
   git push origin main
   ```

### Removing a Submodule

To remove a submodule:

1. Remove the submodule entry from .gitmodules:

   ```
   git submodule deinit -f -- <submodule-path>
   git rm -f <submodule-path>
   git config -f .git/config --remove-section submodule.<submodule-path>
   ```

2. Commit the changes:
   ```
   git add .gitmodules
   git commit -m "Remove submodule <submodule-name>"
   git push origin main
   ```

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

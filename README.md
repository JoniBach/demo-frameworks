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

- angular
- react
- solid
- svelte
- vue

Each submodule is a separate Git repository that can be worked on independently.

## Submodule content

Each repository contains identical pages and demos relative to the individual framework syntax

### Pages

- LandingPage: Demo for the landing page.
- TablePage: Demo for the table page.
- FormPage: Demo for the form page.
- ChartPage: Demo for the chart page.

### Components

- Nav: Navigation for inside of the app.
- Table: A business logic agnostic implamentation of tabulator-tables.
- FormPage: A framework specific business agnostic implamentation of a form
- ChartPage: A D3 line chart displaying reviews built from identical TS file across all apps.

### State & Data Fetching

Each repo implaments some sort of centeralised state to hold static data in the application.

This is then served to each page and presented to each component

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

### Modifying data

With current exception of the charts, All the bisiness logical content in this application is generated from json files stored in the parent `/data` directory.

Once a change is made in this directory you can run `npm run loadData` the project root directory to run the `load_data.js` script and populate these data files in each of the relavent locations within frameworks.

You can check out the scripts in `package.json` to learn more about the setup scripts.

These files are individually tracked within each of the child frameworks so keep in mind that if you have chosen to fork this parent repo, you will need to change the git URL of each of those to persist the changes on a repo by repo bases. This repository will track the changes of the root data folder.

1. `config.json`

- Stores the information about what data to load

```
[
    {
      "title": "Brands" // string - A sensible name for each element

      "id": "brands", // string - A unique ID that matches the configuration in the collumn & form config files.

      "data": "brands.json" // string - the exact name of the file that stores holds the raw data relavent to this entity
    },
    // ...
]
```

2. `columns.json`

- Stores the configuration for the columns pages

The table components are powered by [Tabulator Tables](https://tabulator.info/)

The content inside `data` is exactly the same as the column config that you can expect to find in their docs. It is consistent across all frameworks.

```
[
   {
    "id": "brands", // string - matches the relavent id in the main `config.json`
    "data": [
      { "title": "brand id", "field": "brand_id", "width": 150 },
      { "title": "name", "field": "name", "width": 200 },
      { "title": "description", "field": "description", "width": 300 },
      {
        "title": "date joined",
        "field": "date_joined",
        "sorter": "date",
        "align": "center",
        "width": 150
      }
    ] // array of objects - config provided by tabulator
  },
  ...
]
```

3. `forms.json`

- Stores the configuration for the forms pages

The form component is built from scratch in each library.

The content inside `data` is exactly the same as the column config that you can expect to find in their docs. It is consistent across all frameworks.

```
[
  {
    "id": "brands", // string - id matching a record in config.json
    "data": [
      {
        "title": "Brand ID", // string - a sensible label for the input
        "field": "brand_id", // string - matches the id in the data response
        "type": "text", // string - the data type the field produces
        "required": true, // boolean - validation rule for required
        "placeholder": "Enter brand ID", // string - input placeholder text
        "validation": "^[a-zA-Z0-9_-]+$" // - string - regex validation that the field should conform to before submit is allowed
      },
      {
        "title": "Name",
        "field": "name",
        "type": "text",
        "required": true,
        "placeholder": "Enter brand name",
        "validation": "^[a-zA-Z0-9 ]+$"
      },
      {
        "title": "Description",
        "field": "description",
        "type": "textarea",
        "required": true,
        "placeholder": "Enter description",
        "validation": "^[\\s\\S]*$"
      },
      {
        "title": "Date Joined",
        "field": "date_joined",
        "type": "date",
        "required": true,
        "placeholder": "Select date joined",
        "validation": "^\\d{4}-\\d{2}-\\d{2}$"
      }
    ]
  },
  ...
]
```

4. `charts.json`

- Stores the configuration for the charts pages

The chart components are built with a library called [D3](https://d3js.org/). It takes a more low level appraoch to graphing. Each repo currently implaments data from the `reviews.json` file. (This will be updated to be business logic agnostic and selected through configuration later)

Though the graphs currently rely on the reviews data, the content itself is configurable to an extent (as follows).

```
{
  "margin": {
    "top": 20,
    "right": 30,
    "bottom": 30,
    "left": 40
  },
  "width": 500,
  "height": 300,
  "accessor": "rating_metrics", // string - the id of the data object
  "metrics": [
    "overall_rating",
    "quality",
    "value_for_money",
    "ease_of_use",
    "customer_service",
    "features",
    "performance",
    "reliability",
    "design",
    "packaging"
  ] // array of strings - a list of keys that you want to register and map to lines
}

```

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

3. `data json files`

- The files containing the raw data to be mapped to the components in each framework. see item 1 `config.json` for guidence on how to register this data.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# Spikerz Dashboard UI

## Project Overview

The Spikerz Dashboard is a modern, responsive web application built with Angular, designed to provide a comprehensive overview of asset flow, contextual risks, and remediation techniques. It aims to deliver a visually appealing and highly functional user interface that adapts seamlessly across various devices, from desktop to mobile.

This project implements the UI specifications provided by Spikerz, adhering to strict code quality, design, responsiveness, and accessibility guidelines.

## Features
The dashboard is structured into three main zones, offering a rich user experience:

Left Sidebar Navigation:

Vertical menu with intuitive icons and labels.

Highlights the currently active navigation item.

Includes user profile and logout options at the bottom.

Responsive collapse behavior, transforming into a hamburger menu on mobile.

Main Content Area:

Central Information Panel:

Description Section: Provides context for assets/systems.

Extra/Metadata Section: Displays key-value data (Date, Status, Owner) in a responsive vertical table format.

Right Panel – Asset Flow & Contextual Risk:

Asset Flow Diagram: Visualizes infrastructure flow with horizontally arranged server icons, showing branching logic, asset names, IP addresses, and optional risk badges.

Contextual Risk Table: Lists assets with color-coded risk labels and includes pagination.

Risk Summary (Donut Chart): Offers a visual summary of risk distribution (Critical, High, Medium, Low) with a centered total count.

Remediation Techniques View:

Displays remediation techniques across three distinct vertical columns.

Each column features repeating asset cards with titles, icons, and descriptions, visually grouped with dashed or colored borders.

Floating Drawers / Detail Cards (Vulnerabilities Drawer):

A right-hand side drawer that appears for selected assets.

Shows vulnerabilities as pills or tags.

Includes affected asset details, context, signature lists, and preview cards with contextual log snippets.

Responsive Design Highlights (Mobile View Bonus)
Collapsed sidebar into a hamburger menu.

Vertical sections stack top-down for improved readability.

Asset flow diagram becomes horizontally scrollable.

Risk table and vulnerability drawers appear full-width or as modals.

Cards compress into a single-column layout.

Ensured proper padding and touch target sizes for mobile usability.

Technologies Used
Framework: Angular (v20.1.0)

Styling: SCSS (Sass)

UI Components/Icons: Angular Material

Charting: ng2-charts (powered by Chart.js)

Language: TypeScript

Package Manager: npm

Setup and Installation
Follow these steps to get the Spikerz Dashboard UI running on your local machine.

Prerequisites
Node.js (LTS version recommended)
npm (comes with Node.js)
Angular CLI (install globally if you haven't already):

```bash
npm install -g @angular/cli
```

Installation Steps
Clone the repository (if applicable, otherwise, use the project files):

```bash
git clone <repository-url>
cd spikerz-dashboard
```

Install project dependencies:
Navigate to the project directory and install all required Node.js packages:
```bash
npm install
```

This command will install Angular Material, ng2-charts, and other dependencies defined in package.json.

Running the Application
Once the dependencies are installed, you can start the development server:

```bash
ng serve --open
```

This command will:
Compile the Angular application.
Launch a development server (typically at <http://localhost:4200/>).

Open the application in your default web browser.
The application will automatically reload if you change any of the source files.

Project Structure (High-Level)

```plaintext
spikerz-dashboard/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable UI components (sidebar, drawers, etc.)
│   │   │   ├── sidebar-navigation/
│   │   │   ├── main-content-area/
│   │   │   └── vulnerabilities-drawer/
│   │   ├── services/         # Shared services for communication (e.g., DrawerService)
│   │   │   └── drawer.service.ts
│   │   ├── app.component.ts  # Root component defining the main layout
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts     # Angular 20+ application configuration
│   │   └── app.routes.ts     # Application routing definitions
│   ├── assets/               # Static assets (images, icons, fonts)
│   │   ├── spikerz-logo.svg
│   │   ├── spikerz-icon.svg
│   │   └── user-avatar.png
│   └── styles/               # Global SCSS styles
│       ├── _variables.scss   # Design tokens (colors, spacing, fonts, breakpoints)
│       ├──_mixins.scss      # Reusable SCSS mixins
│       ├── _base.scss        # Global resets, typography, utility classes
│       └── styles.scss       # Main entry point for global SCSS imports
├── angular.json              # Angular CLI configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

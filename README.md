# Nexus

**Nexus** is a full-stack team collaboration and productivity platform that combines real-time communication, project management, task tracking, file collaboration, scheduling, meetings, and workspace administration in one application.

What began as a messaging application has evolved into a broader productivity workspace designed to reduce the need to switch between separate chat, task, project, file, and scheduling tools.

## Overview

Nexus brings team communication and execution into a shared workspace.

Instead of treating messaging, projects, tasks, files, and meetings as separate systems, Nexus connects them so conversations can lead directly to work.

The platform includes:

* Workspace authentication
* Real-time messaging
* Direct messages
* Team rooms
* Project management
* Task creation and assignment
* Personal task views
* Team collaboration workflows
* File uploads and file management
* Meeting management
* Scheduling
* Notifications
* Team and member management
* Onboarding
* User settings
* Progressive Web App support

## Tech Stack

### Frontend

* **React 18**
* **Vite**
* **JavaScript / JSX**
* **Zustand**
* **Anime.js**
* **Geist**
* **React Icons**

### Backend & Data

* **Supabase**
* **PostgreSQL**
* **Supabase Authentication**
* **Supabase Storage**
* **Supabase Realtime**

### Testing & Tooling

* **Vitest**
* **React Testing Library**
* **ESLint**
* **Vite PWA**
* **Service Workers**
* **Vercel**

## Why I Built It

Teams often split their work between several tools:

```text
Chat
   +
Project Management
   +
Task Tracking
   +
File Storage
   +
Meetings
   +
Scheduling
```

That fragmentation creates context switching and makes it easy for work discussed in one system to become disconnected from the system where it is actually tracked.

Nexus explores a more unified model:

```text
Conversation
     ↓
Project
     ↓
Task
     ↓
Assigned Team Member
     ↓
Files / Collaboration
     ↓
Completion
```

The goal is to keep communication and execution connected.

## Messaging

Nexus includes both workspace conversations and direct messaging.

Messaging features include:

* Real-time conversations
* Direct messages between workspace members
* Team rooms
* Media and file sharing
* Message history
* User-aware message layouts
* Notifications
* Workspace member lookup

The interface visually separates messages sent by the current user from messages received from other members to make conversations easier to scan.

## Projects

Projects provide a structured space for organizing work.

Users can:

* Create projects
* View project details
* Organize related tasks
* Associate files with project work
* Collaborate with team members
* Track work through the broader Nexus workspace

Projects are designed to connect directly with the communication and task-management systems rather than existing as isolated records.

## Task Management

Nexus includes a task system for both individually created and assigned work.

Users can manage:

* Personal tasks
* Assigned tasks
* Project tasks
* Due dates
* Task status
* Task ownership
* Collaboration requests

The task workflow is designed around the idea that work frequently requires help from other teammates.

Rather than moving into another communication tool, task-related collaboration can flow directly back into Nexus messaging.

## Files

Nexus includes a centralized file workspace.

Files can be associated with team activity and projects so documents do not become disconnected from the work they support.

The application includes dedicated file-management components and validation around uploaded content.

## Meetings & Scheduling

Nexus includes dedicated meeting and scheduling areas so collaborative work can move from conversation to real-time discussion without leaving the workspace.

The architecture is designed to support external meeting and calendar integrations while maintaining Nexus as the central user interface.

The long-term goal is to support providers such as:

* Google Calendar
* Google Meet
* Microsoft Teams

Google integration is the primary planned integration path.

## Workspace Architecture

The UI is organized into independent feature domains.

```text
Nexus
│
├── Authentication
├── Dashboard
├── Messaging
│   ├── Rooms
│   └── Direct Messages
├── Projects
├── Tasks
├── Files
├── Meetings
├── Schedule
├── Notifications
├── Team
├── Onboarding
└── Settings
```

This feature-oriented structure keeps major application areas separated while allowing them to share workspace state and backend services.

## Supabase Backend

Nexus uses Supabase for the backend platform.

Supabase provides:

* PostgreSQL persistence
* Authentication
* Realtime data
* Storage
* Database relationships
* Access-control foundations

The repository includes dedicated Supabase configuration and database work rather than relying on a frontend-only mock backend.

## Security Work

Security has been an active part of Nexus development rather than an afterthought.

Recent work has included:

* Authentication hardening
* Safer error handling
* File-upload validation
* Browser security headers
* Content Security Policy improvements
* Workspace relationship fixes
* Client-facing database security improvements

The application uses explicit security boundaries instead of assuming frontend validation is sufficient.

## State Management

Nexus uses **Zustand** for shared client state.

This keeps cross-feature state management lightweight while avoiding excessive prop drilling across major workspace areas such as:

* Messaging
* Projects
* Tasks
* Notifications
* Team state
* Application shell state

## Progressive Web App

Nexus includes PWA support through Vite.

The application includes:

* Service-worker support
* Installable app behavior
* Generated PWA assets
* Offline-capable application infrastructure

This allows Nexus to behave more like an installed productivity application than a traditional browser-only website.

## Testing

The project uses:

* **Vitest**
* **React Testing Library**
* **Testing Library DOM**
* **JSDOM**

Run the test suite with:

```bash
npm run test
```

Development watch mode:

```bash
npm run test:watch
```

Lint the project:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Running Locally

Install dependencies:

```bash
npm install
```

Create an environment file using the included example configuration.

Then start the development server:

```bash
npm run dev
```

Vite will provide the local development URL.

## Environment

Nexus requires a configured Supabase project.

Typical client configuration includes:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Sensitive database credentials and service-role credentials should never be included in client-side environment variables.

## Current Development

Nexus is actively evolving from a communication platform into a broader productivity system.

Current and planned development areas include:

* Improved project workflows
* Expanded task collaboration
* Project-specific file organization
* Email verification and recovery flows
* Branded authentication emails
* Google Calendar integration
* Google Meet integration
* Additional meeting providers
* Improved notification workflows
* Better team collaboration
* Mobile/PWA refinements

## What This Project Demonstrates

Nexus demonstrates experience with:

* Full-stack application architecture
* React application design
* PostgreSQL-backed applications
* Supabase
* Authentication
* Realtime systems
* Data relationships
* State management
* File uploads
* Security hardening
* Project-management workflows
* Productivity software design
* PWA architecture
* Testing
* Responsive interfaces
* Iterative product development

## Project Status

**Active development**

Nexus began as a real-time messaging application and has evolved into a full productivity workspace.

The current focus is connecting communication, projects, tasks, files, meetings, and scheduling into a cohesive collaboration experience while continuing to strengthen the application's security, reliability, and backend architecture.

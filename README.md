# JobGetAssignment

## Architecture

The architecture of the app is loosely based on DDD or domain driven design. While it might look like overkill for this application, however I just did this as an example of how I would want to write a large backend application in typescript.

I also choose typescript since this was a backend application, and I can benefit from the type checking quite a bit.

## Running the application

To start the application you need to run the following commands(This assumes you have node v8.12.0 installed on your system).
```
npm install
npm run build && npm run start
```
Make a Get request to the following URL to see the result:
```
http://localhost:3000/jobs?searchTerm=Waiter&country=US&ip=1.1.1.1&user_agent=RandomUser&city=Palo%20Alto&state=CA&page=1&radius=200
```

## Testing
Every folder has a *.test.ts file which contains the tests for the file name it corresponds to.

To run tests use the following command
```
npm run test
```

## General Layout
The application follows Dependency injection to resolve all dependencies. The Main express App is also instatiated via dependency inject. I have used inversify for DI.

The app is divided into the following major folders

- **src/dto**: This contains all the object which are used for carrying around the data from one service to another.
- **src/interfaces**: This contains all the interface objects which are required for the creation of the app.
    -  **src/interfaces/services**: These are the domain services interfaces.
    -  **src/interfaces/handlers**: This contains the interface for http handlers.
    -  **src/interfaces/application**: This contains the interface for the HTTP application.

- **src/entities**: This folder has a layout similar to the interfaces folder, and contains the actual implementations for the interfaces defined in the folder mentioned above.

## Folder Structure
```
src
├── config
│   └── jobget_assignment_container.ts
├── constants
│   ├── identifiers.ts
│   └── tags.ts
├── dto
│   ├── JobGetDTO.test.ts
│   ├── JobGetDTO.ts
│   ├── JobSearchDTO.test.ts
│   ├── JobSearchDTO.ts
│   └── NeuvooJobResultDTO.ts
├── entities
│   ├── applications
│   │   └── JobGetHttpApplication.ts
│   ├── handlers
│   │   └── JobView.ts
│   ├── index.ts
│   └── services
│       ├── JobService.test.ts
│       ├── JobService.ts
│       └── NeuvooJobResultFixture.json
├── interfaces
│   ├── application
│   │   └── httpApplicationInterface.ts
│   ├── handlers
│   │   └── BaseRestViewInterface.ts
│   ├── index.ts
│   └── service
│       └── JobServiceInterface.ts
└── server.ts
```


## Things I would have done better (if I had more time.)

-   Write Integration tests
-   Write contract tests
-   Figure out linting for typescript.
-   Write documentation in the Typescriptish way(if any), and may be look at auto generating docs.
-   Improve test coverage.

## Things I would have done better (if this was going to production)
- Setup ci-cd
- Setup code quality gates with Sonar.


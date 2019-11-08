# Consume More Stuff

> A custom CMS for personal product sale

## Introduction

Build a Content Management System using:

- **Backend**

  - **Express** as the application server
  - **PostgreSQL** as the database server
  - **Bookshelf.js** as the ORM
  - **passport.js** for Authentication and Authorization

- **Frontend** - **React.js** or **AngularJS** as FE framework - **Sass** for styling - **Webpack** for bundling, provided by FE generator.
- **Stretch Add-ons**
  Some stretch and polish goals will use additional technologies. - **AWS S3** for storing product images - **mailgun** or **sendgrid** for sending email

Your team will be building a minimal CMS to allow users to list personal items for sale.
The application will allow unauthorized users to browse the listed products. To post an Item for sale, a User account will be required. The backend should provide RESTful api endpoints. The frontend should be a SPA (Single Page App) that provides a smooth user experience.

You will need to work as a team to complete this project. To facilitate team communication you will be using [Trello](https://trello.com/) to track tasks and stay on track.

The instructors will provide a tech lead role, and will need to approve design and implementation decisions. Data modeling will need to be done by the team, but approved by the tech leads.

## Business Requirements

### MVP

#### Unauthenticated user

- Home page should list **x** number of random `Items` by `Category`.
- Home page should provide a way to view **all** `Items`.
- Home page should provide a view of `Items` by `Category`.
- Home page should show a subset of key details of the `Items`, along with one image.
- Home page should have a login button.
- `Item` detail page should contain: - description (required) - price - manufacturer or make - model name or number - condition (required) - category (required) - dimensions - when the `Item` was initially published - when the `Item` was last updated - notes / details

#### Authenticated User

- Should be able to view the same home page and details that an unauthenticated user can.
- `User` home page should contain: - A way to add new `Items`. - A way to logout. - display the current `Users` name - List view of **published** `Items`. - List view of **sold** `Items`.
- Add new `Item` should present the `User` with a form to add all `Item` details. - A newly added `Item` should have a status of **published** when created. - The form should provide validation and feedback if inputs in omitted or invalid. - Should be able to select an image and upload it for the `Item`.
- `Item` detail owned by `User`: - Should be able to modify all inputs. - Change the _Status_ of the `Item`. **published** or **sold** - Should be able to replace the image associated with the `Item`.
- When an `Item` is published it should record the **publish** date and time.
- When an `Item` is modified it should record the **update** date and time.
- The `User` **Settings** view should provide the `User` a way to change their password.

#### Features

- The application should display a logo.
- Mobile friendly application. Styles should work from phone up to desktop.
- Clicking on an `Item` in any list, should display the detail view of that `Item`.
- `Items` should not be able to be deleted, but should have a status option that is equivalent.
- Should have a registration page to allow the creation of new `Users`. - `Users` should register using **email**. - Any information that can identify a user should not be available to any other `User`.

---

### Stretch

#### Unauthenticated user

- Should be able to generate a share link to a specific item.
- Should be able to change the view between grid, list, thumb views.
- Should be able to view more than one image related to an `Item`.
- Home page should have at least one filter. To filter out `Items` from the view.

#### Authenticated User

- Add home view option to show **featured\*** `Items`, based on how many views the `Item` has had.
- List of `Items` currently published for sale.
- List of `Items` pending publishing. - Should provide a quick way to publish the `Item`.
- List of `Items` in other state, (sold, archived)
- Should have access to a `Messages` view that allows anonymous communication between authenticated `Users` based on a published `Item`.
- The `Item` **detail** view should provide a way for the `User` to send a message to the `User` who published the `Item`.
- Should see a count of how may times the `Item` has been viewed and if the `Item` is currently **featured**.
- Home view should have a way for the `User` to hide `Items` they are not interested in and a way to restore all items being visible.

#### Admin User

- should be able to create new admin accounts
- should be able to make user inactive
- CRUD for categories
- should be able to ban a product sale
- CRUD for statuses
- CRUD for conditions
- should be able to send messages to any user
- Add Role table. Set application access based on role.

#### Features

- Add more states for `Item`. Pending, Published, Sold, Archived, Pulled.
- Add **unit** tests
- `Messages` will only be allowed by originating from an `Item`
- Admin `User`
- When `Item` details are viewed by anyone other than the owner, it should count the view, to track what `Items` are most popular.

---

### Polish

#### Unauthenticated user

- should be able to search for keywords
- pagination
- should see a visual indicator if an item is getting a lot of views, is featured.

#### Authenticated User

- should verify email
- images should be stored in S3
- should be able to contact seller through
  - email
- can send email to a hashed email (eg. **600a8cd20d@c99.team-one.consumemorestuff.com** ) that will forward to registered user
- should be able to see generalized area for the item (geo-location)

#### Admin User

- should be able to contact all or individual users
  - email
  - messages

#### Features

- make prettier
- integrate email service (mailgun, sendgrid)
- add supertest tests

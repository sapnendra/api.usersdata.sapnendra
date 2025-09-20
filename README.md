# Random Users Data - REST API
This project is an Express.js REST API that serves user data objects. It supports CORS and provides endpoints to fetch all users or a specified number of random users.

***

## Getting Started

### API Endpoints

| Route | Method | Description |
| :-- | :-- | :-- |
| `/api/users` | GET | Returns all user objects in JSON. |
| `/api/users/count` | GET | Returns `count` random user objects as JSON. |

### Examples

- Get all users:

```
GET http://localhost:3000/api/users
```

- Get 5 random users:

```
GET http://localhost:3000/api/users/5
```


***

## Usage Notes

- Requests for more users than exist will return all available users.
- CORS is enabled for requests from `http://localhost:3000`.

***

## Contribution Guide

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Make changes and commit:

```bash
git commit -am "Add new feature"
```

4. Push to your branch:

```bash
git push origin feature/your-feature
```

5. Create a Pull Request describing your changes.

### Coding Guidelines

- Use ES6+ syntax and practices.
- Keep contributions well-documented and tested.
- Follow existing code style for naming and indentation.


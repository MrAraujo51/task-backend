# Create Task

Create a Task with unique id and an status 'Open'.

**URL** : `/tasks`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide title and description of the task

```json
{
    "title": "[unicode 50 chars max]",
    "description": "[unicode 500 chars max]"
}
```

**Data example** All fields must be sent.

```json
{
    "title": "Task 1",
    "description": "New Task description"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `201 CREATED`

**Content example**

```json
{
    "title": "Task 1",
    "description": "New Task description",
    "status": "Open",
    "id": 2,
    "creationDate": "2021-06-14T15:57:32.520Z",
    "modificationDate": "2021-06-14T15:57:32.520Z"
}
```

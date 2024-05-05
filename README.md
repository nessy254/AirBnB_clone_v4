# AirBnB Clone - The Console

The console is the first segment of the AirBnB project at Holberton School, covering fundamental concepts of higher level programming. The goal is to deploy a server as a simple copy of the AirBnB Website (HBnB). A command interpreter is created to manage objects for the AirBnB (HBnB) website.

## Functionalities

- Create a new object (e.g., a new User or a new Place).
- Retrieve an object from a file, a database, etc.
- Perform operations on objects (count, compute stats, etc.).
- Update attributes of an object.
- Destroy an object.

## Table of Content

- Environment
- Installation
- File Descriptions
- Usage
- Examples of Use
- Bugs
- Authors
- License

## Environment

This project is interpreted/tested on Ubuntu 14.04 LTS using Python 3 (version 3.4.3).

## Installation

1. Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
2. Access the AirBnb directory: `cd AirBnB_clone`
3. Run hbnb (interactively): `./console` and enter a command
4. Run hbnb (non-interactively): `echo "<command>" | ./console.py`

## File Descriptions

- `console.py`: Contains the entry point of the command interpreter. Lists supported commands.
- `models/` directory contains classes used for this project:
  - `base_model.py`: The BaseModel class from which future classes will be derived.



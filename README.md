# Geometry, an application for displaying Postgis data in a plan

- a postgis db
- a backend server / api
- a front end

## Warning

This project is actually a POC and a work in progress.

## Install project

Set env var: for geometry-root in your shell configuration (e.g. bashrc or .zshrc)

```
GEOMETRY_ROOT=/your/path/geometry
```

Build the docker stack.

```
make b
```
It will automatically start the project after the build.

## Start the project

When the project has been build and if no packages has been changed:

```
make s
```

If you change node modules packages, rebuild the project.

## About database

when installing the project, you need to create the postgis database and to add the postgis extension.

## Todo

- insert geometry data in postgis from node
- export data from postgis db
- add a front able to read data from api
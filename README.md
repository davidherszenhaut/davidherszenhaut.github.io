# Updating

1. Clone [portfolio](https://github.com/davidherszenhaut/portfolio) and [davidherszenhaut.github.io](https://github.com/davidherszenhaut/davidherszenhaut.github.io)
2. Make changes in `portfolio` and run `npm run deploy`
3. Copy the results from `portfolio`'s `gh-pages` branch to `davidherszenhaut.github.io`'s `master` branch.

# TODO

* double check efficacy of `Updating` instructions
* make resume page look like actual resume (header spacing, content)
* fix content on projects page
* double check favicon on resume pdf page
* double check responsiveness (hero image)

# Component Hierarchy

- App
  - Header
    - _left_
      - logo
    - _right_
      - Projects
      - R&eacute;sum&eacute;
  - Content
    - _hero_
      - left
        - title
        - subtitle
        - caption
        - contact
      - right
        - image
    - _projects_
      - name
      - left
        - stack
      - right
        - links
      - description
      - image
    - _r&eacute;sum&eacute;_
      - Contact
        - space between
          - email
          - phone
          - linkedin
      - Education
        - space between
          - name
          - location
          - date
        - text
      - Experience
        - space between
          - title
          - company, location
          - date
        - text
      - Skills
        - programming languages
        - libraries/frameworks
        - tools
        - spoken languages
      - Extracurriculars
        - space between
          - name
          - organization
          - date
        - text
      - Coursework
        - cs
        - math
        - psyc
  - Footer
    - David Herszenhaut &copy; `currentYear`

# Updating

1. Clone [portfolio](https://github.com/davidherszenhaut/portfolio) and [davidherszenhaut.github.io](https://github.com/davidherszenhaut/davidherszenhaut.github.io)
2. Make changes in `portfolio` before copying over to `staging` branch in `davidherszenhaut.github.io`
3. Run `npm run deploy` to deploy to `master` from `staging` in `davidherszenhaut.github.io`

# TODO

* double check efficacy of `Updating` instructions

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

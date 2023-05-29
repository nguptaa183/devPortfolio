# Developer Portfolio
Modular developer portfolio website build with ReactJS

## Demo link:
[https://nikhilgupta.me](https://nikhilgupta.me)

![nikhil portfolio image](https://github.com/nguptaa183/devPortfolio/assets/22504975/b17d0b79-609f-4600-952e-3c5de8acd825)

## Table of Content:
- [About](#about)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Publish](#publish)
- [Credits](#credits)
- [License](#license)

## About
**devPortfolio** is a modular website that showcases developer's portfolio as personal information, skills, education, projects, experience, certifications, etc

## Prerequisites
- Get your [GitHub token](https://github.com/settings/tokens/new?scopes=repo&description=devPortfolio) **(Only if you're using projects from Github)**
- Get your [Recaptcha](https://www.google.com/recaptcha/admin) site key and secret key
- Create [EmailJS](https://dashboard.emailjs.com/sign-up) account
- Add EmailJS [email service](https://www.emailjs.com/docs/tutorial/adding-email-service/)
- Setup EmailJS [email template](https://www.emailjs.com/docs/tutorial/adding-email-service/) referring image below
- Template contents

![template contents image](https://github.com/nguptaa183/devPortfolio/assets/22504975/c3de12f1-28da-437c-a9a9-46b7259757ae)

- Template Auto Reply

![template auto reply image](https://github.com/nguptaa183/devPortfolio/assets/22504975/2afeaf84-d32d-4c03-92fd-eaf2f03208a0)

- Get your EmailJS [service ID](https://dashboard.emailjs.com/admin), [template ID](https://dashboard.emailjs.com/admin/templates) and [public key](https://dashboard.emailjs.com/admin/account)

## Setup
- Download or clone the repository
- Copy environment variables `cp .env.template .env.development`
- Add the respective tokens and keys form the [prerequisites](#prerequisites)
- Add information related to your personal, skills, education, projects, experience, certifications in respective files in constants/userData folder
- If you aren't using projects from GitHub, set **useGithubProjects = false** in projects.js file in [line](https://github.com/nguptaa183/devPortfolio/blob/main/src/constants/userData/projects.js#LL2C34-L2C39)
- If you using projects from GitHub, set **useGithubProjects = true** in projects.js file in [line](https://github.com/nguptaa183/devPortfolio/blob/main/src/constants/userData/projects.js#LL2C34-L2C39) and add your GitHub username instead of 'xyz' in [line](https://github.com/nguptaa183/devPortfolio/blob/main/src/constants/userData/projects.js#LL6C52-L6C55)
- Add your own favicon in public/icons/favicon folder
- Upload your favicon into [favicon.io](https://favicon.io/favicon-converter), download the favicon zip file and extract into /public folder
- Add your skill icon from [SimpleIcons](https://simpleicons.org) or [FontAwesome](https://fontawesome.com/search), if not present in public/icons/skills folder
- Add your college logo in public/logos/colleges
- Add your companies logo in public/logos/companies
- Run `npm install`
- Run `npm start`

## Publish
- If you've domain name registered, use [Netlify](https://www.netlify.com/) for continuos deployment and build
- If not, publish using [GitHub Pages](https://pages.github.com/), follow these [steps](https://github.com/gitname/react-gh-pages#3-install-the-gh-pages-npm-package)

## Credits
- Inspiration by [Smakosh](https://github.com/smakosh/gatsby-portfolio-dev)
- Icons by [SimpleIcons](https://simpleicons.org) and [FontAwesome](https://fontawesome.com/search)
- Dummy Logo by [Flaticon](https://www.flaticon.com/)
- [EmailJS](https://www.emailjs.com/) for sending email directly from contact form
- Favicon generator by [favicon.io](https://favicon.io/favicon-converter)

## License

MIT license @ [Nikhil](https://nikhilgupta.me)

<h1 align="center">Welcome to Seed 👋</h1>

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

</div>

<h2 align="center">Seed is deployed and live, click <a href="https://www.seed.abdulahadsiddiqui.com/" target="_blank" >here</a> and check it out now! </h2>

<p align="center">
  <a href="https://www.seed.abdulahadsiddiqui.com/" target="_blank"> 
    <img src="https://github.com/AbdulAhadSiddiqui11/seed/blob/main/static/seed-home.png" alt="Seed Home">
  </a>
</p>

<h4 align="center"> <em> Seed is a general purpose blogging app with blazing fast page renders by utilizing <a href="https://nextjs.org/docs/basic-features/pages#static-generation" target="_blank"> SSG </a> and it also keep your content up to date with <a href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration" target="_blank"> ISR. </a> The deployed version utilizes <strong> Seed </strong> as a Software Engineering blog but you can customize it for your usecase </em></h4>
  
#### Features:
* <b>Modern & Responsive Design</b> : Seed comes with beautiful modern design with fully responsive layout which results in an amazing UX

* <b>Dynamic Routing</b> : Seed will create dynamic routes to new blogs or categories you add from your CMS
* <b>Static Site Generation</b> : All blog posts will be static in nature, meaning they don't require client side async API calls or server side processing to render, these pages are cached and served blazing fast directly from a CDN. One more benefit to static pages is, they are SEO friendly. 
* <b>Incremental Static Site Regeneration</b> : Seed will revalidate the static pages on each request and update the content as needed. This will make sure users are always seeing latest content while enjoying super fast page loads
* <b>Client Side Data Fetching</b> : Components like "Related posts" on the side-bar will fetch data in real time to promote specific posts. This way most of the page still remain static 
* <b>Unlimited Authors, Posts and Categories</b> : There is no limit the number of authors, post or categories you want to publish onto Seed
* <b>Comments Moderation</b> : All readers can submit comments, but they will only be published for public view after your approval
* <b>Google Analytics</b> : Monitor site activity with Google Analytics

## Tech. stack
### Front-end stack
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [GraphQL](https://graphql.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Sass](https://sass-lang.com/documentation/)

### Back-end stack
* [Next.js](https://nextjs.org/) : API endpoints, Static Site Generation (SSG), Incremental Static Site Regeneration (ISR), & Client-Side Data Fetching
* [HyGraph](https://hygraph.com/docs) : Datastore / Headless CMS


## Installing locally

### Setting up HyGraph CMS
* Create a <i>Graph CMS project</i> with schema provided.
* Check out [HyGraph documentation](https://hygraph.com/docs) for a step by step guide
* Once you have your HyGraph CMS ready, fill in your env. varilables and proceed with the next steps
* You can use [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html) or any other CMS in place of HyGraph and host it yourself

### Setting up dev. environment variables
* Create a new file ```.env.development``` under ```./``` and fill the following three variables
```sh
NEXT_PUBLIC_GRAPHCSM_ENDPOINT = < YOUR CMS ENDPOINT >

NEXT_PUBLIC_GRAPHCSM_TOKEN = < YOUR CMS AUTH. TOKEN >

NEXT_PUBLIC_GA_MEASUREMENT_ID = < YOUR GOOGLE ANALYTICS MEASUREMENT ID >
```

### Installing dependencies
* Use the following command in your terminal from ```./``` to install project dependencies
```sh
npm install
< or >
yarn install
< or >
pnpm install
```

### Starting the development server
* After you have installed dependencies, use the following command in your terminal from ```./``` to start the dev. server
```sh
npm run dev
< or >
yarn dev
< or >
pnpm dev
```
* Visit ```http://localhost:3000``` to view Cacta on your local machine

## Build & Deploy

### Environment variables
* Update the evniornment variables on your hosting platform before building
```sh
NEXT_PUBLIC_GRAPHCSM_ENDPOINT = < YOUR CMS ENDPOINT >

NEXT_PUBLIC_GRAPHCSM_TOKEN = < YOUR CMS AUTH. TOKEN >

NEXT_PUBLIC_GA_MEASUREMENT_ID = < YOUR GOOGLE ANALYTICS MEASUREMENT ID >
```

### Build command
* Use the following commands for building and deploying
```sh
npm run build
< or >
next build
```

### Install command
```sh
npm install
< or >
yarn install
< or >
pnpm install
```
* Congratulations your Seed app is up and running!

## Author

👤 **Abdul Ahad Siddiqui**

* Github: [@AbdulAhadSiddiqui11](https://github.com/AbdulAhadSiddiqui11)
* LinkedIn: [@abdulahadsiddiqui11](https://linkedin.com/in/abdulahadsiddiqui11)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AbdulAhadSiddiqui11/seed/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Abdul Ahad Siddiqui](https://github.com/AbdulAhadSiddiqui11).<br />
This project is [MIT](https://github.com/AbdulAhadSiddiqui11/seed/blob/main/LICENSE) licensed.

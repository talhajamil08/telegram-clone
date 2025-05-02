# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Supabase Edge Fuctions
Note: Docker Desktop is a prerequisite for local development. Follow the official docs to install: https://docs.docker.com/desktop

Follow the steps below after installing Docker!
npx supabase init
npx supabase login
Npx supabase link --project-ref your-project-refnpx (copy the Project Id from Project Settings or get it from  npx supabase projects list command)
npx supabase db pull
npx supabase start

Creating Functions
npx supabase functions new functionName
npx supabase functions serve

For local environments
npx supabase functions serve --env-file supabase/.env.local

Creating Production Secrets
cp ./supabase/.env.local ./supabase/.env

Let's push all the secrets from the .env file to our remote project using 
supabase secrets set --env-file ./supabase/.env

Supabase Secrets list
npx supabase secrets list 

## Supabase Deployment to Production
npx supabase functions deploy

For more visit https://supabase.com/docs/guides/functions
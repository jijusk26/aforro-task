# Aforro - Mobile App

A React Native mobile application for managing savings and discounts. Built with TypeScript, Redux Toolkit, and React Navigation.

## Tech Stack

- **React Native**
- **TypeScript**
- **Redux Toolkit**
- **React Navigation**
- **React Native Reanimated**
- **React Native SVG**
- **Async Storage**
- **Redux Persist**
- **React Native Permissions**

## Project Structure

```
aforro/
├── android/                    # Android native code and build configuration
│   └── app/                    # Android app module
├── ios/                        # iOS native code and build configuration
│   └── aforro/                 # iOS app folder
├── src/                        # Source code (TypeScript/React)
│   ├── assets/                 # Static assets
│   │   ├── images/             # Image files and exports
│   │   └── svg/                # SVG icons and graphics
│   ├── components/             # Reusable React components
│   │   ├── button.tsx
│   │   ├── coupon.tsx
│   │   ├── header.tsx
│   │   ├── loader.tsx
│   │   ├── options-list.tsx
│   │   └── products-card.tsx
│   ├── constants/              # App constants and configuration
│   │   ├── appconstants.ts
│   │   └── colors.ts
│   ├── data/                   # Mock data
│   │   └── mock-data.ts
│   ├── helpers/                # Utility helper functions
│   │   └── location.ts
│   ├── hooks/                  # Custom React hooks
│   │   └── cart.ts
│   ├── navigation/             # Navigation configuration
│   │   └── root-navigation.tsx
│   ├── screens/                # Screen components (pages)
│   │   ├── add-address/        # Add address screen
│   │   ├── cart-screen/        # Shopping cart screen
│   │   ├── login-screen/       # Login/authentication screen
│   │   ├── products-screen/    # Products listing screen
│   │   └── splash-screen/      # Splash/intro screen
│   ├── services/               # API and external services
│   │   └── products.ts
│   ├── store/                  # Redux store setup
│   │   ├── store.ts            # Store configuration
│   │   └── reducers/           # Redux slices and reducers
│   │       └── user-slice.ts
│   └── types/                  # TypeScript type definitions
│       └── product.ts
├── App.tsx                     # Root application component
├── app.json                    # App configuration
├── index.js                    # Entry point

```

## Getting Started

### 1. Install Dependencies

```bash
# Install npm dependencies
npm install

# OR using Yarn
yarn install
```

### 2. Setup iOS (macOS only)

```bash
# Install Ruby dependencies
bundle install

# Navigate to iOS folder and install CocoaPods
cd ios
bundle exec pod install
cd ..
```

### 3. Start Metro Development Server

Metro is the JavaScript build tool for React Native. Run it in a dedicated terminal:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

# Step 4: Can able to view changes by doing this

- Disable location permission and enter to the application
- Add address is availble is the address is no added
- Move to cart page without login
- Should be login to make order

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
